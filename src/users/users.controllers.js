const uuid =require("uuid")

const DB=[

    {
    id: '2d7345fc-d90c-474c-b973-d169cadf16d7',
	first_name: 'Cruz',
	last_name: 'Maldonado',
	email: 'cruz@gmail.com',
	password: 'manzana',
	birthday: '1997/05/05'},

    {
    id: '1cadbf8a-c980-4a51-bc78-d204a3875eb4',
	first_name: 'Andress',
	last_name: 'Charris',
	email: 'andress@gmail.com',
	password: 'pera',
	birthday: '1996/04/04'},

    {
    id: 'u7fc3f7f7-7759-47bf-931a-7bd385a65dac',
	first_name: 'Maria',
	last_name: 'Gonzales',
	email: 'maria@gmail.com',
	password: 'platano',
	birthday: '1998/12/07'},

    {
    id: 'ce74e2c3-59bd-4625-a8f0-cd05d66e9c84',
	first_name: 'Pepito',
	last_name: 'Perez',
	email: 'pepito@gmail.com',
	password: 'fresa',
	birthday: '2000/11/10'}
];

const getAllUsers = () =>{
    return DB
}

const getUserById = (id) => {

    const data =DB.find(task => task.id ===id)
    return data
}

const createUser = (
first_name,last_name,email,password,birthday="") => {
    
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    DB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}