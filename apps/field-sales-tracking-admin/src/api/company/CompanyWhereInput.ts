import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ShopListRelationFilter } from "../shop/ShopListRelationFilter";
import { SalesmanListRelationFilter } from "../salesman/SalesmanListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  shops?: ShopListRelationFilter;
  salesmen?: SalesmanListRelationFilter;
};
