import { prisma } from "../services/prisma";
import  {it,expect, describe} from "vitest";
import { createTestServer } from "../utils/createTestServer";

describe("User Controller", ()=> {

    it('getUsers should return a list of users', async () => {
        const app = createTestServer();
      
        const response = await app.inject({
          method: 'GET',
          url: '/users',
        });
        expect(response.statusCode).toBe(200);
        const data = JSON.parse(response.body);
        expect(data).toHaveProperty('users');

        await prisma.$disconnect();
      });


      it('should then create a new user', async () => {
        const app = createTestServer();
        const userData = {
            informationPessoal: {
              email: "exemplo@teste.com",
              fullName: "Nome Sobrenome",
              password: "senha123",
              gender: "Masculino",
            },
            address: {
              city: "Cidade",
              country: "País",
              state: "Estado",
              zipCode: "12345-678",
            },
            socialProfile: {
              urlGitHub: "https://github.com/seu-usuario",
              urlLinkedin: "https://linkedin.com/in/seu-usuario",
            },
          };

         
          const user = await prisma.user.findFirst({ where: { email : userData.informationPessoal.email} });
          if (user) {
            const deleteUser = await app.inject({
              method: 'delete',
              url: '/user/delete',
              payload:{
                  email:userData.informationPessoal.email
              },
            });
            expect(deleteUser.statusCode).toBe(200)
          }
        const response = await app.inject({
            method: 'POST',
            url: '/register/create',
            payload: userData,
        });
        
        expect(response.statusCode).toBe(201);
        
        await prisma.$disconnect();
      });
      it('should then delete a  user', async () => {
        const app = createTestServer();
        const userData = {
            informationPessoal: {
              email: "exemplo@teste.com",
              fullName: "Nome Sobrenome",
              password: "senha123",
              gender: "Masculino",
            },
            address: {
              city: "Cidade",
              country: "País",
              state: "Estado",
              zipCode: "12345-678",
            },
            socialProfile: {
              urlGitHub: "https://github.com/seu-usuario",
              urlLinkedin: "https://linkedin.com/in/seu-usuario",
            },
          };

         
          const user = await prisma.user.findFirst({ where: { email : userData.informationPessoal.email} });
          if (!user) {
            const response = await app.inject({
              method: 'POST',
              url: '/register/create',
              payload: userData,
            });
          
            expect(response.statusCode).toBe(201);
          }
          const deleteUser = await app.inject({
            method: 'delete',
            url: '/user/delete',
            payload:{
                email:userData.informationPessoal.email
            },
          });
          expect(deleteUser.statusCode).toBe(200)
        await prisma.$disconnect();
      });
      
    
      it('getUserByEmail should return "Email is exist" for existing email', async () => {
        const app = createTestServer();
      
        const userData = {
          email: 'johndoe@example.com',
        };
      
        await app.inject({
          method: 'POST',
          url: '/register/step1',
          payload: userData,
        });
      
      
        const response = await app.inject({
          method: 'POST',
          url: '/register/step1',
          payload: userData,
        });
      
        expect(response.statusCode).toBe(401);
      
        expect(response.body).toContain('Email is exist');

        await prisma.$disconnect();
      });
      
})