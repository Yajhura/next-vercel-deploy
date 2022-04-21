import React from "react";
import MainLayout from "../Layout/MainLayout";
import { DarkLayout } from "../Layout/DarkLayout";

const pricing = () => {
  return (
    <div>
      <h1>Estas en Pricing</h1>
    </div>
  );
};

pricing.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
export default pricing;
