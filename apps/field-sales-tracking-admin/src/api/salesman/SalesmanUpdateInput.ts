import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { VisitRecordUpdateManyWithoutSalesmenInput } from "./VisitRecordUpdateManyWithoutSalesmenInput";

export type SalesmanUpdateInput = {
  email?: string | null;
  name?: string | null;
  company?: CompanyWhereUniqueInput | null;
  visitRecords?: VisitRecordUpdateManyWithoutSalesmenInput;
};
