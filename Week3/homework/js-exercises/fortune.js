const numChilden = [1, 2, 3, 4];
const partnerNames = ["name1", "name2", "name3", "name4"];
const location = ["location1", "location2", "location3", "location4"];
const jobs = ["job1", "job2", "job3", "job4"];



let tellFortune = (array1, array2, array3, array4) => {
 let childern = array1[Math.floor(Math.random() * array1.length)];
 let partner = array2[Math.floor(Math.random() * array2.length)];
 let place = array3[Math.floor(Math.random() * array3.length)];
 let job = array4[Math.floor(Math.random() * array4.length)];


 console.log(`You will be a ${job} in ${place}, and married to ${partner} with ${childern} kids.`)
}
tellFortune(numChilden, partnerNames, location, jobs);
