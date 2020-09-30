import { Request, Response } from "express"
import fetch from "node-fetch"

export const ipController = {
  fetchIP: async (req: Request, res: Response) => {
    const IP = true
      ? "https://ipvigilante.com/json/2603:9001:205:3d00:6cf3:60a6:e94f:5dd9"
      : `https://ipvigilante.com/json/${req.clientIp}`

    console.log(IP)

    if (!req.clientIp) {
      return res.status(500)
    }

    try {
      let data = await fetch(IP)
      let json = await data.json()
      return res.json(json)
    } catch (error) {
      console.log("==ERROR==")
      console.log(error)
      return res.status(500)
    }
  }
}
