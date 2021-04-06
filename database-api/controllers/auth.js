const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email })
        
        if (foundUser)
            return res.status(400).json({
                status: 400,
                message: "Email address has already been registered. Please try again",
            })

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password.salt)
        const createdUser = await db.User.creat({ ...req.body, password: has })

        return res
            .status(201)
            .json({ status: 201, message: 'success', createdUser })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
        })
    }
}

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email }).select("+password")

        if (!foundUser) {
            return res
                .status(400)
                .json({ status: 400, message:'Username or password is incorrect' })
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)

        if (isMatch) {
            const signedJwt = await jwt.sign(
                { _id: foundUser._id },
                'supersecret',
                { expiresIn: '1h' }
            )

            return res.json({
                status: 200,
                messge: 'success',
                id: foundUser._id,
                signedJwt
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: 'Username or password is incorrect'
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "something went wrong, please try again"
        })
    }
}

const profile = async (req, res) => {
    try {
        const foundUser = await db.User.findById(req.createdUser)

        res.json({ headers: req.headers, user: foundUser })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Something went wrong, please try again'
        })
    }
}

module.exports = {
    register,
    login,
    profile
}