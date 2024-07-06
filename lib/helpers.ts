import { getMenus } from "@/actions/menu-action";
import { nanoid } from "nanoid";

type getAssignIdsProps = { [key: string]: any }[];

/**
 *
 * @param blocks
 * @returns each block with unique id
 */
export async function generateBlocksIds(blocks: getAssignIdsProps) {
  const blockItems: getAssignIdsProps = JSON.parse(JSON.stringify(blocks));
  //   console.log(blockItems);
  const assignIds = (blocks: getAssignIdsProps) => {
    blocks.forEach((block) => {
      block.id = nanoid();
      if (block.innerBlocks) {
        // assign to innerblocks
        assignIds(block.innerBlocks);
      }
    });
  };

  //   call the fuuction
  assignIds(blockItems);

  return blockItems;
}

/**
 *
 * @param string
 * @returns relativeurl map to absoulte url
 */

export function relativeToAbsoluteurl(text: string): TrustedHTML {
  return text.split(process.env.NEXT_PUBLIC_WP_URl!).join("/");
}

/**
 * get main menus
 * @returns array of menus
 */

export async function getMainMenus() {
  const menuitems: { [key: string]: any }[] = await getMenus();
  return menuitems.map((item) => {
    return {
      id: nanoid(),
      label: item.menuItem.label,
      destination: item.menuItem.destination.uri,
      subMenuItems: (item.submenuItems || []).map((submenuitem: any) => {
        return {
          id: nanoid(),
          label: submenuitem.label,
          destination: submenuitem.destination.uri,
        };
      }),
    };
  });
}
