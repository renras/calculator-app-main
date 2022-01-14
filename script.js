$(document).ready(function () {
  let alreadyHaveDecimal = false;

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
      $("#screen-text").text(eval($("#screen-text").text()));
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
      changeCurrentActiveThemeNumber(1, "6px");
    }

    if (e.target.getAttribute("id") === "theme-number-2") {
      changeCurrentActiveThemeNumber(2, "38%");
    }

    if (e.target.getAttribute("id") === "theme-number-3") {
      changeCurrentActiveThemeNumber(3, "67%");
    }
  });
});
