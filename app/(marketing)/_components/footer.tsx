import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full dark:bg-[#1F1F1F] p-6 bg-background">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms and conditions
        </Button>
      </div>
    </div>
  );
};
