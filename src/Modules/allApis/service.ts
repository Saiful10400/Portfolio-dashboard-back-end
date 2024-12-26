
import { Prisma } from "@prisma/client"
import prisma from "../../Config/prismaConfig"
import { Request } from "express"

// get perosnal info.
const getPersonalInfo=async()=>{
    const result=await prisma.personalInfo.findFirst({
        where:{
            id:1
        }
    })
    return result
}
// update personal info.
const updatePersonalInfo=async(payload:Partial<Prisma.$PersonalInfoPayload>)=>{
    const result=await prisma.personalInfo.update({
        where:{
            id:1
        },
        data:payload
    })
}

// get blog.
const getBlogs=async(payload:Request)=>{
    if(payload.query.slug){
        const result=await prisma.blog.findFirst({
            where:{
                slug:payload.query.slug as string
            }
        })
        return result
    }
    else{
        const result=await prisma.blog.findMany()
         
        return result
    }
}

// create blog.
const createBlogs=async(payload:Prisma.blogCreateInput)=>{
    const result=await prisma.blog.create({
        data:payload
    })
    return result
}



const allApiService={
    getPersonalInfo,
    updatePersonalInfo,
    getBlogs,
    createBlogs
}

export default allApiService