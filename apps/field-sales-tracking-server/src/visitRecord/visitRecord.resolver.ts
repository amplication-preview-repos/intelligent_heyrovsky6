import * as graphql from "@nestjs/graphql";
import { VisitRecordResolverBase } from "./base/visitRecord.resolver.base";
import { VisitRecord } from "./base/VisitRecord";
import { VisitRecordService } from "./visitRecord.service";

@graphql.Resolver(() => VisitRecord)
export class VisitRecordResolver extends VisitRecordResolverBase {
  constructor(protected readonly service: VisitRecordService) {
    super(service);
  }
}
