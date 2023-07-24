const jwt= require('jsonwebtoken')
require('dotenv').config()
const {SECRET_KEY} = process.env

function verifyToken(token, SECRET_KEY) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
          reject({
            status: 403,
            message: 'Unauthorized'
          });
        } else {
          resolve(decoded.userId.toString());
        }
      });
    });
  }
  

const auth= async (req, res, next) => {
    try {
        let token = req.headers['x-api-key']  ||  (req.headers["authorization"])
        if(!token){
            return res.status(401).send({
                status: false,
                message: 'Unauthorized'
            })
        }
        if((req.headers["authorization"])){
            token = ((req.headers["authorization"]).split(" "))[1]
       }

        // jwt.verify(token, SECERT_KEY, (err, decoded) => {
        //     if(err){return res.status(403).send({
        //         status: false,
        //         message: 'Unauthorized'
        //     })}else{
 
        //         req['x-api-key']= decoded.userId.toString()
        //         next()
        //     }
        // })

// usage:
verifyToken(token, SECRET_KEY)
  .then(userId => {
    req['x-api-key'] = userId;
    console.log(typeof userId , userId)
    next();
  })
  .catch(error => {
   return  res.status(error.status).send({
      status: false,
      message: error.message
    });
  });

    } catch (error) {
      console.log(error.message)
        res.status(500).send({
            status: false,
            error: error.message
        })
    }
}

module.exports= {auth}