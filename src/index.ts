import fs from "fs"
import jsonServer from 'json-server'
import path from "path"
import { isErrorResponse } from "./types/types"

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, "db.json"))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

server.post('/signin', (req, res) => {
  try {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8"));
    const { users = [] } = db

    const userFromBd = users.find(
      (user: { username: string; password: string }) => user.username === username && user.password === password
    )

    if (userFromBd) {
      return res.json(userFromBd)
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (error) {
    if (isErrorResponse(error)) {
      return res.status(500).json({ message: error.message })
    }
  }
})

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'auth error' })
  }

  next()
})

server.use(router)

server.listen(8000, () => {
  console.log('back-end is running')
})
