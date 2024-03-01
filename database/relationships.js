const UserModel = require('../api/models/user.model')
const FamilyModel = require('../api/models/family.model')
const UserFamilyModel = require ('../api/models/user_family.model')


const createRelationShips = () => {
    UserModel.belongsToMany(FamilyModel,{ through: UserFamilyModel, as: 'family' })
    FamilyModel.belongsToMany(UserModel, { through: UserFamilyModel, as: 'family' })
}
module.exports = createRelationShips