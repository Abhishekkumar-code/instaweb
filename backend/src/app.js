const express = require("express")
const cors = require("cors")
const connecttodb = require("./config/database")
const app = express()

app.use(express.json())

app.use(cors())
connecttodb()
module.exports = app