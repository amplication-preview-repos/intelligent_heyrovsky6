import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { VisitRecordListRelationFilter } from "../visitRecord/VisitRecordListRelationFilter";

export type SalesmanWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  company?: CompanyWhereUniqueInput;
  visitRecords?: VisitRecordListRelationFilter;
};
