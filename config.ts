import { config } from 'dotenv'
config();

export const APP_PORT:number = <number> Number(process.env.APP_PORT)