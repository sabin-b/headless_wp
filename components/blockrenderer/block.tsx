import Banner from "../ui/banner";
import Heading from "../ui/heading";

type getAssignIdsProps = { [key: string]: any }[];

function BlockRenderer({ blocks }: { blocks: getAssignIdsProps }) {
  return blocks.map((block) => {
    console.log(block);
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
      case "core/cover":
        return (
          <Banner key={block.id} backgroundImageUrl={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Banner>
        );
      default:
        return null;
    }
  });
}

export default BlockRenderer;
