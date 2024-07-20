import { Module } from "@nestjs/common";
import { SalesmanModuleBase } from "./base/salesman.module.base";
import { SalesmanService } from "./salesman.service";
import { SalesmanController } from "./salesman.controller";
import { SalesmanResolver } from "./salesman.resolver";

@Module({
  imports: [SalesmanModuleBase],
  controllers: [SalesmanController],
  providers: [SalesmanService, SalesmanResolver],
  exports: [SalesmanService],
})
export class SalesmanModule {}
