import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const productRouter = createTRPCRouter({
  all: publicProcedure.input(z.object({ limit: z.number().optional() })).query(({ ctx, input }) => {
    return ctx.prisma.product.findMany({ orderBy: { id: 'asc' }, take: input.limit });
  }),
  byId: publicProcedure.input(z.object({ id: z.number() })).query(({ ctx, input }) => {
    return ctx.prisma.product.findFirst({ where: { id: input.id } });
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        category: z.string(),
        price: z.number(),
        discountPrice: z.number(),
        stock: z.number(),
        image: z.string(),
        manufacturer: z.string(),
        modelNumber: z.string(),
        technicalSpecifications: z.string(),
        averageRating: z.number(),
        link: z.string(),
        tags: z.array(z.string()),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({ data: input });
    }),
  delete: publicProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.prisma.product.delete({ where: { id: input } });
  }),
});
