import { relativeToAbsoluteurl } from "@/lib/helpers";
import Link from "next/link";
import { Button } from "./button";

type ButtonElementProps = {
  label: string;
  href: string;
};

function ButtonElement({ href, label }: ButtonElementProps) {
  return (
    <Button asChild size={"lg"} className="rounded-sm text-lg capitalize px-4">
      <Link href={relativeToAbsoluteurl(href)}>{label}</Link>
    </Button>
  );
}

export default ButtonElement;
