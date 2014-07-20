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

var Board = {

  boardSpace00 : {},
  boardSpace01 : {},
  boardSpace02 : {},
  boardSpace10 : {},
  boardSpace11 : {},
  boardSpace12 : {},
  boardSpace20 : {},
  boardSpace21 : {},
  boardSpace22 : {},

  boardArray : [[],[],[]],

  initialize: function() {
    this.boardSpace00 = Object.create(Space);
    this.boardSpace00.initialize(0,0);
    this.boardArray[0][0] = this.boardSpace00;

    this.boardSpace01 = Object.create(Space);
    this.boardSpace01.initialize(0,1);
    this.boardArray[0][1] = this.boardSpace01;

    this.boardSpace02 = Object.create(Space);
    this.boardSpace02.initialize(0,2);
    this.boardArray[0][2] = this.boardSpace02;

    this.boardSpace10 = Object.create(Space);
    this.boardSpace10.initialize(1,0);
    this.boardArray[1][0] = this.boardSpace10;

    this.boardSpace11 = Object.create(Space);
    this.boardSpace11.initialize(1,1);
    this.boardArray[1][1] = this.boardSpace11;

    this.boardSpace12 = Object.create(Space);
    this.boardSpace12.initialize(1,2);
    this.boardArray[1][2] = this.boardSpace12;

    this.boardSpace20 = Object.create(Space);
    this.boardSpace20.initialize(2,0);
    this.boardArray[2][0] = this.boardSpace20;

    this.boardSpace21 = Object.create(Space);
    this.boardSpace21.initialize(2,1);
    this.boardArray[2][1] = this.boardSpace32;

    this.boardSpace22 = Object.create(Space);
    this.boardSpace22.initialize(2,2);
    this.boardArray[2][2] = this.boardSpace22;
  },

  find: function(x,y) {
    return this.boardArray[x][y];
  },
};



// $(document).ready(function() {
//   $('#new-tamagotchi-form').submit(function(event) {
//     var newTamagotchi = Object.create(Tamagotchi);

//     newTamagotchi.initialize($('input#new-tamagotchi-name').val());
//     $('#food').append(newTamagotchi.foodLevel);
//     $('#activity').append(newTamagotchi.activityLevel);
//     $('#sleep').append(newTamagotchi.sleepLevel);
//     event.preventDefault();

//     $('#hourglass').click(function(event) {
//       newTamagotchi.hungry();
//       newTamagotchi.sleepy();
//       newTamagotchi.bored();
//       if (!newTamagotchi.isAlive()) {
//         alert("Game Over man!  Game over!");
//       }
//       $('#food').empty();
//       $('#food').append(newTamagotchi.foodLevel);
//       $('#activity').empty();
//       $('#activity').append(newTamagotchi.activityLevel);
//       $('#sleep').empty();
//       $('#sleep').append(newTamagotchi.sleepLevel);
//     });

//     $('#foodbtn').click(function(event) {
//       newTamagotchi.fed();
//       $('#food').empty();
//       $('#food').append(newTamagotchi.foodLevel);
//     });

//     $('#playbtn').click(function(event) {
//       newTamagotchi.recess();
//       $('#activity').empty();
//       $('#activity').append(newTamagotchi.activityLevel);
//     });

//     $('#sleepbtn').click(function(event) {
//       newTamagotchi.sleepyTime();
//       $('#sleep').empty();
//       $('#sleep').append(newTamagotchi.sleepLevel);
//     });

//   });
// });



