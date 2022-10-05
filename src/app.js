
const express = require("express");

const app =express();

const PORT = 9000

//importacion de las rutas

const usersRouter = require("./users/users.router")

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({message: "Server OK!"})
})

app.use("/", usersRouter)



app.listen(9000, () => {
    console.log(`Server started at port ${PORT}` );
})