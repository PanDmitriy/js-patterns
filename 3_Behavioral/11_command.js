/**
 * Команда (англ. Command) — поведенческий шаблон проектирования, используемый при объектно-ориентированном программировании, представляющий действие. Объект команды заключает в себе само действие и его параметры.
 */

class MyMath {
  constructor(initValue = 0) {
    this.value = initValue;
  }

  square() {
    return this.value ** 2;
  }

  cube() {
    return this.value ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandExecuted = [];
  }

  execute(command) {
    this.commandExecuted.push(command);
    return this.subject[command]?.();
  }
}

const x = new Command(new MyMath(2));

console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.execute('add'));

console.log(x.commandExecuted);
