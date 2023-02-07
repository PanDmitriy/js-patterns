/** 
 * Декоратор (англ. Decorator) — структурный шаблон проектирования, предназначенный для динамического подключения дополнительного поведения к объекту. Шаблон Декоратор предоставляет гибкую альтернативу практике создания подклассов с целью расширения функциональности.
 */

// Instance #1.
class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https//:${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function() {
    return server.url;
  }
  return server;
}

const s = aws(new Server('42.42.42.42', 8080));
console.log(s.isAWS);
console.log(s.awsInfo());

// Instance #2.
function Coffee() {
  this.cost = function() {
  return 5;
  };
}

function Milk(coffee) {
  this.cost = function() {
  return coffee.cost() + 0.5;
  };	
}

function Whip(coffee) {
  this.cost = function() {
  return coffee.cost() + 0.7;
  };
}

function Sprinkles(coffee) {
  this.cost = function() {
  return coffee.cost() + 0.2;
  };
}

const coffee = new Coffee();
console.log( coffee.cost() );

const coffeeWithMilk = new Milk(new Whip(new Sprinkles(new Coffee())));
console.log( coffeeWithMilk.cost() );
