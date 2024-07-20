import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalesmanTitle } from "../salesman/SalesmanTitle";
import { ShopTitle } from "../shop/ShopTitle";

export const VisitRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <div />
        <TextInput label="location" source="location" />
        <ReferenceInput
          source="salesman.id"
          reference="Salesman"
          label="Salesman"
        >
          <SelectInput optionText={SalesmanTitle} />
        </ReferenceInput>
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
