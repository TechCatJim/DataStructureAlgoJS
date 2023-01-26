function coinChange(Coins, N) {
  let ways = new Array(N + 1);
  for (let i = 0; i < N + 1; i++) {
    ways[i] = 0;
  }
  ways[0] = 1;

  for (let i = 0; i < Coins.length; i++) {
    for (let j = 0; j < ways.length; j++) {
      if (Coins[i] <= j) {
        ways[j] += ways[j - Coins[i]];
      }
    }
  }
  return ways[N];
  // add whatever parameters you deem necessary - good luck!
}

const denominations = [1, 5, 10, 25];

coinChange(denominations, 1); // 1
coinChange(denominations, 2); // 1
coinChange(denominations, 5); // 2
coinChange(denominations, 10); // 4
coinChange(denominations, 25); // 13
coinChange(denominations, 45); // 39
coinChange(denominations, 100); // 242
coinChange(denominations, 145); // 622
coinChange(denominations, 1451); // 425663
coinChange(denominations, 14511); // 409222339
