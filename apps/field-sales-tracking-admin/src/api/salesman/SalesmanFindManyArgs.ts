import { SalesmanWhereInput } from "./SalesmanWhereInput";
import { SalesmanOrderByInput } from "./SalesmanOrderByInput";

export type SalesmanFindManyArgs = {
  where?: SalesmanWhereInput;
  orderBy?: Array<SalesmanOrderByInput>;
  skip?: number;
  take?: number;
};
