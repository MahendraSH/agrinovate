"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { crops } from "@/utils/crops";
import FeaturesHeading from "@/components/FeaturesHeading";
import { features } from "@/utils/features";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";
const formSchema = z.object({
  cropname: z.string().min(3),
  nitrogen: z.coerce.number().min(10).max(200),
  phosphorous: z.coerce.number().min(10).max(200),
  pottasium: z.coerce.number().min(10).max(200),
});

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}fertilizer-predict`,
        values
      );
    },
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cropname: "",
      nitrogen: 0,
      phosphorous: 0,
      pottasium: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
    console.log(values);
    if (mutation.isError) {
      toast.error(`${features[1].label} , Something when wrong !`);
    }
    if (mutation.isSuccess) {
      toast.success(`${features[1].label}, Form submitted  successfully `);
    }
  }

  return (
    <FeaturesHeading
      description={features[1].description}
      label={features[1].label}
      imageHref={features[1].herf}
    >
      {mutation.isPending ? (
        <>
          <div className="space-y-2">
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
              <div className=" flex justify-center items-center  h-full w-full  my-16  ">
                <div className=" lg:max-w-2xl  px-8 w-full justify-center items-center">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8  w-full    mx-auto"
                    >
                      <FormField
                        control={form.control}
                        name="nitrogen"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>nitrogen</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="nitrogen value "
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              nitrogen content in soil in PPM (parts Per
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
                            <FormLabel>phosphorous</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="phosphorous value"
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              phosphorous content in soil in PPM (parts Per
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
                            <FormLabel>pottasium</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="pottasium value"
                                {...field}
                                type="number"
                              />
                            </FormControl>
                            <FormDescription>
                              pottasium content in soil in PPM (parts Per
                              Million)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cropname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Crop Name</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a crop" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent position="item-aligned">
                                {crops.map((item) => (
                                  <SelectItem key={item} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>Select a crop</FormDescription>
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

export default page;
