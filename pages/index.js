import { gql } from "@apollo/client";
import { BlockRenderer } from "Components/BlockRenderer";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";
import { MainMenu } from "Components/MainMenu";

export default function Home(props) {
  console.log("PROPS: ", props);
  return (
  <div>
    <MainMenu items={ props.mainMenuItems } />
    <BlockRenderer blocks={props.blocks} />
  </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
    query PageQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
      acfOptionsMainMenu {
        mainMenu {
          menuItems {
            menuItem {
              destination {
              ... on Page {
                uri
              }
              }
              label
            }
            items {
              destination {
                ... on Page {
                uri
              }
              }
              label
            }
          }
        }
      }
    }
    `
  })
  return {
    props: {
      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};
