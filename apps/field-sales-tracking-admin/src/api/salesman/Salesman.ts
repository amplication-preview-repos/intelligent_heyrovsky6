import { Company } from "../company/Company";
import { VisitRecord } from "../visitRecord/VisitRecord";

export type Salesman = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  company?: Company | null;
  visitRecords?: Array<VisitRecord>;
};
