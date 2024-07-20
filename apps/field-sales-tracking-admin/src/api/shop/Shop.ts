import { Company } from "../company/Company";
import { VisitRecord } from "../visitRecord/VisitRecord";

export type Shop = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  company?: Company | null;
  visitRecords?: Array<VisitRecord>;
};
