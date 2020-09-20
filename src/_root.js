import React from 'react'

export default function Root({ title, main, state }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div id="app">{main}</div>
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__STATE__= ${JSON.stringify(state)}`,
        }}
      />
      <script type="text/javascript" src="main.js" />
    </html>
  )
}
