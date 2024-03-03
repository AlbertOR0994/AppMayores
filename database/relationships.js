const UserModel = require('../api/models/user.model')
const FamilyModel = require('../api/models/family.model')
const UserFamilyModel = require ('../api/models/user_family.model')
const MedicationModel = require('../api/models/medication.model')

const createRelationShips = () => {
    UserModel.belongsToMany(FamilyModel,{ through: UserFamilyModel, as: 'family' })
    FamilyModel.belongsToMany(UserModel, { through: UserFamilyModel, as: 'family' })

    //!revisar
    MedicationModel.belongsTo(UserModel)
    UserModel.hasMany(MedicationModel)


}
module.exports = createRelationShips