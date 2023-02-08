/**
 * Посредник (англ. Mediator) — поведенческий шаблон проектирования, обеспечивающий взаимодействие множества объектов, формируя при этом слабое зацепление и избавляя объекты от необходимости явно ссылаться друг на друга.
 */

class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      })
    }
  }
}

const dmitriy = new User('Dmitriy');
const sofiya = new User('Sofiya');
const ivan = new User('Ivan');

const chat = new ChatRoom();
chat.register(dmitriy);
chat.register(sofiya);
chat.register(ivan);

dmitriy.send('Hello everyone');
sofiya.send('Hi', dmitriy);
ivan.send('Hello', dmitriy);
