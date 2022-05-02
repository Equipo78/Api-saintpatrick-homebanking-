let {check, body} = require('express-validator')
const db = require('../database/models')
const Users = db.User
const bcrypt = require('bcryptjs')

module.exports =[
    check('email')
    .notEmpty()
    .withMessage('Email requerido').bail()
    .isEmail()
    .withMessage('Ingrese un email valido'),

    check('password')
    .isLength({min:6, max:12})
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('password')
    .custom((value, {req}) => {
        console.log(value)
        console.log(req.body.email)
        return Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {  
            console.log(user)
            if(!bcrypt.compareSync(value, user.password)){
                return Promise.reject()
            }
        })
        .catch(() => {
            return Promise.reject("Email o contraseña invalidos")
        })
     })



]