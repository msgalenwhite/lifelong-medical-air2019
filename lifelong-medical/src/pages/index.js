import React from "react";
import Layout from "../components/Layout";
import ImageSlice from "../components/ImageSlice";

import { graphql } from "gatsby";
import parse from "html-react-parser";

const MainPage = ({ data }) => {
  const {
    mainContent,
    primaryHeader,
    secondHeader,
    secondaryContent,
    imageSource
  } = data.lifeLongWordPress.pages.edges[1].node.base_page_template_data;

  let columnedServices = [];
  let partial = [];

  parse(secondaryContent)[0]
    .props.children.filter(item => item !== "\n")
    .forEach((item, index) => {
      if (partial.length < 2) {
        partial.push(item);
      } else {
        columnedServices.push(
          <div className="column" key={index}>
            {partial}
          </div>
        );
        partial = [item];
      }
    });
  if (partial.length > 0) {
    columnedServices.push(
      <div className="column" key="remainder">
        {partial}
      </div>
    );
  }

  return (
    <Layout>
      <div style={{ width: "85em" }}>
        <ImageSlice imgSrc={imageSource.sourceUrl} imgAlt={imageSource.altText}>
          <h1>{primaryHeader}</h1>
          <div dangerouslySetInnerHTML={{ __html: mainContent }} />
        </ImageSlice>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>{secondHeader}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"
          }}
        >
          {columnedServices}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    lifeLongWordPress {
      pages {
        edges {
          node {
            base_page_template_data {
              mainContent
              primaryHeader
              secondHeader
              secondaryContent
              imageSource {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export default MainPage;
