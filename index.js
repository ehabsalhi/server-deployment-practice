const { runServer } = require("./server")
require('dotenv').config();
const port = process.env.PORT || 4000

runServer(port)