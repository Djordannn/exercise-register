"use client";

import { AppStore, makeStore } from "@/lib/redux/store";
import { Provider } from "react-redux";
import React from "react";

interface IStoreProvider {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
  const storeRef = React.useRef<AppStore>();

  if (!storeRef.current) {
    //
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
