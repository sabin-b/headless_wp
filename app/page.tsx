import client from "@/config/client";
import { gql } from "@apollo/client";

async function Homepage() {
  const { data } = await client.query({
    query: gql`
      query homepage {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });
  console.log(data);
  return <div>home page</div>;
}

export default Homepage;
