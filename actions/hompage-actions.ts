"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";

export async function getHomepageBlocks(): Promise<{}[]> {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });

  return data.nodeByUri.blocks;
}
