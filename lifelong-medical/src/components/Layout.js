const React = require("React");
const Footer = require("./Footer.js");
const HeaderNavBar = require("./HeaderNavBar.js");

const phoneIcon = require("../static/icons/icon-phone.svg");

/*
EVERY PAGE Requires:

For Top Header:
- Main phone number
- Names and destinations for Patient Portal and Donate now [{text: string, root: url}]

For second header:
- link text

[{
  text: string,
  route: url FRAGMENT ex. "/" OR full url,
  gatsby: TRUE if fragment, FALSE if full url
}]
- logo


For Footer:
- social destinations {facebook: url, instagram: url, youtube: url, twitter: url} TODO: currently just icons in format:
[
  { icon: fb, label: "Facebook" },
  { icon: insta, label: "Instagram" },
  { icon: linkedIn, label: "LinkedIn" },
  { icon: twitter, label: "Twitter" },
  { icon: youTube, label: "youTube" }
]
- mailing address
- link to mailchimp TODO: form is missing
- information for each column: TODO, currently [{header: string, content: Array<string>}]

[{
  header: string,
  links: {
    text: string,
    destination: url
  }
}]
*/

const Layout = props => {
  const phoneNumber = (
    <span className="headerText">
      <img src={phoneIcon} alt="phone number" />
      {"(510) 981 - 4100"}
    </span>
  );

  const primaryHeader = [
    {
      text: "Patient Portal",
      route:
        "https://www.lifelongmedical.org/contact-us-main/patient-portal.html"
    },
    {
      text: "Donate Now"
    },
    {
      text: "Language"
    }
  ].map((item, index) => {
    if (item.route !== null) {
      return (
        <a
          key={`primary_header_${index}`}
          className="headerText"
          href={item.route}
        >
          {item.text}
        </a>
      );
    } else {
      return (
        <span key={`primary_header_${index}`} className="headerText">
          {item.text}
        </span>
      );
    }
  });

  return (
    <div>
      <nav className="header">
        {phoneNumber}
        {primaryHeader}
      </nav>
      <HeaderNavBar />
      <div className="pageContent">{props.children}</div>
      <Footer />
    </div>
  );
};

module.exports = Layout;
