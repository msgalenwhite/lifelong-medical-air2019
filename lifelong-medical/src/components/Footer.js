import React from "react";
import SocialIconBar from "./SocialIconBar";

const Footer = props => {
  const contactColumn = (
    <div className="column">
      <h3>Contact Us</h3>
      <p>(510) 981 - 4100</p>
      <br />
      <h3>Mailing Address</h3>
      <address>
        P.O.Box 11247
        <br />
        Berkley, CA 94712
      </address>
      <SocialIconBar />
    </div>
  );

  const footerText = _footerTextExamples.map((columnData, dataIndex) => {
    const items = columnData.content.map((item, index) => {
      return <li key={`${columnData.header}_${item}_${index}`}>{item}</li>;
    });

    return (
      <div className="column" key={`footer_column_${dataIndex}`}>
        <h3>{columnData.header}</h3>
        <ul>{items}</ul>
      </div>
    );
  });

  return (
    <div className="footer">
      {contactColumn}
      {footerText}
    </div>
  );
};

const _footerTextExamples = [
  {
    header: "About Us",
    content: [
      "Mission",
      "Executive Leadership",
      "History",
      "Diversity",
      "Partnerships"
    ]
  },
  {
    header: "Program & Services",
    content: [
      "Mission",
      "Executive Leadership",
      "History",
      "Diversity",
      "Partnerships"
    ]
  },
  {
    header: "Locations",
    content: [
      // "Mission",
      // "Executive Leadership",
      // "History",
      // "Diversity",
      // "Partnerships",
      "Health",
      "Dental",
      "Behavioral Health"
    ]
  },
  {
    header: "Support Us",
    content: [
      "Mission",
      "Executive Leadership",
      "History",
      "Diversity",
      "Partnerships"
    ]
  }
];

export default Footer;
