const router = require('express').Router()

const {getAllFamiliesUser,
getAllFamiliesAdmin,
createFamily,
updateFamily,
deleteFamilyUser,
deleteFamilyAdmin} = require('../controllers/family.controller')
const { checkAdmin, checkMedium, checkTotal, checkRestricted } = require('../middlewares/auth')


router.get('/get', checkTotal,getAllFamiliesUser)
router.get('/admget',checkAdmin, getAllFamiliesAdmin)
router.post('/create', checkMedium, createFamily)
router.put('/mod/:id',checkMedium ,updateFamily)
router.delete('/rm',checkRestricted ,deleteFamilyUser)
router.delete('/admrm/:id', checkAdmin, deleteFamilyAdmin)

module.exports = router