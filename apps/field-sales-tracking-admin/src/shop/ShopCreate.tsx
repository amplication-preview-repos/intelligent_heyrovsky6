import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { VisitRecordTitle } from "../visitRecord/VisitRecordTitle";

export const ShopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="location" source="location" />
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="visitRecords"
          reference="VisitRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VisitRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
