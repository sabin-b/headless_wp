import { relativeToAbsoluteurl } from "@/lib/helpers";

interface paragraphProps {
  content: string | TrustedHTML;
}

function Paragraph({ content }: paragraphProps) {
  return (
    <p
      className="mx-auto m-0 mt-4 p-0  sm:text-xl/relaxed"
      dangerouslySetInnerHTML={{
        __html: relativeToAbsoluteurl(content.toString()),
      }}
    />
  );
}

export default Paragraph;
