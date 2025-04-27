import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { stripeRouter } from "./routers/stripe";

export const appRouter = createTRPCRouter({
  user: userRouter,
  stripe: stripeRouter,
});
 
export type AppRouter = typeof appRouter; 
export const createCaller = createCallerFactory(appRouter);
