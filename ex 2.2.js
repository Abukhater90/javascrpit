

function tellFortune (jobTitle, location, partnerName, numberOfChildren){


    //'You will be a programmer in New York married to Rana with 2 children'. Be sure to replace 'programmer'.


    let result = `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren}`


   return result;

}

let all = tellFortune("programmer" , "jerusalem" , "nadia" , 3);
console.log(all);

let all2 = tellFortune("eng" , "amman" , "ranin" , 5);
console.log(all2);