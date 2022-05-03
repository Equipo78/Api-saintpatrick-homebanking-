function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
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
                
                db.Transaction.create({
                    nro_operation : random(10000000, 99999999),
                    description : description ? description : "sin descripcion",
                    amount,
                    id_account_transmitter : req.session.user.id_account,
                    id_account_receiver : accountReceiver.account.id,
                    id_type : +type,
                    date : moment().format('YYYY-MM-DD h:mm:ss a')
                    
                })
                .then(t =>{
                    res.send(t)
                })
                    
              
            }
            
        })
    }
}

module.exports = controller