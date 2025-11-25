import express from "express"
import dotenv from "dotenv"
import TaskRoute from "./src/routes/task.route.js"
import { ConnectDb } from "./src/config/db.js"
import cors from "cors"

const app = express()
dotenv.config()

app.use(cors({
  origin: "*"
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/task", TaskRoute)


ConnectDb().then(() => {
  app.listen(4000, () => {
    console.log("app is running on port 4000")
  })
})