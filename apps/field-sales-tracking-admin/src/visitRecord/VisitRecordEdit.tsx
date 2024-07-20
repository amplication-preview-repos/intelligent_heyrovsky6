import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalesmanTitle } from "../salesman/SalesmanTitle";
import { ShopTitle } from "../shop/ShopTitle";

export const VisitRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
