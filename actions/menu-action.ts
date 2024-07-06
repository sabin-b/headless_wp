"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";

export async function getMenus() {
  const { data } = await client.query({
    query: gql`
      query HeaderMenus {
        menus {
          mainMenu {
            menuItems {
              menuItem {
                fieldGroupName
                label
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
              }
              submenuItems {
                fieldGroupName
                label
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return data.menus.mainMenu.menuItems;
}
