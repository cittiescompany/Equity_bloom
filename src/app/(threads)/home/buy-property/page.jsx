/* eslint-disable @next/next/no-img-element */
'use client';

import Balance from "./components/Balance";
import AvailableProperties from './components/AvailableProperties';
import { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import MyProperties from "./components/MyProperties";

const PropertyPage = () => {
  const [tab, setTab] = useState("available-investments");
  return (
    // <section className="md:w-[45%] min-h-screen bg-white mx-auto my-4">
    <section className="min-h-screen">
<Balance/>

<div className="m-4">
<Tabs
            variant="bordered"
            aria-label="Options"
            color="primary"
            radius="full"
            classNames={{
              tab: "text-base px-4",
              tabList: "shadow-none border",
              cursor:'bg-indigo-600 !text-white',
            }}
            selectedKey={tab}
            onSelectionChange={(key) => setTab(key)}
            className='-z-50'
          >
            
            <Tab key="available-properties" title="Available Properties">
          <AvailableProperties/>
            </Tab>
            <Tab key="my-properties" title="My Properties">
         <MyProperties/>
            </Tab>
          </Tabs>
</div>
    </section>
  );
};

export default PropertyPage;