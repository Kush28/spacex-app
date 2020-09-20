import React from 'react'

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <b>Developed by: </b>
          Kushal
        </p>
      </footer>
    </>
  )
}

export default Layout
