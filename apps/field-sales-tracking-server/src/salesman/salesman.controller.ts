import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesmanService } from "./salesman.service";
import { SalesmanControllerBase } from "./base/salesman.controller.base";

@swagger.ApiTags("salesmen")
@common.Controller("salesmen")
export class SalesmanController extends SalesmanControllerBase {
  constructor(protected readonly service: SalesmanService) {
    super(service);
  }
}
