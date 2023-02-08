/**
 * Наблюдатель (англ. Observer) — поведенческий шаблон проектирования. Также известен как «подчинённые» (англ. Dependents). Реализует у класса механизм, который позволяет объекту этого класса получать оповещения об изменении состояния других объектов и тем самым наблюдать за ними.

Классы, на события которых другие классы подписываются, называются субъектами (Subjects), а подписывающиеся классы называются наблюдателями (англ. Observers)[3].
 */

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  dispatch(action) {
    this.observers.forEach(observer => {
      observer.update(action);
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initState = state;
  }

  update(action) {
    switch(action.type) {
      case 'INCREMENT': 
        ++this.state;
        break;
      case 'DECREMENT': 
        --this.state;
        break;
      case 'ADD':
        this.state = this.state += action.payload;
        break;
      default:
        this.state = this.initState;
        break;
    }
  }
}

const stream = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(42);
const obs3 = new Observer(100);

stream.subscribe(obs1);
stream.subscribe(obs2);
stream.subscribe(obs3);

stream.dispatch({ type: 'INCREMENT' });
stateLog();
stream.dispatch({ type: 'INCREMENT' });
stateLog();
stream.dispatch({ type: 'DECREMENT' });
stateLog();
stream.dispatch({ type: 'DECREMENT' });
stateLog();
stream.dispatch({ type: 'ADD', payload: 24 });
stateLog();


function stateLog() {
  console.log({obs1: obs1.state});
  console.log({obs2: obs2.state});
  console.log({obs3: obs3.state});
  console.log('================');
}