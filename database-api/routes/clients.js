const router = require('express').Router()
const ctrl = require('../controllers')

// testing now, will add auth after all is working
// const authRequired = require('../middleware/authRequired')

router.get('/', ctrl.clients.indexClient)
router.get('/:id', ctrl.clients.showClient)
router.post('/', ctrl.clients.createClient)
router.put('/:id', ctrl.clients.updateClient)
router.delete('/:id', ctrl.clients.destroyClient)

module.exports = router