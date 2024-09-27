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

const precipitation = ["rain", "sleet", "snow"];
const [liquid, freezing, frozen] = precipitation;

console.log(liquid, freezing, frozen);

const precipitation1 = ["rain", "sleet", "snow"];

const [, , frozen1] = precipitation1;

console.log(frozen1);

const userData = {
  firstName: "William",
  lastName: "Webberton",
  age: 55,
};

const printUserParams = ({ firstName, lastName, age }, secondParameter) => {
  console.log(firstName);
  console.log(lastName);
  console.log(age);

  console.log(secondParameter);
};

printUserParams(userData, "second parameter");

class Card {
  constructor({ text, image, description }) {
    this._text = text;
    this._image = image;
    this._description = description;
  }
}

const countUserPosts = ({ posts }) => {
  return posts.length;
};

const user1 = {
  id: 2294611830,
  username: "leonardo.dv",
  posts: [
    { comment: "The Vitruvian Man", dateCreated: 1490 },
    { comment: "Portrait of a Musician", dateCreated: 1490 },
    {
      comment: "The portrait of a man in red chalk #selfie",
      dateCreated: 1512,
    },
  ],
};

countUserPosts(user1);

class Section {
  constructor({ data }, containerSelector) {
    this._initialArray = data;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      const card = item.isOwner
        ? new UserCard(item, ".card-template_type_user")
        : new DefaultCard(item, ".card-template_type_default");

      const cardElement = card.generateCard();
    });
  }

  setItem(element) {
    this._container.append(element);
  }
}
