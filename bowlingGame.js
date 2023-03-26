class BowlingGame {

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  };

  score() {
    if (this.rolls.length === 0) {
      return 0;
    };

    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0 ; frame < 10 ; frame++) {
      if (this.isSpare(rollIndex)) {
        totalScore += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      } else if (this.isStrike(rollIndex)) {
        totalScore += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex += 1;
      } else {
        totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      };
    };

    return totalScore;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

};

module.exports = BowlingGame;