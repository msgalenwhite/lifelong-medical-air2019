const React = require('React');
const Layout = require('../components/Layout.js')

const MainPage = () => {

  const values = [
    'We respect each person and celebrate the rich diversity of our communities.',
    'We believe all people are entitled to quality health care that serves the whole person.',
    'We are dedicated to recruiting, training, and supporting a diverse, compassinoate, and skilled staff',
    'We are committed to eliminating health disparities.',
    'We maximize our impact on the health of our community through local, state, and national partnerships.',
    'We continuously seek to hear our patients\' voice as we assess, develop, and improve our programs.'
  ].map((item, index) => {
    return <li className={`values_${index}`}>{item}</li>
  })

  const services = [
    {
      header: 'Health Services',
      items: [
        'Primary & Preventative Medical Care',
        'Immediate/Urgent Care',
        'Prenatal & Pediatric Services',
        'Geriatric Care',
        'Wellness & Health Education',
        'Specialty and Hospital Referrals',
        'Chronic Disease Screenings & Management',
        'Counseling/Mental Health Services',
        'Podiatry',
        'Women\'s Health/Family Planning',
        'Physicals for School, Work, & Sports',
        'On-Site Lab & Blood Draws'
      ]
    },
    {
      header: 'Dental Services',
      items: [
        'Dental Hygiene',
        'Regular exams and screenings',
        'Pediatric, Adult, and Geriatric',
        'Fillings',
        'Dentures',
        'Extractions',
        'Cavity Treatment',
        'Sealants for Children',
        'Molar Root Canals',
        'Crowns and Bridges'
      ]
    },
    {
      header: 'Enrollment Services',
      items: [
        'Medi-Cal',
        'CaliFresh',
        'Covered CA',
        'HealthPAC',
        'Contra Costa CARES'
      ]
    }
  ]

  return(
    <Layout>
      <div className='pageContent'>
        <div className='block'>
          <h1 className='centerText'>Our Mission</h1>
          <p>
            Lifelong Medical Care provides <b>high-quality health, dental, and social services</b> to underserved people of all ages; creates models of care for the elderly, people with disibilites and families; and advocates for continuous improvements in the health of our communities.</p>
        </div>
        <div className='block'>
          <h1 className='centerText'>Our Core Values</h1>
          <ul>{values}</ul>
        </div>
      </div>
    </Layout>
  )
}

module.exports = MainPage;
