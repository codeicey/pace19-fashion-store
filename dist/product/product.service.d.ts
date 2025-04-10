import { PrismaService } from "../prisma.service";
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(data: {
        title: string;
        description: string;
        price: number;
        imageUrl: string;
    }): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: any): Promise<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }>;
}
