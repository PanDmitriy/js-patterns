/** 
 * Адаптер (англ. Adapter) — структурный шаблон проектирования, предназначенный для организации использования функций объекта, недоступного для модификации, через специально созданный интерфейс. Другими словами — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.
 * Включение уже существующего класса в другой класс. Интерфейс включающего класса приводится в соответствие с новыми требованиями, а вызовы его методов преобразуются в вызовы методов включённого класса.
 */


class OldCalc {
  operations(t1, t2, operation) {
    switch(operation) {
      case 'add': return t1 + t2;
      case 'sub': return t1 - t2;
      default: NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }
  sub(t1, t2) {
    return t1 - t2;
  }
}

class CalcAdaptor {
  constructor() {
    this.calc = new NewCalc()
  }

  operations(t1, t2, operation) {
    switch(operation) {
      case 'add': return this.calc.add(t1, t2);
      case 'sub': return this.calc.sub(t1, t2);
      default: NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(40, 2, 'add'));
console.log(oldCalc.operations(44, 2, 'sub'));

const newCalc = new NewCalc();
console.log(newCalc.add(40, 2));
console.log(newCalc.sub(44, 2));

const adaptor = new CalcAdaptor();
console.log(adaptor.operations(40, 2, 'add'));
console.log(adaptor.operations(44, 2, 'sub'));
console.log(adaptor.calc.add(40, 2));
console.log(adaptor.calc.sub(44, 2));
