const React = require('React');
const ContactBar = require('./ContactBar.js')
const Footer = require('./Footer.js')
const {Link} = require('gatsby')

const Layout = (props) => {
  const phoneNumber = <span className='headerText'>{"(510) 981 - 4100"}</span>

  const primaryHeader = [{
    text: 'Patient Portal',
    route: '/patients'
  }, {
    text: 'Language'
  }].map(item => {
    if (item.route !== null) {
      return (
        <Link
          to={item.route}
          className='headerText'
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

  const secondaryHeader = [{
      text: 'Our Services',
      route: '/'
    }, {
      text: 'Find a Location',
      route: '/locations'
    }, {
      text: 'Make an Appointment',
      route: '/appointment'
    }].map(item => {
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

  return(
    <div>
      <div className='header'>
        {phoneNumber}
        {primaryHeader}
      </div>
      <nav className='secondaryHeader'>{secondaryHeader}</nav>
        {props.children}
      <ContactBar />
      <Footer />
    </div>
  )
}

module.exports = Layout;
