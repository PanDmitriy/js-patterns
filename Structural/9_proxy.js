/**
 * Заместитель (англ. Proxy) — структурный шаблон проектирования, предоставляющий объект, который контролирует доступ к другому объекту, перехватывая все вызовы (выполняет функцию контейнера).
 */

function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Ответ из кеша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  }
})

console.log(proxiedFetch('youtube.com'));
console.log(proxiedFetch('google.com'));

console.log(proxiedFetch('youtube.com'));