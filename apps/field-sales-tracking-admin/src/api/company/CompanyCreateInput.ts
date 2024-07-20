import { ShopCreateNestedManyWithoutCompaniesInput } from "./ShopCreateNestedManyWithoutCompaniesInput";
import { SalesmanCreateNestedManyWithoutCompaniesInput } from "./SalesmanCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name?: string | null;
  address?: string | null;
  shops?: ShopCreateNestedManyWithoutCompaniesInput;
  salesmen?: SalesmanCreateNestedManyWithoutCompaniesInput;
};
