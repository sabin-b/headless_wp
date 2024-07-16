"use server";

import client from "@/config/client";
import { gql } from "@apollo/client";

export async function getpostProperties(searchQuery: string = "") {
  try {
    const { data, loading, error } = await client.query({
      query: gql`
        query property($search: String!) {
          properties(where: { search: $search }) {
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
      variables: {
        search: searchQuery,
      },
    });
    return {
      data: data.properties.nodes,
      loading,
      error,
    };
  } catch (error) {
    return [];
  }
}

/*

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


*/
