(function() {
  var button = $("#calc-button");
  button.on('click', function() {
    var oneMana = parseInt($("#one-mana").val()),
      twoMana = parseInt($("#two-mana").val()),
      threeMana = parseInt($("#three-mana").val()),
      fourMana = parseInt($("#four-mana").val()),
      fiveMana = parseInt($("#five-mana").val()),
      sixMana = parseInt($("#six-mana").val()),
      sevenMana = parseInt($("#seven-mana").val()),
      eightMana = parseInt($("#eight-mana").val()),
      nineMana = parseInt($("#nine-mana").val()),
      tenMana = parseInt($("#ten-mana").val()),
      elevenMana = parseInt($("#eleven-mana").val()),
      twelveMana = parseInt($("#twelve-mana").val()),
      thirteenMana = parseInt($("#thirteen-mana").val()),
      fourteenMana = parseInt($("#fourteen-mana").val()),
      fifteenMana = parseInt($("#fifteen-mana").val()),
      totalLandsHTML = $("#total-lands");
      totalCards = 0,
      totalMana = 0,
      totalLands = 0;

      totalCards = (oneMana + twoMana + threeMana + fourMana + fiveMana + sixMana + sevenMana + eightMana + nineMana + tenMana + elevenMana + twelveMana + thirteenMana + fourteenMana + fifteenMana);
      console.log("Total de cartas: " + totalCards);
      oneMana = oneMana * 1;
      twoMana = twoMana * 2;
      threeMana = threeMana * 3;
      fourMana = fourMana * 4;
      fiveMana = fiveMana * 5;
      sixMana = sixMana * 6;
      sevenMana = sevenMana * 7;
      eightMana = eightMana * 8;
      nineMana = nineMana * 9;
      tenMana = tenMana * 10;
      elevenMana = elevenMana * 11;
      twelveMana = twelveMana * 12;
      thirteenMana = thirteenMana * 13;
      fourteenMana = fourteenMana * 14;
      fifteenMana = fifteenMana * 15;

      totalMana = (oneMana + twoMana + threeMana + fourMana + fiveMana + sixMana + sevenMana + eightMana + nineMana + tenMana + elevenMana + twelveMana + thirteenMana + fourteenMana + fifteenMana);
      console.log("Total de mana: " + totalMana);
      totalLands = parseInt((totalMana / totalCards) * 10);

      totalLandsHTML.html(totalLands);
  });
}());
