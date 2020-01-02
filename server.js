const next = require("next")
const express = require('express')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3005
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    server.use(cookieParser())
    server.get('*', (req, res) => {
        console.log('=======================')
        console.log("this is request : ", req)
        console.log('=======================')

        // For setAssetPrefix

        // if (req.headers.host === 'my-app.com') {
        //   app.setAssetPrefix('http://cdn.com/myapp')
        // } else {
        //   app.setAssetPrefix('')
        // }

        return handle(req, res)
      })
    server.listen(port, err => {
        if (err) throw err;
        console.log(`>>> Ready on http://localhost:${port}`)
      })
}).catch(err => {
    console.error(err.stack)
    process.exit()
})