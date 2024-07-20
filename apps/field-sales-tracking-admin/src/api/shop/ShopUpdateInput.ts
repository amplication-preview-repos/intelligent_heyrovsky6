import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { VisitRecordUpdateManyWithoutShopsInput } from "./VisitRecordUpdateManyWithoutShopsInput";

export type ShopUpdateInput = {
  name?: string | null;
  location?: string | null;
  company?: CompanyWhereUniqueInput | null;
  visitRecords?: VisitRecordUpdateManyWithoutShopsInput;
};
