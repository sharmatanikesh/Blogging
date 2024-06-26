import { Hono } from 'hono'
import {userRoute }from './routes/user'
import { blogRouter } from './routes/blog'

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.route('/api/v1/user',userRoute)
app.route('/api/v1/blog',blogRouter)




export default app
