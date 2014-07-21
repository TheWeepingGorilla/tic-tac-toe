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

var Game = {
  playerX : {},
  playerY : {},
  gameBoard : {},
  playerTurn : {},


  initialize: function() {
    this.playerX = Object.create(Player);
    this.playerX.initialize("X");
    this.playerY = Object.create(Player);
    this.playerY.initialize("Y");
    this.gameBoard = Object.create(Board);
    this.gameBoard.initialize();
    this.playerTurn = this.playerX;
  },

  changeTurn: function() {
    if (this.playerTurn === this.playerX) {
      this.playerTurn = this.playerY;
    } else {
      this.playerTurn = this.playerX;
    }
  },

  isGameOver: function() {
    for (var xCoor = 0; xCoor < 3; xCoor++) {
      if ( (this.gameBoard.boardArray[xCoor][0].markedBy ===
            this.gameBoard.boardArray[xCoor][1].markedBy) &&
           (this.gameBoard.boardArray[xCoor][1].markedBy ===
            this.gameBoard.boardArray[xCoor][2].markedBy) ) {
        return this.playerTurn;
      }
    }
    for (var yCoor = 0; yCoor < 3; yCoor++) {
      if ( (this.gameBoard.boardArray[yCoor][0].markedBy ===
            this.gameBoard.boardArray[yCoor][1].markedBy) &&
           (this.gameBoard.boardArray[yCoor][1].markedBy ===
            this.gameBoard.boardArray[yCoor][2].markedBy) ) {
        return this.playerTurn;
      }
    }
    if ( (this.gameBoard.boardArray[0][0].markedBy ===
          this.gameBoard.boardArray[1][1].markedBy) &&
         (this.gameBoard.boardArray[1][1].markedBy ===
          this.gameBoard.boardArray[2][2].markedBy) ) {
      return this.playerTurn;
    }
    if ( (this.gameBoard.boardArray[0][2].markedBy ===
          this.gameBoard.boardArray[1][1].markedBy) &&
         (this.gameBoard.boardArray[1][1].markedBy ===
          this.gameBoard.boardArray[2][0].markedBy) ) {
      return this.playerTurn;
    }
  },
}


$(document).ready(function() {
  $('#new-game').click(function(event) {
    var newGame = Object.create(Game);
    newGame.initialize();


    // newTamagotchi.initialize($('input#new-tamagotchi-name').val());
    // $('#food').append(newTamagotchi.foodLevel);
    // $('#activity').append(newTamagotchi.activityLevel);
    // $('#sleep').append(newTamagotchi.sleepLevel);
    // event.preventDefault();

    $('#zero-zero').click(function(event) {
      alert("0,0 clicked!");

    });
    $('#one-zero').click(function(event) {
      alert("1,0 clicked!");

    });
    $('#two-zero').click(function(event) {
      alert("2,0 clicked!");

    });
    $('#zero-one').click(function(event) {
      alert("0,1 clicked!");

    });
    $('#one-one').click(function(event) {
      alert("1,1 clicked!");

    });
    $('#two-one').click(function(event) {
      alert("2,1 clicked!");

    });
    $('#zero-two').click(function(event) {
      alert("0,2 clicked!");

    });
    $('#one-two').click(function(event) {
      alert("1,2 clicked!");

    });
    $('#two-two').click(function(event) {
      alert("2,2 clicked!");

    });




    //   newTamagotchi.hungry();
    //   newTamagotchi.sleepy();
    //   newTamagotchi.bored();
    //   if (!newTamagotchi.isAlive()) {
    //     alert("Game Over man!  Game over!");
    //   }
    //   $('#food').empty();
    //   $('#food').append(newTamagotchi.foodLevel);
    //   $('#activity').empty();
    //   $('#activity').append(newTamagotchi.activityLevel);
    //   $('#sleep').empty();
    //   $('#sleep').append(newTamagotchi.sleepLevel);
    // });

    // $('#foodbtn').click(function(event) {
    //   newTamagotchi.fed();
    //   $('#food').empty();
    //   $('#food').append(newTamagotchi.foodLevel);
    // });

    // $('#playbtn').click(function(event) {
    //   newTamagotchi.recess();
    //   $('#activity').empty();
    //   $('#activity').append(newTamagotchi.activityLevel);
    // });

    // $('#sleepbtn').click(function(event) {
    //   newTamagotchi.sleepyTime();
    //   $('#sleep').empty();
    //   $('#sleep').append(newTamagotchi.sleepLevel);
    // });

  });
});



