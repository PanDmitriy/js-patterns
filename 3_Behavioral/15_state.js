/**
 * Состояние (англ. State) — поведенческий шаблон проектирования. Используется в тех случаях, когда во время выполнения программы объект должен менять своё поведение в зависимости от своего состояния.

Паттерн состоит из 3 блоков:

Widget — класс, объекты которого должны менять своё поведение в зависимости от состояния.

IState — интерфейс, который должен реализовать каждое из конкретных состояний. Через этот интерфейс объект Widget взаимодействует с состоянием, делегируя ему вызовы методов. Интерфейс должен содержать средства для обратной связи с объектом, поведение которого нужно изменить. Для этого используется событие (паттерн Publisher — Subscriber). Это необходимо для того, чтобы в процессе выполнения программы заменять объект состояния при появлении событий. Возможны случаи, когда сам Widget периодически опрашивает объект состояния на наличие перехода.

StateA … StateZ — классы конкретных состояний. Должны содержать информацию о том, при каких условиях и в какие состояния может переходить объект из текущего состояния. Например, из StateA объект может переходить в состояние StateB и StateC, а из StateB — обратно в StateA и так далее. Объект одного из них должен содержать Widget при создании.
 */

class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super('red');
  }

  sign() {
    return 'STOP';
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow');
  }

  sign() {
    return 'WARNING';
  }
}

class GreenLight extends Light {
  constructor() {
    super('green');
  }

  sign() {
    return 'GO';
  }
}

class TrafficLight {
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight(),
    ];
    this.currentState = this.states[0];
  }

  change() {
    const total = this.states.length;
    let index = this.states.findIndex(light => light === this.currentState);

    if (index + 1 < total) {
      this.currentState = this.states[index + 1];
    } else {
      this.currentState = this.states[0];
    }
  } 

  sign() {
    return this.currentState.sign();
  }
}

const traffic = new TrafficLight();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());