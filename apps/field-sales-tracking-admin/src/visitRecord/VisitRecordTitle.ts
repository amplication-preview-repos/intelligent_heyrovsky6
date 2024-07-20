import { VisitRecord as TVisitRecord } from "../api/visitRecord/VisitRecord";

export const VISITRECORD_TITLE_FIELD = "location";

export const VisitRecordTitle = (record: TVisitRecord): string => {
  return record.location?.toString() || String(record.id);
};
