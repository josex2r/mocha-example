module.exports = function atm (amount) {
  const bills = [50, 20, 10, 5];

  if (amount % 5 > 0) return {};

  return bills.reduce((acc, bill) => {
    if (bill <= amount) {
      if (!acc[bill]) {
        acc[bill] = Math.floor(amount / bill);
      }
      amount = amount % bill;
    }

    return acc;
  }, {});
};
