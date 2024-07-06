"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";

export async function getCtaProperties() {
  const { data } = await client.query({
    query: gql`
      query HeaderMenus {
        menus {
          mainMenu {
            callToActionBtn {
              destination {
                ... on Page {
                  id
                  uri
                }
              }
              label
            }
          }
        }
      }
    `,
  });

  return data?.menus?.mainMenu?.callToActionBtn;
}
