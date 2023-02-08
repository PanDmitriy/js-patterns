/**
 * Iterator — поведенческий шаблон проектирования. Представляет собой объект, позволяющий получить последовательный доступ к элементам объекта-агрегата без использования описаний каждого из агрегированных объектов.
 */

class MyIterator {
  constructor(data = []) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
      if (this.index < this.data.length) {
        return {
          done: false,
          value: this.data[this.index++],
        }
      } else {
        return {
          done: true,
          value: undefined,
        }
      }
    }}
  }
}

const dataArray = [1, 2, 3];

const iterator = new MyIterator(dataArray);

for (const value of iterator) {
  console.log(`Value: ${value}`);
}

function* generator(array = []) {
  let index = 0;
  while (index < array.length) {
    yield array[index++];
  }
}

const gen = generator(dataArray);

// for (const value of gen) {
//   console.log(`Value: ${value}`);
// }
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
