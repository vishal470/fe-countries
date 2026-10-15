import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const countriesContext = createContext();
export const randomCountriesContext = createContext(null);
export const searchContext = createContext();
export const queryContext = createContext();

export const CountriesContextProvider = ({ children }) => {
  const { countries } = useLoaderData();
  const [search, setSearch] = useState("All");
  const [query, setQuery] = useState("");

  return (
    <countriesContext.Provider value={[countries, countries]}>
      <searchContext.Provider value={[search, setSearch]}>
        <queryContext.Provider value={[query, setQuery]}>
          {children}
        </queryContext.Provider>
      </searchContext.Provider>
    </countriesContext.Provider>
  );
};
