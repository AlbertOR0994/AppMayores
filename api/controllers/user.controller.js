const UserModel = require('../models/user.model')

const getUsers = async (req, res) => {
    try {
        const users = UserModel.findAll()
        res.status(200).json(users)    
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get users')
    }
}
const getOneUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id)
        if(user){
            res.status(200).json(user)
        }else {
            res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send('Error', error.message)
    }
}

const createUser = async (req, res) =>{
    try {
        const newUser = await UserModel.create(req.body)
        return res.status(200).json({message:'User created', user:user})
    } catch (error) {
        res.status(500).send('Error', error.message)
    }
}
const updateUser = async (req, res) => {
    try {
        const [userExist, user]= await UserModel.update(
            req.body, 
            {
                returning: true,
                where:{
                    id: req.params.id
                }
            })
        if(userExist !== 0 ) {
            return res.status(200).json({
                message: 'User updated',
                user: user
            })
        }else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send('Error retrieving data')
    }
}

const deleteUser = async(req,res) => {
    try {
        const user = UserModel.destroy({
            where:{
                id:req.params.id
            }
        })
        if(user){
            return res.status(200).send('User deleted')
        }else{
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send('Error', error.message)
    }
}
