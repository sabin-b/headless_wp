import { cn } from "@/lib/utils";

type boxtype = "container" | "normal";

interface ColoumnBoxProps {
  box: boxtype;
  children: React.ReactNode;
}

function ColoumnBox({ box, children }: ColoumnBoxProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 px-4  gap-y-6 md:gap-x-8  max-w-7xl py-20", box)}>
      {children}
    </div>
  );
}

export default ColoumnBox;
