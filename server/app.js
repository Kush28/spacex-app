import express from "express";
import path from "path";
import ssr from "../src/server";
import Root from "../src/_root";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.disable("x-powered-by");

app.listen(port, () => console.log("########  App running on Port: ", port, " ########"));

// server rendered home page
app.get("/", async (req, res) => {
  const { main, serverSideState } = await ssr();
  const root = renderToString(
    <Root title="SpaceX App" state={serverSideState} main={main} />
  );
  res.send(root);
});
