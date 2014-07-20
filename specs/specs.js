describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy().should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  describe("initialize", function() {
    it("creates a board of 9 spaces in a 3x3 pattern", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.find(1,1).should.equal(testBoard.boardSpace11);
    });
  });
});

