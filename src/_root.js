import React from "react";

export default function Root({ title, main, state }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div className="content">
          <div id="app">
              {main}
          </div>
        </div>
      </body>
      <script dangerouslySetInnerHTML={{__html: `window.__STATE__= ${JSON.stringify(state)}`}} />
      <script src="client.js" />
    </html>
  );
}
