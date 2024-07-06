import { relativeToAbsoluteurl } from "@/lib/helpers";

interface paragraphProps {
  content: string | TrustedHTML;
}

function Paragraph({ content }: paragraphProps) {
  return (
    <p
      className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"
      dangerouslySetInnerHTML={{
        __html: relativeToAbsoluteurl(content.toString()),
      }}
    />
  );
}

export default Paragraph;
