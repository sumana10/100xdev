import { router, publicProcedure } from './trpc';
import { z } from "zod";
import { createHTTPServer } from '@trpc/server/adapters/standalone';


const todoInputType = z.object({
  title: z.string(),
  description: z.string(), // Fixed the missing closing parenthesis
});

const appRouter = router({
  createTodo: publicProcedure
    .input(todoInputType)
    .mutation(async (opts) => {
      console.log(opts.ctx.username);
      const { title, description } = opts.input;
      return { id: "1" };
    }),
    signUp: publicProcedure
    .input(z.object({
        email : z.string() ,
        password : z.string()
    }))
    .mutation(async(opts)=>{
      //context
        let username = opts.ctx.username;
        console.log(username);
        let email = opts.input.email ;
        let password = opts.input.password ;
        // Do database stuff here
        let token = "123123";
        return{
          token
        }

       })
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts){
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);
    //jwt.verify()
    return{
      username: "123"
    }
  }
});

server.listen(3000);

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;