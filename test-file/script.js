let getFighter = () => {
  return new Promise((res, rej) => {
    let fighters = [
      {
        name: 'Jin',
        roll: 44,
        age: 23,
        enrollYear: 2016,
      },
      {
        name: 'Kazuya',
        roll: 7,
        age: 48,
        enrollYear: 1995,
      },
      {
        name: 'Paul',
        roll: 12,
        age: 48,
        enrollYear: 1999,
      },
      {
        name: 'Hwoarang',
        roll: 46,
        age: 21,
        enrollYear: 2016,
      },
    ]

    let time = new Date().getTime();
    while(new Date().getTime() - time < 2000) {
      // simulating 2 seconds delay
    }

    // res(fighters);
    // rej(new Error('Error fetching fighters data'))
  })
}

// Promise.resolve(getFighter()).then(data => {console.log(data)}).catch(err => {console.log(err.message)})
// Promise.resolve(getFighter()).catch()
// getFighter().catch(err => {console.log(err.message)})
