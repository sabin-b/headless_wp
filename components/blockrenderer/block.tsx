import Image from "next/image";
import Banner from "../ui/banner";
import ButtonElement from "../ui/button-element";
import ColoumnBox from "../ui/columns-box";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";

// type getAssignIdsProps = { [key: string]: any }[];

interface getAssignIdsProps {
  blocks: { [key: string]: any }[];
}

function BlockRenderer({ blocks }: getAssignIdsProps) {
  return blocks.map((block) => {
    // console.log(block);
    switch (block.name) {
      case "core/heading":
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            level={block.attributes.level}
          />
        );
      case "core/paragraph":
        return <Paragraph content={block.attributes.content} />;
      case "core/cover":
        return (
          <Banner key={block.id} backgroundImageUrl={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Banner>
        );
      case "core/button":
        return (
          <ButtonElement
            key={block.id}
            label={block.attributes.content}
            href={block.attributes.url}
          />
        );
      case "core/image":
        return (
          <div className="relative w-full h-[200px] md:h-full">
            <Image
              alt={block.attributes.id}
              src={block.attributes.url}
              fill
              priority
              className="object-cover h-full w-full"
            />
          </div>
        );
      case "core/column":
        return (
          <div>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      case "core/buttons":
        return (
          <div
            key={block.id}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      case "core/columns":
        return (
          <ColoumnBox box="container">
            <BlockRenderer blocks={block.innerBlocks} />
          </ColoumnBox>
        );
      default:
        return null;
    }
  });
}

export default BlockRenderer;
