import React, { createContext, useState } from "react";
import { INITIAL_FILTERS } from "../constants/common.const";

const FilterContext = createContext(undefined);
const UpdateFilterContext = createContext(undefined);

function FilterProvider({ children }) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  return (
    <FilterContext.Provider value={filters}>
      <UpdateFilterContext.Provider value={setFilters}>
        {children}
      </UpdateFilterContext.Provider>
    </FilterContext.Provider>
  );
}

export { FilterProvider, FilterContext, UpdateFilterContext };
