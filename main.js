"use strict";

var repo = {};

require("js-git/mixins/mem-db")(repo);
require("js-git/mixins/walkers")(repo);
require("js-git/mixins/read-combiner")(repo);
require("js-git/mixins/formats")(repo);

console.log(repo);

var sleep = yield require.async("./sleep.js");

console.log("sleeping...");
yield* sleep(500);
console.log("done");
