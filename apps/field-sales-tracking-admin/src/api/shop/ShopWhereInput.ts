import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { VisitRecordListRelationFilter } from "../visitRecord/VisitRecordListRelationFilter";

export type ShopWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  company?: CompanyWhereUniqueInput;
  visitRecords?: VisitRecordListRelationFilter;
};
