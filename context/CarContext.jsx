"use client";

import { createContext, useReducer } from "react";

export const carContext = createContext();

const initialState = {
  carProducts: [],
};

const reducer = (state, { type, payload, products, data }) => {

  const { carProducts } = state;
  switch (type) {
    case "add-to-cart": {
      const product = products.find((pr) => pr.id === payload);
     
      return {
        ...state,
        carProducts: [{ ...product }],
      };
    }
    case "id": {
      return {
        ...state,
        state:data
      };
    }
    default:
      return state;
  }
};

export default function CarContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextState = { ...state, dispatch };
  return (
    <carContext.Provider value={contextState}>{children}</carContext.Provider>
  );
}
