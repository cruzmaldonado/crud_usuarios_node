const {getAllUsers, getUserById,createUser } = 
require("./users.controllers")

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getOneUser = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)

    if(data){
        res.status(200).json(data)
        
    }
    else{
        res.status(404).json({id: id, message: "invalid ID"})

    }
}

const createNewUser = (req,res) => {
    const{
        id,
        first_name,
        last_name,
        email,
        password,
        birthday} = req.body

//!como en la DB vamos a crear que todos los valores sean
//!no nulos, menos birthday, no tenemos que validar todas
//!las columnas solo email que sera unico
    if(email){
        const data = createUser(
            first_name,
            last_name,
            email,
            password,
            birthday)
        res.status(200).json(data)
    }
    else{
        res.status(404).json({message: "Missing Data"})
    }
}

    module.exports = {
        getUsers,
        getOneUser,
        createNewUser
    }