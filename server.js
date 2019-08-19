process.title = "node";
require("es5-shim");
require("es5-shim/es5-sham");
require("console-polyfill");
require("core-js/fn/object/assign");

require("babel-core").transform("code", {
  plugins: ["transform-class-properties"]
});

const path = require("path");
const express = require("express");
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import api from "./server/api";
const app = express();

// Isomorphism Setting
const publicDir = path.resolve(__dirname, "../public");

// console.log(publicDir);

// # NODE_PORT: 60019

// # RUN_ENV: stage || production

// set RUN_ENV
app.set("port", process.env.NODE_PORT || 4100); // defaultPort || 60018

app.set("soa_env", process.env.SOA_ENV || "hmr"); // 开发环境 production || development || hmr

if (process.env.RUN_ENV) {
  switch (process.env.RUN_ENV) {
    case "qa":
    case "stage":
    case "develop":
    case "production":
      app.set("run_env", process.env.RUN_ENV);
      break;
    default:
      app.set("run_env", "stage");
      console.log(`ENV: Parameter ${process.env.RUN_ENV} over boundary.`);
      break;
  }
} else {
  app.set("run_env", "develop");
}

import { Development, Production } from "./scripts";

// save GlobalSetting
const configCache = require("./etc/configCache.json");
const configEnv = require("./etc/configEnv.json");

let globalTotal = configEnv[app.get("run_env")];
process.env.GlobalEnv = JSON.stringify(globalTotal);
app.set("soa_total", JSON.stringify(globalTotal));

// console.log( process.env.RUN_ENV )
// console.log( app.get('run_env') )

// app base setting
app.use(cookieParser()); //cookie-parser
app.use(compression()); // gzip
app.use(bodyParser.json()); // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(publicDir), configCache));
app.disable("x-powered-by"); // disable e-powered-by

app.use(/^\/api/, api);

app.use("/checkHealth", (req, res) => {
  res.status(200).send("everything is ok!");
});

if (app.get("soa_env") === "hmr") {
  Development(app);
} else if (app.get("soa_env") === "production") {
  Production(app);
}

app.listen(app.get("port"), error => {
  if (error) {
    if (console) {
      console.error(error);
    }
  } else {
    if (console) {
      console.info(
        `${app.get("run_env")}\n${app.get('soa_env')}==> �  Listening on port ${app.get(
          "port"
        )} . Open up http://localhost:${app.get("port")}/ in your browser.`
      );
    }
  }
});
