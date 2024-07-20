import * as graphql from "@nestjs/graphql";
import { SalesmanResolverBase } from "./base/salesman.resolver.base";
import { Salesman } from "./base/Salesman";
import { SalesmanService } from "./salesman.service";

@graphql.Resolver(() => Salesman)
export class SalesmanResolver extends SalesmanResolverBase {
  constructor(protected readonly service: SalesmanService) {
    super(service);
  }
}
