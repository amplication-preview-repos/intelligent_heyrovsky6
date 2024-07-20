import { Salesman as TSalesman } from "../api/salesman/Salesman";

export const SALESMAN_TITLE_FIELD = "name";

export const SalesmanTitle = (record: TSalesman): string => {
  return record.name?.toString() || String(record.id);
};
