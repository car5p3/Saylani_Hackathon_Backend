const whiteList=['http://localhost:5173','http://localhost:5174','http://localhost:3000','http://localhost:3001']

const corsConfig = {
    origin : function(origin, callback) {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else{
            callback(new Error('cors error'))
        }
    },
    credentials:true,
}

module.exports={
    corsConfig
}