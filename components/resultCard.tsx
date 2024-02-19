import { FC } from "react";
import { Card } from "@/components/ui/card";
import ReactHtmlParser from "react-html-parser";

interface ResultCardProps {
  data: string;
}

const ResultCard: FC<ResultCardProps> = ({data}) => {
  return (
    <Card className=" sm:w-[cal(100%-20px)] lg: w-full  p-2     prose   prose-headings:first-letter:capitalize  prose-headings:text-accent-foreground/75 prose-strong:text-secondary-foreground  prose-strong:text-xl prose-strong:font-semibold  mx-auto mt-8 *:text-foreground prose-code:text-base prose-code:text-muted-foreground prose-code:!bg-muted/70  prose-pre:bg-muted dark:prose-code:!bg-secondary dark:prose-code:!text-secondary-foreground  prose-pre:p-3  dark:prose-pre:bg-secondary  prose-code:data-theme='default' ">
      {ReactHtmlParser(data)}
    </Card>
  );
};

export default ResultCard;
