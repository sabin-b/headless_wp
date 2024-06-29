import { nanoid } from "nanoid";

type getAssignIdsProps = { [key: string]: any }[];

export async function generateBlocksIds(blocks: getAssignIdsProps) {
  const blockItems: getAssignIdsProps = JSON.parse(JSON.stringify(blocks));
  console.log(blockItems);
  const assignIds = (blocks: getAssignIdsProps) => {
    blocks.forEach((block) => {
      block.id = nanoid();
      if (block.innerBlocks) {
        assignIds(block.innerBlocks);
      }
    });
  };

  //   call the fuuction
  assignIds(blockItems);

  return blockItems;
}
