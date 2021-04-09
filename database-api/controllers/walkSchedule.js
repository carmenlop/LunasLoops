const db = require('../models')

const index = (req, res) => {
    db.WalkSchedule.find({}, (err, foundWalkSchedule) => {
        if (err) {
            console.log('Error in walkschedule#index:', err)
            return res.status(500).json({ message: 'Error, please try again' })
        }

        if (!foundWalkSchedule) {
            return res.status(200).json({ message: "No Walk schedule Found in database." })
        }

        res.status(200).json({ walkSchedule: foundWalkSchedule })
    })
}

const show = (req, res) => {
    console.log('controllers req', req)
    db.WalkSchedule.findById(req.params.id, (err, foundWalkSchedule) => {
        if (err) console.log('Error in walkschedule#show:', err)

        if (!foundWalkSchedule) {
            return res
                .status(200)
                .json({ message: 'walk schedule with provided Id is not found'})
        }
        console.log('controllers foundWalkSchedule', foundWalkSchedule)
        res.status(200).json({ walkSchedule: foundWalkSchedule })
    })
}

const create = (req, res) => {
    db.WalkSchedule.create(req.body, (err, savedWalkSchedule) => {
        if (err) console.log("Error in walkschedule#create:", err)

        res.status(201).json({ walkSchedule: savedWalkSchedule })
    })
}

const update = (req, res) => {
    db.WalkSchedule.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedWalkSchedule) => {
            if (err) console.log("Error in walk schedule#update:", err)

            if(!updatedWalkSchedule) {
                return res.status(200).json({
                    message: "walk schedule with provided ID could not be found or update"
                })
            }

            res.status(200).json({ walkSchedule: updatedWalkSchedule })
        }
    )
}

const destroy = (req, res) => {
    db.WalkSchedule.findByIdAndDelete(req.params.id, (err, deletedWalkSchedule ) => {
        if (err) console.log('Error in walk schedule#destroy:', err)

        if (!deletedWalkSchedule) {
            return res.status(200).json({
                message: "Walk schedule with provided ID could not be found or deleted"
            })
        }

        res.status(200).json({ walkSchedule: deletedWalkSchedule })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}