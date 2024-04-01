import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'


export const userRoute = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>()
  
  
  // userRoute.post('/signup', async (c) => {
  //     const prisma = new PrismaClient({
  //         datasourceUrl: c.env?.DATABASE_URL	,
  //     }).$extends(withAccelerate());
  
    //  const body = await c.req.json();
      // try {
     // console.log(body)
          // const user = await prisma.user.create({
          //     data: {
          //         email: body.email,
          //         password: body.password,
          //     }
          // });
          // const jwt = await sign({ id: user.id }, c.env.JWT_SECRET); 
          // return c.json({ jwt });
      // } catch(e) {
      //     c.status(403);
      // console.log(e)
      //     return c.json({ error: "error while signing up" });
      // }
  //})
  userRoute.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());  
    const body = await c.req.json();
   // const { success } = signupInput.safeParse(body);
   // if (!success) { c.status(411); return c.json({ message: 'Invalid input' }) }
   // const hashedPass = await hashFunction(body.password);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name || '',
      },
    });
  
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    })
  })
  
  userRoute.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    const body =await c.req.json()
  
    const user = await prisma.user.findUnique({
      where:{
        email:body.email
      }
    })
  
    if(!user){
      c.status(403);
      return c.json({error:"User not found"})
    }
    const token = await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({token})
  })
  