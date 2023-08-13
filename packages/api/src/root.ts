import { accountRouter } from './router/account';
import { authRouter } from './router/auth';
import { productRouter } from './router/product';
import { userRouter } from './router/user';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  account: accountRouter,
  auth: authRouter,
  user: userRouter,
  product: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
