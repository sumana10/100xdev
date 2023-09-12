import { initTRPC } from '@trpc/server';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
// const tr = initTRPC.create();
const tr = initTRPC.context<{
    username?: string ;
}>().create();
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = tr.router;
export const publicProcedure = tr.procedure;