
  
import { config } from '../config/Constants'
import mongoose from 'mongoose'

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log('Database connected')
        } catch(err) {
            console.error(err.message)
            process.exit(1)
        }
    }
}