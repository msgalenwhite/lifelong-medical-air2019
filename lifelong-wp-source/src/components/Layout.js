const React = require('React');
const textExamples = require('./textExamples.js')
const ContactBar = require('./ContactBar.js')
const {Link} = require('gatsby')

const Layout = (props) => {
  const primaryHeader = textExamples.header.map(item => {
    if (item.route !== null) {
      return (
        <Link
          to={item.route}
          className='headerText'
          activeClassName='primaryActive'
          partiallyActive={true}
          replace
        >
          {item.text}
        </Link>
      )
    } else {
      return (
        <span className='headerText'>
          {item.text}
        </span>
      )
    }
  })

  const secondaryHeader = textExamples.secondaryHeader
    .map(item => {
      if (item.route !== null) {
        return (
          <Link
            to={item.route}
            className='secondaryHeaderText'
            activeClassName='secondaryActive'
            partiallyActive={item.text !== 'Our Services'}
            replace
          >
            {item.text}
          </Link>
        )
      } else {
        return (
          <span className='secondaryHeaderText'>{item.text}</span>
        )
      }
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
      <div className='header'>{primaryHeader}</div>
      <nav className='secondaryHeader'>{secondaryHeader}</nav>
      <div className='pageContent'>
      {props.children}
    </div>
      <ContactBar />
      <div className='footer'>{footerText}</div>
    </div>
  )
}

module.exports = Layout;
