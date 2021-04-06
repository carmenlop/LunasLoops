const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const bearerHeader = req.header['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(" ")[1]
        jwt.verify(token, 'supersecret', function (err, payload) {
            if (err) return res.sendStatus(500).json({ message: 'Invalid Token' })

            req.userId = payload._id

            next()
        })
    } else {
        res.sendStatus(403)
    }
}