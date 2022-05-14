const axios = require('axios')

const url = 'https://54.uz/works.json'

/**
 * findIndex - TimeComplexity O(n) if data more but our data not more and first >1000 bonus is near the first Index;
 * That means My algorithm works in O(1) time
 */

/**
 * 1 - Method with async/await
 */

// const getData = async () => {
//     try{
//         const data = await axios.get(url)
//         const works = data.data.works
//         const bonusIndex = works.findIndex((work) => work.payment.bonus > 1000)
//         return works[bonusIndex];
//     } catch (err) {
//         console.log("Somethis Wrong: ", err.message)
//     }
// }

// getData().then(e => console.log(e));

/**
 * 2 - Method with async/await
 * */

// axios.get(url)
// .then(data => {
//     const works = data.data.works
//     const bonusIndex = works.findIndex((work) => work.payment.bonus > 1000) // TimeComplexity O(n)
//     console.log(works[bonusIndex]);
// })
// .catch(err => console.log(err))

