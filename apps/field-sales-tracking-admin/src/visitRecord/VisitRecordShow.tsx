import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SALESMAN_TITLE_FIELD } from "../salesman/SalesmanTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const VisitRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="photo" source="photo" />
        <TextField label="location" source="location" />
        <ReferenceField
          label="Salesman"
          source="salesman.id"
          reference="Salesman"
        >
          <TextField source={SALESMAN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Shop" source="shop.id" reference="Shop">
          <TextField source={SHOP_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};