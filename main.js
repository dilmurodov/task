const axios = require('axios')

const url = 'https://54.uz/works.json'

/**
 * findIndex - TimeComplexity O(n) if data more but our data not more and first >1000 bonus is near the first Index;
 * That means My algorithm works in O(1) time
 */

const start = process.hrtime();


/**
 * 1 - Method with async/await (for more data calculating)
 * Time: 18.00 ms
 */

// (async () => {
//     try{
//         const data = await axios.get(url)
//         const works = data.data.works
//         const bonusIndex = works.findIndex((work) => work.payment.bonus > 1000)
//         return works[bonusIndex];
//     } catch (err) {
//         console.log("Somethis Wrong: ", err.message)
//     }
// })().then(e => console.log(e));

/**
 * 2 - Method with fetch/catch
 * Time: 13.00 ms
 * */

axios.get(url)
.then(data => {
    const works = data.data.works
    const bonusIndex = works.findIndex((work) => work.payment.bonus > 1000) // TimeComplexity O(n)
    console.log(works[bonusIndex]);
})
.catch(err => console.log(err))

const stop = process.hrtime(start)

console.log(`Time execution ${(stop[0] * 1e9 + stop[1])/1e6}  ms`);
