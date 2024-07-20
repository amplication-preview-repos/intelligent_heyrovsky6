import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALESMAN_TITLE_FIELD } from "../salesman/SalesmanTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const VisitRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VisitRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
