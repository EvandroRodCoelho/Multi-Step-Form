import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../services/prisma";
import { userSchema } from "../schemas/user";
import { emailSchema } from "../schemas/emailSchema";
import { loginUserSchema } from "../schemas/loginUserSchema.";

export async function getUsers() {
    const users = await prisma.user.findMany();
    return { users };
}

export async function handleCreateUser(req:FastifyRequest,res:FastifyReply) {
    try {
          const userData = userSchema.parse(req.body);
        
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
}

export async function getUserByEmail(req:FastifyRequest,res:FastifyReply) {
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
          return res.status(200).send("Passed");
        }
        prisma.$disconnect;
        return res.status(500).send("Error logging in");
      }

}

export async function handleLogin(req:FastifyRequest,res:FastifyReply) { 
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
            id:user.id,
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
}



export async function handleDeleteUser(req: FastifyRequest, res: FastifyReply) {
  try {
    const { email } =emailSchema.parse(req.body);;

    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }


    await prisma.user.delete({ where: { id: user.id } });

    return res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error deleting user");
  }
}
