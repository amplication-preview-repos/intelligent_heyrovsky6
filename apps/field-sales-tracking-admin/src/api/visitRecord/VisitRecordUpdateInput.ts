import { InputJsonValue } from "../../types";
import { SalesmanWhereUniqueInput } from "../salesman/SalesmanWhereUniqueInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type VisitRecordUpdateInput = {
  timestamp?: Date | null;
  photo?: InputJsonValue;
  location?: string | null;
  salesman?: SalesmanWhereUniqueInput | null;
  shop?: ShopWhereUniqueInput | null;
};