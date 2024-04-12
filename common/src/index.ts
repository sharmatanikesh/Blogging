import z from 'zod'

export const signUpInput =z.object({
    username:z.string(),
    password:z.string().min(6),
    name :z.string().optional()
})
export type SignupInput= z.infer<typeof signUpInput>


export const signinInput = z.object({
    username:z.string(),
    password:z.string().min(6)
})
export type SigninInput= z.infer<typeof signinInput>

export const createBlogInput = z.object({
    title:z.string().max(30),
    content:z.string().max(2000),

})

export type createBlogInput=z.infer<typeof createBlogInput> 


export const updateBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})

export type UpdateBlogInput=z.infer<typeof updateBlogInput>
