import Banner from "../ui/banner";

type getAssignIdsProps = { [key: string]: any }[];

function BlockRenderer({ blocks }: { blocks: getAssignIdsProps }) {
  return blocks.map((block) => {
    console.log(block);
    switch (block.name) {
      case "core/cover":
        return (
          <Banner key={block.id} backgroundImageUrl={block.attributes.url} />
        );
      default:
        return null;
    }
  });
}

export default BlockRenderer;
