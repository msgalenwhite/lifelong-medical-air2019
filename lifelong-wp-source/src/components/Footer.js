const React = require('React');

const Footer = (props) => {

  const footerText = _footerTextExamples.map(columnData => {
    const items = columnData.content.map((item, index) => {
      return <li key={`${columnData.header}_${item}_${index}`}>{item}</li>
    })

    return (
      <div className='column'>
        <div className='columnHeader'>{columnData.header}</div>
        <ul>{items}</ul>
      </div>
    )
  })

  return(
    <div className='footer'>{footerText}</div>
  )
}

const _footerTextExamples = [
  {
    header: 'About Us',
    content: [
      'Mission',
      'Executive Leadership',
      'History',
      'Diversity',
      'Partnerships'
    ]
  },
  {
    header: 'Program & Services',
    content: [
      'Mission',
      'Executive Leadership',
      'History',
      'Diversity',
      'Partnerships'
    ]
  },
  {
    header: 'Locations',
    content: [
      'Mission',
      'Executive Leadership',
      'History',
      'Diversity',
      'Partnerships'
    ]
  },
  {
    header: 'Support Us',
    content: [
      'Mission',
      'Executive Leadership',
      'History',
      'Diversity',
      'Partnerships'
    ]
  }
]

module.exports = Footer;
