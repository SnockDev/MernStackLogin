import jwt  from "jsonwebtoken";
const secret=process.env.SECRET

export const validateToken=(req,res,next)=>{
    const {token}=req.cookies
    if(!token) return res.status(401).send({message:'No token, authorization denied'})
    jwt.verify(token,secret, (err,decoded)=>{
        if(err) return res.status(403).send('invalid token'), console.log(secret);
        req.user=decoded
    })
    next()
}