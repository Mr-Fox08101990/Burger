$(document).ready(function () {

  $('#nav-toggle').click(function () {
    $(this).toggleClass('active');
  });


  // accordion-team-item accordion-team-item__active
  $('.accordion-team-item').click(function () {
    $(this).toggleClass('accordion-team-item__active');
  });

  // menu-acco__item menu-acco__item--active
  $('.menu-acco__item').click(function () {
    $(this).toggleClass('menu-acco__item--active');
  });

  // Phone mask

  var inp = document.getElementById("phone_mask");

  var old = 0;

  inp.onclick = function () {
    inp.value = "+";
    old = 0;
  }


  inp.onkeydown = function () {
    var curLen = inp.value.length;

    if (curLen < old) {
      old--;
      return;
    }

    if (curLen == 2)
      inp.value = inp.value + "(";

    if (curLen == 6)
      inp.value = inp.value + ")-";

    if (curLen == 11)
      inp.value = inp.value + "-";

    if (curLen == 14)
      inp.value = inp.value + "-";

    if (curLen > 16)
      inp.value = inp.value.substring(0, inp.value.length - 1);

    old++;
  }

});