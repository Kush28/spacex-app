/* eslint-disable no-console */
import express from 'express'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import compression from 'compression'
import Root from '../src/_root'
import ssr from '../src/server'
import { DOCTYPE } from '../src/constants'

const app = express()
const port = process.env.PORT || 3000

app.use(compression())

app.use(express.static('./dist'))

app.disable('x-powered-by')

app.listen(port, () => console.log('########  App running on Port: ', port, ' ########'))

// server rendered home page
app.get('/', async (req, res) => {
  const { main, serverSideState } = await ssr({ query: req.query })
  const root = renderToNodeStream(<Root state={serverSideState} main={main} />)
  res.write(DOCTYPE);
  root.pipe(res, { end: false })
  root.on('end', () => {
    res.end()
  })
})

app.all('*', (req, res) => res.sendStatus(404))
