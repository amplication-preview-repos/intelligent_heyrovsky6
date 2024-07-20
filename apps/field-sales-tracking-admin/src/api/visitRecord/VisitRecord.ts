import { JsonValue } from "type-fest";
import { Salesman } from "../salesman/Salesman";
import { Shop } from "../shop/Shop";

export type VisitRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  photo: JsonValue;
  location: string | null;
  salesman?: Salesman | null;
  shop?: Shop | null;
};
