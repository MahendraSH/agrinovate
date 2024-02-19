import { FC } from "react";
import { Card } from "@/components/ui/card";
import ReactHtmlParser from "react-html-parser";

interface ResultCardProps {
  data: string;
}

const ResultCard: FC<ResultCardProps> = ({ data }) => {
  return (
    <Card className=" sm:w-[cal(100%-20px)] lg: w-full  p-2     prose   prose-em:font-semibold   ">
      {ReactHtmlParser(data)}
    </Card>
  );
};

export default ResultCard;
