"use client";

import FeaturesHeading from "@/components/FeaturesHeading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { features } from "@/utils/features";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation as UseMutation } from "@tanstack/react-query";
import axios from "axios";
import { City, Country, State } from "country-state-city";
import { FC, useEffect, useState } from "react";
import { useForm as UseForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  nitrogen: z.coerce.number().min(10).max(200),
  phosphorous: z.coerce.number().min(10).max(200),
  pottasium: z.coerce.number().min(10).max(200),
  ph: z.coerce.number().min(0).max(14),
  rainfall: z.coerce.number().min(5).max(2000),
  country: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
});

interface CropRecommendationPageProps {}

const CropRecommendationPage: FC<CropRecommendationPageProps> = ({}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("IN"); // Default to India
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const countryStates = State.getStatesOfCountry(selectedCountry);
  const stateCities = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  const mutation = UseMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}crop-predict`,
        values
      );
    },
  });

  const form = UseForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nitrogen: 0,
      phosphorous: 0,
      pottasium: 0,
      ph: 0,
      rainfall: 0,
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
    },
  });
  const { setValue } = form;

  useEffect(() => {
    setValue("country", selectedCountry);
    setValue("state", selectedState);
    setValue("city", selectedCity);
  }, [selectedCountry, selectedState, selectedCity]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
    console.log(values);

    if (mutation.isError) {
      toast.error(`${features[1].label} , Something went wrong !`);
    }
    if (mutation.isSuccess) {
      toast.success(`${features[1].label}, Form submitted successfully`);
    }
  }

  return (
    <FeaturesHeading
      description={features[0].description}
      label={features[0].label}
      imageHref={features[0].herf}
    >
      {mutation.isPending ? (
        <>
          <div className="space-y-2">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
        </>
      ) : (
        <>
          {mutation.isSuccess ? (
            <> {JSON.stringify(mutation.data.data)} </>
          ) : (
            <>
              <div className="flex justify-center items-center h-full w-full my-16">
                <div className="lg:max-w-2xl px-8 w-full justify-center items-center">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8 w-full mx-auto"
                    >
                      <FormField
                        control={form.control}
                        name="nitrogen"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nitrogen</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Nitrogen value"
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              Nitrogen content in soil in PPM (parts Per
                              Million)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phosphorous"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phosphorous</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Phosphorous value"
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              Phosphorous content in soil in PPM (parts Per
                              Million)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pottasium"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Potassium</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Potassium value"
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              Potassium content in soil in PPM (parts Per
                              Million)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ph"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>PH of Soil</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="PH of soil"
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              PH value (0 to 14)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="rainfall"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Rainfall</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Rainfall"
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              Rainfall value in cm (Centimeter)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        disabled
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <Select
                              defaultValue={selectedCountry}
                              onValueChange={(value) =>
                                setSelectedCountry(value)
                              }
                              disabled
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue>
                                    {selectedCountry
                                      ? Country.getCountryByCode(
                                          selectedCountry
                                        )?.name
                                      : "Select a Country"}
                                  </SelectValue>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent position="item-aligned">
                                {Country.getAllCountries().map((country) => (
                                  <SelectItem
                                    key={country.isoCode}
                                    value={country.isoCode}
                                  >
                                    {country.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>Select a Country</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <Select
                              defaultValue={selectedState}
                              onValueChange={(value) => setSelectedState(value)}
                              disabled={!selectedCountry}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  {" "}
                                  <SelectValue>
                                    {selectedState
                                      ? State.getStateByCodeAndCountry(
                                          selectedState,
                                          selectedCountry
                                        )?.name
                                      : "Select a State"}
                                  </SelectValue>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent position="item-aligned">
                                {countryStates.map((state) => (
                                  <SelectItem
                                    key={state.isoCode}
                                    value={state.isoCode}
                                  >
                                    {state.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>

                            <FormDescription>Select a State</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <Select
                              defaultValue={selectedCity}
                              onValueChange={(value) => setSelectedCity(value)}
                              disabled={!selectedState}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  {" "}
                                  <SelectValue>
                                    {selectedCity
                                      ? selectedCity
                                      : "Select a City"}
                                  </SelectValue>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent position="item-aligned">
                                {stateCities.map((city) => (
                                  <SelectItem key={city.name} value={city.name}>
                                    {city.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>

                            <FormDescription>Select a City</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </FeaturesHeading>
  );
};

export default CropRecommendationPage;
