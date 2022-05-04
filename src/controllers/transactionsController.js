function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function searchNro(t) {
    let nro = random(10000000, 99999999)
    let nrosExist = t.filter(a => a.nro_operation === nro)
    if (nrosExist.length > 0) {
        searchNro(t)
    } else{
        return nro
    }
}
// console.log(random(10000000, 99999999))
let fetch = require('node-fetch');
const db = require('../database/models');
const moment = require('moment');
console.log(moment().format('YYYY-MM-DD hh:mm:ss'))

let controller = {
    transaction: (req, res)=>{
        fetch(`http://localhost:3000/account/find-account?cbu=${req.body.cbu}`)
        .then(response => response.json())
        .then(accountReceiver =>{
            let {description, amount, type} = req.body
            if(accountReceiver.meta.find === "success"){
                db.Transaction.findAll()
                    .then(transactiones =>{
                        let existNroOperation = searchNro(transactiones)
                        if (existNroOperation) {
                            let date = moment().format('YYYY-MM-DD h:mm:ss a')
                            db.Transaction.create({
                                nro_operation : existNroOperation,
                                description : description ? description : "sin descripcion",
                                amount,
                                id_account_transmitter : req.session.user.id_account,
                                id_account_receiver : accountReceiver.account.id,
                                id_type : +type,
                                date
                            })
                            .then(transaction =>{
                                // let data = [{
                                //     entry : amount,
                                //     egress : 0,
                                //     description,
                                //     id_account : accountReceiver.account.id,
                                //     operation : transaction.nro_operation,
                                //     date
                                // },{
                                //     entry : 0,
                                //     egress : amount,
                                //     description,
                                //     id_account : req.session.user.id_account,
                                //     operation : transaction.nro_operation,
                                //     date
                                // }]
                                if (transaction) {
                                    db.Movement.create({
                                        entry : amount,
                                        egress : 0,
                                        description,
                                        id_account : accountReceiver.account.id,
                                        operation : transaction.nro_operation,
                                        date
                                    })
                                    .then(result =>{
                                        if (result) {
                                            db.Movement.create({
                                                entry : 0,
                                                egress : amount,
                                                description,
                                                id_account : req.session.user.id_account,
                                                operation : transaction.nro_operation,
                                                date
                                            })
                                            .then(result2 =>{
                                                res.send(result2)
                                            })
                                        }
                                    })
                                }
                            })
                        } else {
                            res.json({
                                msg: 'ya existe una transaccion con el numero de operacion',
                                existNroOperation
                            })
                        }
                })
                    
    
            }
            
        })
    },
    existNro: (req, res) =>{
        
    }
}

module.exports = controller