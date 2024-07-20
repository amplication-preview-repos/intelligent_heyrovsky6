import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VisitRecordService } from "./visitRecord.service";
import { VisitRecordControllerBase } from "./base/visitRecord.controller.base";

@swagger.ApiTags("visitRecords")
@common.Controller("visitRecords")
export class VisitRecordController extends VisitRecordControllerBase {
  constructor(protected readonly service: VisitRecordService) {
    super(service);
  }
}
