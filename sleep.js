"use strict";
return function* sleep(ms) {
  yield function (callback) {
    setTimeout(callback, ms);
  };
};
