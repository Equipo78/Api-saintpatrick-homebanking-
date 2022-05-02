let regExNumber = /^[0-9]{9,9}$/

function findCbu(req, res, next) {
    if (regExNumber.test(req.query.cbu)) {
        next()
    } else{
        return res.status(401).json({
            meta : {
                status : 404,
                message : "error reading cbu, please enter a valid cbu",
            }
        })
    }
}

module.exports = findCbu