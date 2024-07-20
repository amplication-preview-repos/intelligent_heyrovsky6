import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { VisitRecordCreateNestedManyWithoutShopsInput } from "./VisitRecordCreateNestedManyWithoutShopsInput";

export type ShopCreateInput = {
  name?: string | null;
  location?: string | null;
  company?: CompanyWhereUniqueInput | null;
  visitRecords?: VisitRecordCreateNestedManyWithoutShopsInput;
};
