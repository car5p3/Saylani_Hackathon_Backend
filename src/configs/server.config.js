require("dotenv").config()

const config={
    appPort:process.env.PORT,
    dbUri:process.env.MONGODB_URI,
    jwtExpireIn:process.env.JWT_COOKIE_EXPIRE_IN,
    tokenExpireIn:process.env.TOKEN_EXPIRE_IN,
}

module.exports=config