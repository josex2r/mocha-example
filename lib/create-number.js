module.exports = function createNumber(number) {
  console.log(number);

  return {
    add() {
      number += 1;
      console.log(number);

      return createNumber(number);
    },
    subtract() {
      number -= 1;
      console.log(number);

      return createNumber(number);
    }
  };
}

// createNumber(5).add().add().add().subtract().add().subtract()
