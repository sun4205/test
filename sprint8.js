const greekGods = { love: "Aphrodite", war: "Ares", trade: "Hermes" };

const { love, war, trade } = greekGods;

console.log(love, war, trade);

const obj = { one: 1, two: 2 };
const { one, two, three } = obj;
console.log(three);

const greekGods1 = { love: "Aphrodite", war: "Ares", trade: "Hermes" };

const { love: goddessOfLove, war: godOfWar, trade: godOfTrade } = greekGods;

console.log(goddessOfLove, godOfWar, godOfTrade);

const user = {
  name: "Elise",
};

const { name, avatar = "placeholder-avatar.png" } = user;

console.log(avatar);
