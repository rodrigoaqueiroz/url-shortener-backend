import { URLController } from './controller/URLController'
import express from 'express'
import { MongoConnection } from './database/MongoConnection'
import { Request, Response } from 'express'
import cors from 'cors';

const api = express()
api.use(express.json())
api.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true 
}));

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express listening'))
