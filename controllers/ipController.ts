import { Request, Response } from "express"
import fetch from "node-fetch"

export const ipController = {
  fetchIP: async (req: Request, res: Response) => {
    if (!req.ip) {
      return res.status(500)
    }

    try {
      let data = await fetch(`https://ipvigilante.com/json/${req.ip}`)
      let json = await data.json()
      return res.json(json)
    } catch (error) {
      console.log("==ERROR==")
      console.log(error)
      return res.status(500)
    }
  }
}
