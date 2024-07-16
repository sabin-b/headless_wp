"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";

export async function getSingleProperty(slug: string) {
  const { data } = await client.query({
    query: gql`
      query property($slug: String!) {
        propertyBy(slug: $slug) {
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
          propertyfeatures {
            bathrooms
            bedrooms
            hasparking
            petfriendly
            price
          }
          title
        }
      }
    `,
    variables: {
      slug: slug,
    },
  });

  return data.propertyBy;
}
