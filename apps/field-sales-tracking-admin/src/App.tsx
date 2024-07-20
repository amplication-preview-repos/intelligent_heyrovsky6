import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { ShopList } from "./shop/ShopList";
import { ShopCreate } from "./shop/ShopCreate";
import { ShopEdit } from "./shop/ShopEdit";
import { ShopShow } from "./shop/ShopShow";
import { SalesmanList } from "./salesman/SalesmanList";
import { SalesmanCreate } from "./salesman/SalesmanCreate";
import { SalesmanEdit } from "./salesman/SalesmanEdit";
import { SalesmanShow } from "./salesman/SalesmanShow";
import { VisitRecordList } from "./visitRecord/VisitRecordList";
import { VisitRecordCreate } from "./visitRecord/VisitRecordCreate";
import { VisitRecordEdit } from "./visitRecord/VisitRecordEdit";
import { VisitRecordShow } from "./visitRecord/VisitRecordShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FieldSalesTracking"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Shop"
          list={ShopList}
          edit={ShopEdit}
          create={ShopCreate}
          show={ShopShow}
        />
        <Resource
          name="Salesman"
          list={SalesmanList}
          edit={SalesmanEdit}
          create={SalesmanCreate}
          show={SalesmanShow}
        />
        <Resource
          name="VisitRecord"
          list={VisitRecordList}
          edit={VisitRecordEdit}
          create={VisitRecordCreate}
          show={VisitRecordShow}
        />
      </Admin>
    </div>
  );
};

export default App;
