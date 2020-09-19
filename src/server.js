import React from "react";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Home from "./pages";

const initialState = {
  isFetching: false,
  launches: null,
};

module.exports = async function render() {
  const { data } = await Home.getProps();
  // console.log(data);
  const store = configureStore({ ...initialState, launches: data });

  let main = (
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const serverSideState = store.getState();

  return { main, serverSideState };
};
