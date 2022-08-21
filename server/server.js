/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable-next-line no-unused-vars */
const express = require('express')
const fs = require('fs')
const path = require('path')

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('../src/App')

const PORT = 8000
const app = express()

app.use('^/$', (req, res, next) => {
  console.log('entro a leer')
  fs.readFile(
    path.resolve('D:/GitHub/Portafolio/dist/index.html'),
    'utf-8',
    (err, data) => {
      if (err) {
        console.log('chipilin', err)
        return res.status(500).send('Ocurrio un error')
      }

      return res.send(data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      ))
    }
  )
})

app.use(express.static(path.resolve('D:/GitHub/Portafolio/dist')))

app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`)
})
