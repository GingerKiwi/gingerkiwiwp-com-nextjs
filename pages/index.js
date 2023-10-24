import { gql } from "@apollo/client";
import { BlockRenderer } from "Components/BlockRenderer";
import client from "client";

export default function Home(props) {
  console.log("PROPS: ", props);
  return <div>
    <BlockRenderer />
  </div>;
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
    query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
    }
    `
  })
  return {
    props: {
      blocks: data.nodeByUri.blocks,
      myexampleprops: "testing"
    }
  }
}
