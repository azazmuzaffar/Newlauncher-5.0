/****************************/
/* Adding Parameters to URL */
/****************************/

(function () {
  "use strict";
  var queryString = {};

  queryString.parse = function (str) {
    if (typeof str !== "string") {
      return {};
    }
    str = str.trim().replace(/^\?/, "");
    if (!str) {
      return {};
    }
    return str
      .trim()
      .split("&")
      .reduce(function (ret, param) {
        var parts = param.replace(/\+/g, " ").split("=");
        var key = parts[0];
        var val = parts[1];
        key = decodeURIComponent(key);
        val = val === undefined ? null : decodeURIComponent(val);
        if (!ret.hasOwnProperty(key)) {
          ret[key] = val;
        } else if (Array.isArray(ret[key])) {
          ret[key].push(val);
        } else {
          ret[key] = [ret[key], val];
        }
        return ret;
      }, {});
  };

  queryString.stringify = function (obj) {
    return obj
      ? Object.keys(obj)
          .map(function (key) {
            var val = obj[key];
            if (Array.isArray(val)) {
              return val
                .map(function (val2) {
                  return encodeURIComponent(key) + "=" + encodeURIComponent(val2);
                })
                .join("&");
            }
            return encodeURIComponent(key) + "=" + encodeURIComponent(val);
          })
          .join("&")
      : "";
  };

  queryString.push = function (key, new_value) {
    var params = queryString.parse(location.search);
    params[key] = new_value;
    var new_params_string = queryString.stringify(params);
    history.pushState({}, "", window.location.pathname + "?" + new_params_string);
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = queryString;
  } else {
    window.queryString = queryString;
  }
})();

$(document).ready(function () {
  $(".pagination-home li a").click(function () {
    queryString.push("hide", true);
    $("html,body").animate({ scrollTop: 0 }, 350);
    setTimeout(function () {
      getParameters();
    }, 400);
  });
});

window.onload = function () {
  getParameters();
};

function getParameters() {
  var url = window.location.href;
  console.log(url);
  var captured = /hide=([^&]+)/.exec(url)[1];
  var result = captured ? captured : "myDefaultValue";
  if (result === "true") {
    $(".hero-area").css("display", "none");
    $(".social-proof-wrap").css("display", "none");
    $(".new-launch").css("display", "none");
    $(".developer-sales-volume-").css("display", "none");
    $(".blog-area").css("display", "none");
    $(".experience").css("display", "none");
    console.log(result);
  }
}

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == "back") {
    $(".hero-area").css("display", "block");
    $(".social-proof-wrap").css("display", "block");
    $(".new-launch").css("display", "block");
    $(".developer-sales-volume-").css("display", "block");
    $(".blog-area").css("display", "block");
    $(".experience").css("display", "block");
  }
});

window.addEventListener(
  "popstate",
  function (event) {
    // The popstate event is fired each time when the current history entry changes.

    if ("scrollRestoration" in history) {
      // Back off, browser, I got this...
      history.scrollRestoration = "manual";
    }

    $(".hero-area").css("display", "block");
    $(".social-proof-wrap").css("display", "block");
    $(".new-launch").css("display", "block");
    $(".developer-sales-volume-").css("display", "block");
    $(".blog-area").css("display", "block");
    $(".experience").css("display", "block");

    history.pushState(null, null, window.location.pathname);
  },
  false
);
