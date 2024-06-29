type getAssignIdsProps = { [key: string]: any }[];

function BlockRenderer({ blocks }: { blocks: getAssignIdsProps }) {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover":
        return <div key={block.id}>cover</div>;
      default:
        return null;
    }
  });
}

export default BlockRenderer;
