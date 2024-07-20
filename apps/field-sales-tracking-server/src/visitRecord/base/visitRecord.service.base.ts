/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  VisitRecord as PrismaVisitRecord,
  Salesman as PrismaSalesman,
  Shop as PrismaShop,
} from "@prisma/client";

export class VisitRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VisitRecordCountArgs, "select">
  ): Promise<number> {
    return this.prisma.visitRecord.count(args);
  }

  async visitRecords(
    args: Prisma.VisitRecordFindManyArgs
  ): Promise<PrismaVisitRecord[]> {
    return this.prisma.visitRecord.findMany(args);
  }
  async visitRecord(
    args: Prisma.VisitRecordFindUniqueArgs
  ): Promise<PrismaVisitRecord | null> {
    return this.prisma.visitRecord.findUnique(args);
  }
  async createVisitRecord(
    args: Prisma.VisitRecordCreateArgs
  ): Promise<PrismaVisitRecord> {
    return this.prisma.visitRecord.create(args);
  }
  async updateVisitRecord(
    args: Prisma.VisitRecordUpdateArgs
  ): Promise<PrismaVisitRecord> {
    return this.prisma.visitRecord.update(args);
  }
  async deleteVisitRecord(
    args: Prisma.VisitRecordDeleteArgs
  ): Promise<PrismaVisitRecord> {
    return this.prisma.visitRecord.delete(args);
  }

  async getSalesman(parentId: string): Promise<PrismaSalesman | null> {
    return this.prisma.visitRecord
      .findUnique({
        where: { id: parentId },
      })
      .salesman();
  }

  async getShop(parentId: string): Promise<PrismaShop | null> {
    return this.prisma.visitRecord
      .findUnique({
        where: { id: parentId },
      })
      .shop();
  }
}