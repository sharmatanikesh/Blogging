import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'


export const blogRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string
    },
    Variables:{
      userId:string
    }

  }>()
  blogRouter.use('/*',async (c,next)=>{

    const token = c.req.header("authorization")||" "
    const user = await verify(token,c.env?.JWT_SECRET)
    if(user){
      c.set('userId',user.id)
      await next()
    }else{
      c.status(403)
      return c.json({
        message:"Unauthorized"
      })
    }

  })
  
  blogRouter.post('/',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
    try{
    const body = await c.req.json();
    const authorId=c.get('userId')
     const post = await prisma.post.create({
      data:{
        title:body.title,
        content :body.content,
        authorId:authorId
      }
     })

    return c.json({
      id:post.id
    })
    }catch(e){
      console.log(e)
      c.status(403)
      return c.json({error:"error while creating post"})
    }
  })
  
  blogRouter.put('/',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
   
    const body = await c.req.json()
    try{
     const blog = await prisma.post.update({
      where:{
        id:body.id
      },
      data:{
        title:body.title,
        content:body.content
      }

     })
     c.status(200)
     return c.text("Blog Updated")
    }catch(e){
      console.log(e)
      c.status(403)
      return c.json({error:"error while updating post"})
    
    }
  })
  
  blogRouter.get('/:id',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
   
    const id =  c.req.param("id")
    try{
     const blog = await prisma.post.findFirst({
      where:{
        id:id
      }

     })
     c.status(200)
     return c.json(blog)
    }catch(e){
      console.log(e)
      c.status(403)
      return c.json({error:"error while finding the post"})
    
    }
  })
  
  blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
   
    const body = await c.req.json()
    try{
     const blog = await prisma.post.findMany({
      where:{
        id:body.id
      },
     })
     c.status(200)
     return c.json(blog)
    }catch(e){
      console.log(e)
      c.status(403)
      return c.json({error:"Something went wrong"})
    
    }
  })