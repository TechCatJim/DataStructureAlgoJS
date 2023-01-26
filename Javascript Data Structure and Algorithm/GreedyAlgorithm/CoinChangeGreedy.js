function minCoinChange(coins, amount) {
  let n = coins.length;
  let ans = [];

  for (let i = n - 1; i >= 0; i--) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      ans.push(coins[i]);
    }
  }
  return ans;
}
