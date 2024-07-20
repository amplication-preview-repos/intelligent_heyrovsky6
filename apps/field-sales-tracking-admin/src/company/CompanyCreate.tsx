import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";
import { SalesmanTitle } from "../salesman/SalesmanTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" multiline source="address" />
        <ReferenceArrayInput
          source="shops"
          reference="Shop"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShopTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salesmen"
          reference="Salesman"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalesmanTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
