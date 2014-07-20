var Player = {
  symbol : "",
  initialize: function(playerSymbol) {
    this.symbol = playerSymbol;
  },
};

var Space = {
  xCoordinate: 0,
  yCoordinate: 0,
  initialize: function(x,y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  mark: {},
  markBy: function(player) {
    this.mark = player;
  },
  markedBy: function() {
    return this.mark;
  },
};





$(document).ready(function() {
  $('#new-tamagotchi-form').submit(function(event) {
    var newTamagotchi = Object.create(Tamagotchi);

    newTamagotchi.initialize($('input#new-tamagotchi-name').val());
    $('#food').append(newTamagotchi.foodLevel);
    $('#activity').append(newTamagotchi.activityLevel);
    $('#sleep').append(newTamagotchi.sleepLevel);
    event.preventDefault();

    $('#hourglass').click(function(event) {
      newTamagotchi.hungry();
      newTamagotchi.sleepy();
      newTamagotchi.bored();
      if (!newTamagotchi.isAlive()) {
        alert("Game Over man!  Game over!");
      }
      $('#food').empty();
      $('#food').append(newTamagotchi.foodLevel);
      $('#activity').empty();
      $('#activity').append(newTamagotchi.activityLevel);
      $('#sleep').empty();
      $('#sleep').append(newTamagotchi.sleepLevel);
    });

    $('#foodbtn').click(function(event) {
      newTamagotchi.fed();
      $('#food').empty();
      $('#food').append(newTamagotchi.foodLevel);
    });

    $('#playbtn').click(function(event) {
      newTamagotchi.recess();
      $('#activity').empty();
      $('#activity').append(newTamagotchi.activityLevel);
    });

    $('#sleepbtn').click(function(event) {
      newTamagotchi.sleepyTime();
      $('#sleep').empty();
      $('#sleep').append(newTamagotchi.sleepLevel);
    });

  });
});



