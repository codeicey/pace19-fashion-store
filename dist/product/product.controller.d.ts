import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }[]>;
    getOne(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(body: any): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: any): Promise<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        createdAt: Date;
    }>;
}
