"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";

export async function getpostProperties() {
  try {
    const { data } = await client.query({
      query: gql`
        query allProperties {
          properties {
            nodes {
              slug
              title
              propertyfeatures {
                bathrooms
                bedrooms
                hasparking
                petfriendly
                price
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    });
    return data.properties.nodes;
  } catch (error) {
    return [];
  }
}
