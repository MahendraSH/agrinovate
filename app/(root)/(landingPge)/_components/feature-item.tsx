import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FeatureItemProps {
  index: number;
  label: string;
  herf: string;
  description: string;
  link: string;
}

const FeatureItem: FC<FeatureItemProps> = ({
  label,
  description,
  herf,
  index,
  link,
}) => {
  return (
    <>
      {index % 2 === 1 && (
        <div className="flex items-center lg:w-4/6 mx-auto border-b pb-10 mb-10 border-gray-700 dark:border-gray-200 sm:flex-row flex-col">
          <div className="w-50 h-50   sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100  dark:bg-slate-500 text-primary/80 flex-shrink-0">
            <Link href={link}>
              <Image
                src={herf}
                alt={label}
                width={200}
                height={200}
                className="aspect-square  rounded-full object-cover"
              />
            </Link>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <Link href={link}>
              <h2 className="text-muted-foreground text-lg title-font font-medium mb-2">
                {label}
              </h2>
            </Link>
            <p className="leading-relaxed text-base">{description}</p>
            <Link
              href={link}
              className="mt-3 text-primary inline-flex items-center"
            >
              Lets go
              <MoveRight className="w-6 h-6 ml-2 " />
            </Link>
          </div>
        </div>
      )}
      {index % 2 === 0 && (
        <div className="flex items-center lg:w-4/6 mx-auto border-b pb-10 mb-10 border-gray-700 dark:border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <Link href={link}>
              <h2 className="text-muted-foreground text-lg title-font font-medium mb-2">
                {label}
              </h2>
            </Link>
            <p className="leading-relaxed text-base">{description}</p>
            <Link
              href={link}
              className="mt-3 text-primary inline-flex items-center"
            >
              Lets go
              <MoveRight className="w-6 h-6 ml-2 " />
            </Link>
          </div>
          <div className="w-50 h-50   sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100  dark:bg-slate-500 text-primary/80 flex-shrink-0">
            <Link href={link}>
              <Image
                src={herf}
                alt={label}
                width={200}
                height={200}
                className="aspect-square  rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureItem;
