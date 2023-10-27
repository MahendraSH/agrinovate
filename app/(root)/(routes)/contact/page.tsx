import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Button> Contact Page </Button>
    </div>
  );
};

export default ContactPage;
