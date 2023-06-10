"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext<any>(null);

export const SelectProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSelected, setIsSelected] = useState<number>(0);
  const [subscriptions, setSubscriptions] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [plan, setPlan] = useState<string>("Arcade");
  const [checked, setChecked] = useState<number[]>([]);
  const [totalCost, setTotalCost] = useState<string>();
  const [cost, setCost] = useState<number>();
  const [addOnSum, setAddOnSum] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        isSelected,
        setIsSelected,
        subscriptions,
        setSubscriptions,
        plan,
        setPlan,
        checked,
        setChecked,
        totalCost,
        setTotalCost,
        cost,
        setCost,
        addOnSum,
        setAddOnSum,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useSelectContext = () => useContext(Context);
