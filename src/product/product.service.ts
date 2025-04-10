import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from "../prisma.service";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  create(data: { title: string; description: string; price: number; imageUrl: string }) {
    return this.prisma.product.create({ data });
  }

  async update(id: number, data: any) {
    const existing = await this.findOne(id);
    if (!existing) throw new NotFoundException('Product not found');
    return this.prisma.product.update({ where: { id }, data });
  }

  async delete(id: number) {
    const existing = await this.findOne(id);
    if (!existing) throw new NotFoundException('Product not found');
    return this.prisma.product.delete({ where: { id } });
  }
}
