// const express = require("express");
// const cors = require("cors");

import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

// Your routes and other server code...

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
