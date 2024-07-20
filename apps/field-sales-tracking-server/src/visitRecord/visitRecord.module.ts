import { Module } from "@nestjs/common";
import { VisitRecordModuleBase } from "./base/visitRecord.module.base";
import { VisitRecordService } from "./visitRecord.service";
import { VisitRecordController } from "./visitRecord.controller";
import { VisitRecordResolver } from "./visitRecord.resolver";

@Module({
  imports: [VisitRecordModuleBase],
  controllers: [VisitRecordController],
  providers: [VisitRecordService, VisitRecordResolver],
  exports: [VisitRecordService],
})
export class VisitRecordModule {}
