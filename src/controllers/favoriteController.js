const db = require('../database/models')

const controller = {
	getFavorites: (req, res) => {
		db.Favorite.findAll(
			{
			where:{
				activo:true
			},
            include : [
                {association: 'account'},
                {association: 'user'}
            ]
		}
		)
		.then((payload)=>{
			res.json({
				payload
			})
		})
	},
    addFavorites:async (req,res)=>{
        let fav=req.body;
        return await db.Favorite.create({
                description:fav.description,
                id_user:fav.id_user,
                id_account:fav.id_account
            })
			.then((payload)=>{
				res.json({
					payload
				})
			})
			.catch((error)=>{
				res.status(400).json({
					error
				})
			})

    },
    deleteFavorites:(req,res)=>{
		let fav=req.body;
 
		await User.update({ activo: fav.activo }, {
			where: {
			  id:fav.id
			}
		  })
		  .then((payload)=>{
			res.json({
				payload
			})
		})
		.catch((error)=>{
			res.status(400).json({
				error
			})
		})

    },
    updateFavorites(req,res){
		let fav=req.body;
 
		await User.update({ description: fav.description }, {
			where: {
			  id:fav.id
			}
		  })
		.then((payload)=>{
			res.json({
				payload
			})
		})
		.catch((error)=>{
			res.status(400).json({
				error
			})
		})
    }

	

};

module.exports = controller;
