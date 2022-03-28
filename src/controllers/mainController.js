const db = require('../database/models')

const controller = {
	users: (req, res) => {
		db.User.findAll(
		// 	{
        //     include : [
        //         {association: 'account'}
        //     ]
		// }
		)
		.then((users)=>{
			console.log(users);
			res.json({
				users
			})
		})
	},
	// account: (req, res) => {
	// 	db.Account.findAll({
    //         include : [
    //             {association: 'cards'},
    //             {association: 'user'},
	// 			{association: 'movements'},
	// 			{association: 'transaction-transmitter'},
    //             {association: 'transaction-receiver'},             
    //             {association: 'bank'}
    //         ]
	// 	})
	// 	.then((accounts)=>{
	// 		res.json({
	// 			accounts
	// 		})
	// 	})
	// },
	// bank: (req, res) => {
	// 	db.Bank.findAll({
    //         include : [
    //             {association: 'accounts'}
    //         ]
	// 	})
	// 	.then((banks)=>{
	// 		res.json({
	// 			banks
	// 		})
	// 	})
	// },
	// card: (req, res) => {
	// 	db.Card.findAll({
    //         include : [
    //             {association: 'account'},
    //             {association: 'transactions1'},
    //             {association: 'transactions2'}
    //         ]
	// 	})
	// 	.then((result)=>{
	// 		res.json({
	// 			result
	// 		})
	// 	})
	// },
	// movement: (req, res) => {
	// 	db.Movement.findAll({
    //         include : [
    //             {association: 'account'},
    //             {association: 'transaction'}
    //         ]
	// 	})
	// 	.then((result)=>{
	// 		res.json({
	// 			result
	// 		})
	// 	})
	// },
	// transaction: (req, res) => {
	// 	db.Transaction.findAll({
    //         include : [
    //             {association: 'account-transmitter'},
    //             {association: 'account-receiver'},
    //             {association: 'card-transmitter'},
	// 			{association: 'card-receiver'},
    //             {association: 'movement'},
    //             {association: 'type'},
    //         ]
	// 	})
	// 	.then((result)=>{
	// 		res.json({
	// 			result
	// 		})
	// 	})
	// },
	// type: (req, res) => {
	// 	db.Type.findAll({
    //         include : [
    //             {association: 'transactions'}
    //         ]
	// 	})
	// 	.then((result)=>{
	// 		res.json({
	// 			result
	// 		})
	// 	})
	// },
	

};

module.exports = controller;
