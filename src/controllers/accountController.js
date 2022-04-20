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
                {association: 'account', include: [{association : "movements"}]},
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
        db.Movement.findAll({
            include : [
                {association: 'account'}
            ],
            where: {
                id_account : req.session.user.id_account
            }
        })
        .then(data =>{
            res.json({
                data
            })
        })
        .catch(error => res.json({error}))
    },
}


module.exports = controller