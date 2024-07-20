import { SortOrder } from "../../util/SortOrder";

export type VisitRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  photo?: SortOrder;
  location?: SortOrder;
  salesmanId?: SortOrder;
  shopId?: SortOrder;
};
