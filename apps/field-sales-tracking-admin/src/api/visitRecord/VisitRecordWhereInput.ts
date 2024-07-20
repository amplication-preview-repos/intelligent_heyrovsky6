import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalesmanWhereUniqueInput } from "../salesman/SalesmanWhereUniqueInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type VisitRecordWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  photo?: JsonFilter;
  location?: StringNullableFilter;
  salesman?: SalesmanWhereUniqueInput;
  shop?: ShopWhereUniqueInput;
};
