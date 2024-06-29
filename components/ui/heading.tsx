import { cn } from "@/lib/utils";

interface HeadingProps {
  content: string;
  textAlign?: string;
  level?: number;
}

function Heading({ content, level, textAlign }: HeadingProps) {
  return (
    <div>
      {level === 1 && (
        <h1
          className={cn("text-white", {
            "text-center": textAlign === "center",
            "text-left": textAlign === "left",
            "text-right": textAlign === "right",
          })}
        >
          {content}
        </h1>
      )}
    </div>
  );
}

export default Heading;
