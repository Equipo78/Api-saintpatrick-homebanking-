const db = require('../database/models')

const controller = {
	getFavorites: (req, res) => {
		console.log("id", req.params.id);
		db.Favorite.findAll(
			{
			where:{
				activo:true,
				id_user:req.params.id
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
		console.log("fav", fav);
        return await db.Favorite.create({
			id:1,
                description:fav.description,
                id_user:fav.id_user,
                id_account:fav.id_account,
				activo:fav.activo
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
    deleteFavorites:async (req,res)=>{
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
    async updateFavorites(req,res){
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
