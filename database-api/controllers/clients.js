const db = require('../models')

const indexClient = (req, res) => {
    db.Client.find({}, (err, foundClients) => {
        if (err) {
            console.log('Error in clients#index:', err)
            return res.status(500).json({ message: 'Error, please try again' })
        }

        if (!foundClients) {
            return res.status(200).json({ message: "No Clients Found in database." })
        }

        res.status(200).json({ clients: foundClients })
    })
}

const showClient = (req, res) => {
    console.log('controllers req', req)
    db.Client.findById(req.params.id, (err, foundClient) => {
        if (err) console.log('Error in client#show:', err)

        if (!foundClient) {
            return res
                .status(200)
                .json({ message: 'Client with provided Id is not found'})
        }
        console.log('controllers foundClient', foundClient)
        res.status(200).json({ client: foundClient })
    })
}

const createClient = (req, res) => {
    db.Client.create(req.body, (err, savedClient) => {
        if (err) console.log("Error in clients#create:", err)

        res.status(201).json({ client: savedClient })
    })
}

const updateClient = (req, res) => {
    db.Client.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedClient) => {
            if (err) console.log("Error in client#update:", err)

            if(!updatedClient) {
                return res.status(200).json({
                    message: "Game with provided ID could not be found or update"
                })
            }

            res.status(200).json({ client: updatedClient })
        }
    )
}

const destroyClient = (req, res) => {
    db.Client.findByIdAndDelete(req.params.id, (err, deletedClient ) => {
        if (err) console.log('Error in client#destroy:', err)

        if (!deletedClient) {
            return res.status(200).json({
                message: "Game with provided ID could not be found or deleted"
            })
        }

        res.status(200).json({ client: deletedClient })
    })
}

module.exports = {
    indexClient,
    showClient,
    createClient,
    updateClient,
    destroyClient
}