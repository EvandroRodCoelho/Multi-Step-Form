import fastify from "fastify";
import { prisma } from "./services/prisma";
import { createUserSchema } from "./schemas/createUserSchema";
import { loginUserSchema } from "./schemas/loginUserSchema.";
import fastifyCors  from "@fastify/cors";
import { emailSchema } from "./schemas/emailSchema";

const app = fastify({
  logger: false
});

app.register(fastifyCors, {
    origin: true,
})

app.get('/', async (req,res) => {
  return res.send({message:"Welcome the api"});
})

app.get('/users', async () => {
    const users = await prisma.user.findMany();
    return { users };
})

app.post('/register/create', async (req, res) => {
  try {
    const userData = createUserSchema.parse(req.body);
  
    const { informationPessoal, address, socialProfile } = userData;
  
    const { email, fullName, password, gender } = informationPessoal;
    const { city, country, state, zipCode } = address;
    const { urlGitHub, urlLinkedin } = socialProfile;
  
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
      },
    });
  
    return res.status(201).send();
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error creating user");
  }
});

app.post("/login", async (req, res) => {
    try {
      const { email, password } = loginUserSchema.parse(req.body);
  
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
  
      if (user.password !== password) {
        return res.status(401).send({ message: "Invalid password" });
      }
  
      const userSend = {
        informationPessoal: {
          fullName: user.fullName,
          email: user.email,
          password: user.password,
          gender: user.gender
        },
        address: {
          city: user.city,
          country: user.country,
          state: user.state,
          zipCode: user.zipCode
        },
        socialProfile: {
          urlGitHub: user.urlGitHub,
          urlLinkedin: user.urlLinkedin
        }
      };
      return res.status(200).send(userSend);
    } catch (err) {
      return res.status(500).send("Error logging in");
    }
});

app.post("/register/step1", async (req, res) => {
  try {
    const { email } = emailSchema.parse(req.body);

    const user = await prisma.user.findFirst({ where: { email } });
    if(user) {
      return res.status(401).send({ error: "Email is exist" });
    }
    
    prisma.$disconnect;
    
  }
  catch (err) {
    if(res.statusCode === 404) {
      prisma.$disconnect;
      return res.status(200).send("login");
    }
    prisma.$disconnect;
    return res.status(500).send("Error logging in");
  }

})
app.listen({
    host:"0.0.0.0",
    port:3333
}).then(() => {
    console.log("Server is running on port 3333");
});
