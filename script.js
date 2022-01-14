$(document).ready(function () {
  let alreadyHaveDecimal = false;
  let boxShadow;

  // animate button when clicked
  $("#keypad").mousedown((e) => {
    if (e.target.tagName === "BUTTON") {
      boxShadow = e.target.style.boxShadow;
      e.target.style.boxShadow = "none";
      e.target.style.transform = "translateY(3px)";
    }
  });

  $("#keypad").mouseup((e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.style.boxShadow = boxShadow;
      e.target.style.transform = "translateY(0px)";
    }
  });

  $("#keypad").click((e) => {
    if (e.target.classList.contains("number-key")) {
      // checks if calculator starts with zero or ends with zero then doesnt accept more zero
      if (
        $("#screen-text").text().slice(-1) === "0" &&
        alreadyHaveDecimal === true
      ) {
        if (e.target.textContent === "0") {
          $("#screen-text").append(e.target.textContent);
        }
      }

      if ($("#screen-text").text().slice(-1) === "0") {
        if (e.target.textContent === "0") {
          return;
        }
      }

      if ($("#screen-text").text() === "0") {
        $("#screen-text").text(e.target.textContent);
        return;
      }

      $("#screen-text").append(e.target.textContent);
    }

    if (e.target.classList.contains("operator-key")) {
      if (
        $("#screen-text").text().slice(-1) === " " ||
        $("#screen-text").text() === ""
      ) {
        return;
      }

      $("#screen-text").append(` ${e.target.textContent} `);
      alreadyHaveDecimal = false;
    }

    if (e.target.getAttribute("id") === "key-equals") {
      $("#screen-text").text(eval($("#screen-text").text().replace("x", "*")));
    }

    if (e.target.getAttribute("id") === "key-reset") {
      $("#screen-text").text("");
      alreadyHaveDecimal = false;
      $("#screen-text").text("0");
    }

    if (e.target.getAttribute("id") === "key-del") {
      // checks if last value on the calculator screen is an operator
      if ($("#screen-text").text().slice(-1) === " ") {
        $("#screen-text").text($("#screen-text").text().slice(0, -2));
      }

      if ($("#screen-text").text() !== "0") {
        $("#screen-text").text($("#screen-text").text().slice(0, -1));
      }

      if ($("#screen-text").text().slice(-1) === ".") {
        alreadyHaveDecimal = false;
      }

      if ($("#screen-text").text().length === 0) {
        $("#screen-text").text("0");
      }
    }

    if (e.target.getAttribute("id") === "key-decimal") {
      if (!alreadyHaveDecimal) {
        $("#screen-text").append(e.target.textContent);
        alreadyHaveDecimal = true;
      }
    }
  });

  //animate theme chooser and highlight active theme number
  const changeCurrentActiveThemeNumber = (number, pos) => {
    $(`#theme-number-${number}`).addClass("active-theme-number");
    $(`#theme-number-${number}`).siblings().removeClass("active-theme-number");
    $("#circle").animate({
      left: pos,
    });
  };

  $("#theme-number").click((e) => {
    if (e.target.getAttribute("id") === "theme-number-1") {
      $("html").fadeOut(0);
      $("html").fadeIn(500);

      changeCurrentActiveThemeNumber(1, "6px");

      $("html").css("background-color", "#3b4664");

      $("#calculator").css("background-color", "#3b4664");

      $("h1").css("color", "#fdfffe");

      $("h2").css("color", "#fdfffe");

      $("li").css("color", "#fdfffe");

      $("#pill").css("background-color", "#252d45");

      $("#circle").css("background-color", "#cb3e30");

      $("#screen").css("background-color", "#181f32");

      $("#screen-text").css("color", "#fdfffe");

      $("#keypad").css("background-color", "#252d44");

      $(".number-key").css({
        "background-color": "#eae3db",
        "box-shadow": "0px 3px 0px #b4a397",
        color: "#404354",
      });

      $(".operator-key").css({
        "background-color": "#eae3db",
        "box-shadow": "0px 3px 0px #b4a397",
        color: "#404354",
      });

      $("#key-decimal").css({
        "background-color": "#eae3db",
        "box-shadow": "0px 3px 0px #b4a397",
        color: "#404354",
      });

      $("#key-del").css({
        "background-color": "#647299",
        "box-shadow": "0px 3px 0px #414e72",
        color: "#fcffff",
      });

      $("#key-reset").css({
        "background-color": "#647299",
        "box-shadow": "0px 3px 0px #414e72",
        color: "#fcffff",
      });

      $("#key-equals").css({
        "background-color": "#d13f30",
        "box-shadow": "0px 3px 0px #762a28",
        color: "#fff5f0",
      });
    }

    if (e.target.getAttribute("id") === "theme-number-2") {
      $("html").fadeOut(0);
      $("html").fadeIn(500);

      changeCurrentActiveThemeNumber(2, "38%");

      $("html").css("background-color", "#e6e6e6");

      $("#calculator").css("background-color", "#e6e6e6");

      $("h1").css("color", "#3b3b31");

      $("h2").css("color", "#3b3b31");

      $("li").css("color", "#3b3b31");

      $("#pill").css("background-color", "#d3cdcd");

      $("#circle").css("background-color", "#c85a0a");

      $("#screen").css("background-color", "#eeeeee");

      $("#screen-text").css("color", "#3b3b31");

      $("#keypad").css("background-color", "#d3cdcd");

      $(".number-key").css({
        "background-color": "#e5e4e0",
        "box-shadow": "0px 3px 0px #a69d91",
        color: "#33332a",
      });

      $(".operator-key").css({
        "background-color": "#e5e4e0",
        "box-shadow": "0px 3px 0px #a69d91",
        color: "#33332a",
      });

      $("#key-decimal").css({
        "background-color": "#e5e4e0",
        "box-shadow": "0px 3px 0px #a69d91",
        color: "#33332a",
      });

      $("#key-del").css({
        "background-color": "#388187",
        "box-shadow": "0px 3px 0px #1b5f66",
        color: "#f3ffff",
      });

      $("#key-reset").css({
        "background-color": "#388187",
        "box-shadow": "0px 3px 0px #1b5f66",
        color: "#f3ffff",
      });

      $("#key-equals").css({
        "background-color": "#c85401",
        "box-shadow": "0px 3px 0px #83491f",
        color: "#f3ffff",
      });
    }

    if (e.target.getAttribute("id") === "theme-number-3") {
      $("html").fadeOut(0);
      $("html").fadeIn(500);

      changeCurrentActiveThemeNumber(3, "67%");

      $("html").css("background-color", "#17062a");

      $("#calculator").css("background-color", "#17062a");

      $("h1").css("color", "#fde140");

      $("h2").css("color", "#fde140");

      $("li").css("color", "#fde140");

      $("#pill").css("background-color", "#1e0837");

      $("#circle").css("background-color", "#00dace");

      $("#screen").css("background-color", "#1e0836");

      $("#screen-text").css("color", "#fde140");

      $("#keypad").css("background-color", "#1e0836");

      $(".number-key").css({
        "background-color": "#331b4d",
        "box-shadow": "0px 3px 0px #7c219a",
        color: "#fde140",
      });

      $(".operator-key").css({
        "background-color": "#331b4d",
        "box-shadow": "0px 3px 0px #7c219a",
        color: "#fde140",
      });

      $("#key-decimal").css({
        "background-color": "#331b4d",
        "box-shadow": "0px 3px 0px #7c219a",
        color: "#fde140",
      });

      $("#key-del").css({
        "background-color": "#5a057c",
        "box-shadow": "0px 3px 0px #be16f4",
        color: "#fde140",
      });

      $("#key-reset").css({
        "background-color": "#5a057c",
        "box-shadow": "0px 3px 0px #be16f4",
        color: "#fde140",
      });

      $("#key-equals").css({
        "background-color": "#00decf",
        "box-shadow": "0px 3px 0px #74f4ef",
        color: "#002d34",
      });
    }
  });
});
