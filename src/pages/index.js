import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../api/spacex";
import { fetchLaunchesIfNeeded } from "../redux/actions";

function App({ isFetching, launches, dispatch }) {
  const totallaunches = launches.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(fetchLaunchesIfNeeded());
    console.log("This is a test Client ", launches);
  }, []);

  return (
    <>
      <h1>SpaceX Launch Programs</h1>
      <p>Testing Hydration</p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          console.log("Current count: ", count);
          setCount(count + 1);
        }}
      >
        Click
      </button>

      {isFetching && totallaunches === 0 && <h2>Loading...</h2>}
      {!isFetching && totallaunches === 0 && <h2>Empty.</h2>}
      {!isFetching && totallaunches !== 0 && <h2>Got data in console</h2>}
    </>
  );
}

App.getProps = async () => {
  const { data } = await fetchLaunches();
  return { data };
};

function mapStateToProps({ isFetching, launches }) {
  return {
    isFetching,
    launches,
  };
}
export default connect(mapStateToProps)(App);
