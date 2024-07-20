import { Shop } from "../shop/Shop";
import { Salesman } from "../salesman/Salesman";

export type Company = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  shops?: Array<Shop>;
  salesmen?: Array<Salesman>;
};
