"use client";

import FeaturesHeading from "@/components/FeaturesHeading";
import ResultCard from "@/components/resultCard";
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
import { Skeleton } from "@/components/ui/skeleton";
import { features } from "@/utils/features";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation as UseMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { useForm as UseForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
const formSchema = z.object({
  file: z.instanceof(File, { message: " image  is required" }),
});

interface DiseasePredictPageProps {}

const DiseasePredictPage: FC<DiseasePredictPageProps> = ({}) => {
  const mutation = UseMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}disease-predict`,
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
  });

  // 1. Define your form.
  const form = UseForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: {} as File,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
    console.log(mutation.data);
  }
  if (mutation.isError) {
    return toast.error(`${features[2].label} , Something when wrong !`);
  }

  return (
    <FeaturesHeading
      description={features[2].description}
      label={features[2].label}
      imageHref={features[2].herf}
    >
      {mutation.isPending ? (
        <>
          <div className="space-y-2 w-full">
            <div> loading .....</div>
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </>
      ) : (
        <>
          {mutation.isSuccess ? (
            <ResultCard data={mutation.data.data.prediction} />
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
                        name="file"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Leaf Image</FormLabel>
                            <FormControl>
                              <Input
                                placeholder=""
                                type="file"
                                accept="image/*"
                                name="files"
                                onChange={(e) => {
                                  const file = e.target?.files?.[0]; // Null check for e.target.files
                                  if (file) {
                                    form.setValue("file", file);
                                  }
                                }}
                              />
                            </FormControl>
                            <FormDescription>
                              Please upload an image
                            </FormDescription>
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

export default DiseasePredictPage;
