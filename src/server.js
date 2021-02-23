const express = require('express')

const app = express()
app.use(express.static(`${__dirname}/public`))

const port = process.env.APP_PORT || 3000

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`)
})

app.listen(port)

console.log(`Server running on port ${port}`)
