import dotenv from "dotenv"
import path from "path"

dotenv.config({path:path.join(process.cwd(),".env")})



export default{
    frontEndUrl:process.env.FRONT_END_URL as string,
    frontEndUrlDevelopment:process.env.FRONT_END_URL_DEVELOPMENT as string,
    jwtSecret:process.env.JWT_SECRET,
    tokenLife:process.env.TOKEN_LIFE
} 