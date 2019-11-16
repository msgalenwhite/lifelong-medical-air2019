import React from "react";

import logo from "../static/logo.jpg";

import { Link, useStaticQuery, graphql } from "gatsby";

const HeaderBar = props => {
  const data = useStaticQuery(graphql`
    query SecondaryHeaderData {
      lifeLongWordPress {
        pages {
          nodes {
            slug
            title
            menuOrder
          }
        }
      }
    }
  `);

  const secondaryHeader = data.lifeLongWordPress.pages.nodes
    .filter(item => item.menuOrder !== null)
    .sort((a, b) => (a.menuOrder > b.menuOrder ? 1 : -1))
    .map(item => {
      return (
        <Link
          to={item.slug === "home-page" ? "/" : item.slug}
          className="secondaryHeaderText"
          activeClassName="secondaryActive"
          partiallyActive={item.slug !== "home-page"}
          replace
          key={`secondary_header_${item.menuOrder}`}
        >
          {item.title}
        </Link>
      );
    });

  return (
    <div>
      <div className="logoNavBar">
        <img className="logo" src={logo} alt="Lifelong Medical Logo" />
        <nav className="secondaryHeader">{secondaryHeader}</nav>
      </div>
    </div>
  );
};

export default HeaderBar;
