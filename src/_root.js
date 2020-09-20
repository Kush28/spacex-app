import React from 'react'

export default function Root({ main, state }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SpaceX Launch Programs</title>
        <meta
          name="description"
          content="An application which would help users list and browse all launches by SpaceX program."
        />
        <meta name="keywords" content="SpaceX, Launches" />
        <meta name="author" content="Kushal Mukherjee" />
        <meta property="og:title" content="SpaceX Launch Programs" />
        <meta
          property="og:description"
          content="An application which would help users list and browse all launches by SpaceX program."
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div id="app">{main}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__STATE__= ${JSON.stringify(state)}`,
          }}
        />
        <script src="main.js" />
      </body>
    </html>
  )
}
