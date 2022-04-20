const db = require('../database/models')
const Users = db.Users
let {validationResult} = require('express-validator')

let controller = {
    login : (req, res)=>{
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            
        
            let {email, password} = req.body
                db.User.findOne({
                    where : {
                        email : email
                    }
                })
                .then(user =>{
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        surname : user.surname,
                        email: user.email,
                        id_account: user.id_account
                    };

                    res.locals.user = req.session.user;
                    
                    res.status(202).json({
                        meta : {
                            status : 202,
                            login : "success",
                        }
                    })
                    
                })
                .catch(error => res.status(400).json({
                    meta : {
                        status : 400,
                        login : "failure",
                        message : "Error login a user",
                    },
                    error
                }))
        } else {
            res.status(400).json({
                meta : {
                    status : 400,
                    register : "failure",
                    message : "Error registering a user"
                },
                errors : errors.mapped()
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(202).json({
            meta : {
                status : 202,
                logout : "success",
            }
        })
    }, 
}

module.exports = controller