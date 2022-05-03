const { Op } = require('sequelize')
const db = require('../database/models')

let controller ={
    account : (req, res) =>{
        db.User.findOne({
            attributes: ['id', 'name', 'surname','dni', 'user_name', 'email'],
            where: {
                id : req.session.user.id
            },
            include : [
                {association: 'account', include: [
                    {association : "movements"},
                    {association: 'cards'},
                    {association: 'bank'},
                ]},
            ],
        })
        .then(data =>{
            res.status(202).json({
                meta :{
                    status : 202,
                    find : "success",
                },
                data
            })
        })
        .catch(error => res.json({error}))
    },
    transaction : (req, res) =>{
        console.log(req.session.user.id_account)
        db.Movement.findAll()
        .then(data =>{
            res.json({
                data
            })
        })
        .catch(error => res.json({error}))
    },

    findCBU : (req, res)=>{
        db.Account.findOne({
            where : {
                cbu : req.query.cbu
            },
            include : [
                {association: 'cards'},
                {association: 'user'},
                {association: 'bank'},
            ]
        })
        .then(account =>{
            if (account) {
                res.status(202).json({
                    meta :{
                        status : 202,
                        find : "success",
                    },
                    account
                })
            } else{
                res.status(404).json({
                    meta :{
                        status : 404,
                        find : "failed",
                    },
                    msg : 'Could not find an account with the cbu entered'
                })
            }
            
        })
        .catch(error => res.json({
            meta:{
                status : 500,
                find : 'failed'
            },
            error
        }))
    }
}


module.exports = controller