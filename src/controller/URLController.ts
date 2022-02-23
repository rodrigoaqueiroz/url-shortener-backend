import { config } from '../config/Constants'
import { Request, Response } from 'express'
import shortId from 'shortid'

export class URLController {
  public async shorten(req: Request, response: Response): Promise<void> {
    // url exists?
    // make a hash for this URL
    // save URL in mong
    // returns URL
    const { originURL } = req.body
    const hash = shortId.generate()
    const shortURL = `${config.API_URL}/${hash}`
    response.json({ originURL, hash, shortURL })
  }
}