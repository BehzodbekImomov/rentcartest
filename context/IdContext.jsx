"use client";

import { createContext, useReducer } from "react";

export const idContext = createContext();

const initialState = {
  idProducts: [],
};

const reducer = (state, { type, data }) => {

  const { idProducts } = state;
  switch (type) {
    // case "id": {
    //   const product = products.find((pr) => pr.id === payload);
     
    //   return {
    //     ...state,
    //     carProducts: [{ ...product }],
    //   };
    // }
    case "id": {
      return {
        ...state,
        idProducts:data
      };
    }
    default:
      return state;
  }
};

export default function IdContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextState = { ...state, dispatch };
  return (
    <idContext.Provider value={contextState}>{children}</idContext.Provider>
  );
}
