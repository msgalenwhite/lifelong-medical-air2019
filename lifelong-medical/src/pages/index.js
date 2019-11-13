const React = require("React")
const Layout = require("../components/Layout.js")
const PageSlice = require("../components/PageSlice.js")
const photo = require("../static/filler1.jpg")

const MainPage = () => {
  const values = [
    "We respect each person and celebrate the rich diversity of our communities.",
    "We believe all people are entitled to quality health care that serves the whole person.",
    "We are dedicated to recruiting, training, and supporting a diverse, compassionate, and skilled staff",
    "We are committed to eliminating health disparities.",
    "We maximize our impact on the health of our community through local, state, and national partnerships.",
    "We continuously seek to hear our patients' voice as we assess, develop, and improve our programs.",
  ].map((item, index) => {
    return <li key={`values_${index}`}>{item}</li>
  })

  const services = [
    {
      header: "Health",
      items: [
        "Primary & Preventative Medical Care",
        "Immediate/Urgent Care",
        "Prenatal & Pediatric Services",
        "Geriatric Care",
        // "Wellness & Health Education",
        // "Specialty and Hospital Referrals",
        "Chronic Disease Screenings & Management",
        // "Counseling/Mental Health Services", Will be replaced by Behavioral Health
        // "Podiatry",
        "Women's Health/Family Planning",
        "Physicals for School, Work, & Sports",
        "On-Site Lab & Blood Draws",
      ],
    },
    {
      header: "Dental",
      items: [
        "Dental Hygiene",
        "Regular exams and screenings",
        "Pediatric, Adult, and Geriatric",
        "Dental Treatments and Surgery",
        // "Fillings",
        // "Dentures",
        // "Extractions",
        // "Cavity Treatment",
        // "Sealants for Children",
        // "Molar Root Canals",
        // "Crowns and Bridges",
      ],
    },
    {
      header: "Behavioral Health",
      items: [
        "Mental Health Treatment",
        "Recovery Services",
        "Connecting to social services",
      ],
    },
    // { // TODO move to "Become a patient"
    //   header: "Eligibility & Enrollment",
    //   items: [
    //     "Medi-Cal",
    //     "CalFresh",
    //     "Covered CA",
    //     "HealthPAC",
    //     "Contra Costa CARES",
    //   ],
    // }
  ].map((columnData, columnIndex) => {
    return (
      <div className="column" key={`services_column_${columnIndex}`}>
        <h2>{columnData.header}</h2>
        <ul style={{ textAlign: "left" }}>
          {columnData.items.map((item, index) => {
            return (
              <li key={`services_${columnData.header}_${index}`}>{item}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <Layout>
      <div style={{ width: "85em" }}>
        <PageSlice imgSrc={photo} imgAlt="Smiling doctor and patient.">
          <h1>Care. Compassion. Community.</h1>

          <p>
            LifeLong Medical Care provides{" "}
            <b>high-quality health, dental, and social services</b> to
            underserved people of all ages.
          </p>
          <br />
          <p>
            Our Federally Qualified Community Health Center serves more than
            66,000 individuals of all ages in West Contra Costa, Alameda, and
            Marin Counties each year with medical, dental and/or social
            services.
          </p>
          <h1>Our Vision</h1>
          <ul className="values">{values}</ul>
        </PageSlice>
      </div>
      <div style={{ width: "85em", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>Our Services</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {services}
        </div>
      </div>
    </Layout>
  )
}

module.exports = MainPage
