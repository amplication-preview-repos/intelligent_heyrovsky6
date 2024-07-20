import { VisitRecordWhereInput } from "./VisitRecordWhereInput";
import { VisitRecordOrderByInput } from "./VisitRecordOrderByInput";

export type VisitRecordFindManyArgs = {
  where?: VisitRecordWhereInput;
  orderBy?: Array<VisitRecordOrderByInput>;
  skip?: number;
  take?: number;
};
