/* eslint-disable no-console */
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import compression from 'compression'
import Root from './src/_root'
import ssr from './src/server'
// import { DOCTYPE } from './src/constants'

const app = express()
const port = process.env.PORT || 3000
app.disable('x-powered-by')

app.use(compression())

app.use(express.static('./dist'))

app.listen(port, () => console.log('########  App running on Port: ', port, ' ########'))

// server rendered home page
app.get('/', async (req, res) => {
  const { main, serverSideState } = await ssr({ query: req.query })
  // const rootStream = renderToNodeStream(<Root state={serverSideState} main={main} />)
  // res.write(DOCTYPE)
  // rootStream.pipe(res, { end: false })
  // rootStream.on('end', () => {
  //   res.end()
  // })
  const root = renderToString(<Root title="SpaceX App" state={serverSideState} main={main} />)
  res.send(root)
})

app.all('*', (req, res) => res.sendStatus(404))
