import { FastifyInstance } from "fastify";
import { handleDeleteUser,handleCreateUser, getUserByEmail, getUsers, handleLogin } from "./userController";

export function route(app:FastifyInstance) {

    app.get('/', async (req,res) => {
        return res.send({message:"Welcome the api"});
    })
      
    app.get('/users', getUsers);
      
    app.post('/register/create', handleCreateUser);
      
    app.post("/login", handleLogin);
      
    app.post("/register/step1", getUserByEmail)

    app.delete("/user/delete",handleDeleteUser)
}