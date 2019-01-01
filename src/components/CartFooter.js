import React from 'react'

const footer = (copyright) => {
   return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="index.html">&copy; {copyright}</a>
    </nav>
  )
}

export default footer
