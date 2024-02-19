"use client";

import { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {}

const ToasterProvider: FC<ToasterProviderProps> = ({}) => {
  return (
    <>
      <Toaster position="bottom-center" gutter={5} />
    </>
  );
};

export default ToasterProvider;
