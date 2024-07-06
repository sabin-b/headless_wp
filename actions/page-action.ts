"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";
import { revalidatePath } from "next/cache";

interface getPageDataprops {
  title?: string;
  blocks: { [key: string]: any }[];
}

export async function getPageData(slug: string): Promise<getPageDataprops> {
  const { data } = await client.query({
    query: gql`
      query getPage($slug: String!) {
        nodeByUri(uri: $slug) {
          ... on Page {
            id
            blocks(postTemplate: false)
            title
          }
        }
      }
    `,
    variables: {
      slug: slug,
    },
  });

  // for dev
  if (process.env.WP_ENV === "dev") revalidatePath(`/${slug}`);

  return {
    title: data.nodeByUri.title,
    blocks: data.nodeByUri.blocks,
  };
}
