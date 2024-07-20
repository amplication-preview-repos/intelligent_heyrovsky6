import { ShopUpdateManyWithoutCompaniesInput } from "./ShopUpdateManyWithoutCompaniesInput";
import { SalesmanUpdateManyWithoutCompaniesInput } from "./SalesmanUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string | null;
  address?: string | null;
  shops?: ShopUpdateManyWithoutCompaniesInput;
  salesmen?: SalesmanUpdateManyWithoutCompaniesInput;
};
