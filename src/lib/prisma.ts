import { PrismaClient } from '@prisma/client';

declare global {

    var prisma: PrismaClient | undefined;
}

export const client = globalThis || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;