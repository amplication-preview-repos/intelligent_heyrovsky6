import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisitRecordServiceBase } from "./base/visitRecord.service.base";

@Injectable()
export class VisitRecordService extends VisitRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
