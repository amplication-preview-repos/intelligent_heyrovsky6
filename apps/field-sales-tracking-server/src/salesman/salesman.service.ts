import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesmanServiceBase } from "./base/salesman.service.base";

@Injectable()
export class SalesmanService extends SalesmanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
