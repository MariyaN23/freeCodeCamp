fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => console.log(json)) //конвертировали в массив
      .catch(error => console.error(error)) //если ошибка


fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))



const getData = (url) => 
new Promise((resolve, reject) =>
      fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
)
getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

async function asyncFn() {
    return 'Success!!!'  //Promise result
}
asyncFn()
    .then(value => console.log(value))


const asyncFn2 = async ()=> {
    throw new Error('This is an ERROR!!!')
}
asyncFn2()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))


const timerPromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))
const asyncFn3 = async () => {
    console.log('Timer starts')
    const startsTime = performance.now()
    await timerPromise()  //ф-ция не выполняется пока не будет рез-та промиса
    const endTime = performance.now()
    console.log('Timer ended', endTime - startsTime)
}
asyncFn3()


//промис с ASYNC-AWAIT 
const getData2 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url = 'https://jsonplaceholder.typicode.com/todos'
try {
    const data = await getData2(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}