/**
 * Шаблонный метод (англ. Template method) — поведенческий шаблон проектирования, определяющий основу алгоритма и позволяющий наследникам переопределять некоторые шаги алгоритма, не изменяя его структуру в целом.
 */

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} занимается ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} получает ${this.salary} рублей`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return `разработкой программ.`;
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return `тестированием программ.`;
  }
}

const dev = new Developer('Дима', 50_000);
const tester = new Tester('София', 35_000);


console.log(dev.work())
console.log(dev.getPaid())

console.log(tester.work())
console.log(tester.getPaid())