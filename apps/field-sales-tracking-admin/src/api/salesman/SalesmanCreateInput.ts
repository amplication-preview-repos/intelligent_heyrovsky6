import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { VisitRecordCreateNestedManyWithoutSalesmenInput } from "./VisitRecordCreateNestedManyWithoutSalesmenInput";

export type SalesmanCreateInput = {
  email?: string | null;
  name?: string | null;
  company?: CompanyWhereUniqueInput | null;
  visitRecords?: VisitRecordCreateNestedManyWithoutSalesmenInput;
};
