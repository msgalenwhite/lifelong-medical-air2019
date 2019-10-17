const React = require('React');
const textExamples = require('./textExamples.js')
const ContactBar = require('./ContactBar.js')

const Layout = (props) => {
  const headerText = textExamples.header.map(item => {
    return <span className='headerText'>{item}</span>
  })

  const footerText = textExamples.footer.map(columnData => {
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
    <div>
      <div className='header'>{headerText}</div>
      {props.children}
      <ContactBar />
      <div className='footer'>{footerText}</div>
    </div>
  )
}

module.exports = Layout;
