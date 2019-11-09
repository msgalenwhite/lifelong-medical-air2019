const React = require('React');

const ContactBar = () => {

  return(
    <div className='contactBar'>
      Hello From the ContactBar Component!
      <button className='blueButton'>Become a Patient</button>
      <button className='whiteButton'>Locate the Nearest Center</button>
    </div>
  )
}

module.exports = ContactBar;
