import React from 'react'

const cartFooter = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">&copy; {props.copyright}</a>
    </nav>
  )
}

export default cartFooter
