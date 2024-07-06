"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";

export async function getSiteLogo() {
  const { data } = await client.query({
    query: gql`
      query logo {
        siteLogo {
          id
          sourceUrl
          altText
        }
      }
    `,
  });

  return data.siteLogo;
}
