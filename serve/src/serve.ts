import fastify from "fastify";
import { prisma } from "./services/prisma";
import { createUserSchema } from "./schemas/createUserSchema";

const app = fastify();


app.get('/users', async () => {
    const users = await prisma.user.findMany();
    return { users };
})

app.post('/users', async (req, res) => {

    try {
        const  { city, country, email, fullName, 
            gender, urlGitHub,urlLinkedin,zipCode,state,password } = createUserSchema.parse(req.body);
                  
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if(existingUser) {
            return res.status(409).send("Email already exists");
        }
        await prisma.user.create({
            data: {
                city,
                country,
                email,
                fullName,
                gender,
                password,
                urlGitHub,
                urlLinkedin,
                zipCode,
                state,
            }})
  

            return res.status(201).send();
    }
   catch (err) {
        console.error(err);
        return res.status(500).send("Error creating user");
    }

})

app.listen({
    host:"0.0.0.0",
    port:3333
}).then(() => {
    console.log("Server is running on port 3333");
});
