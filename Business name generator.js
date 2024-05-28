const Adjectives ={
     "1" : "Crazy",
     "2" : "Amazing",
     "3" : "Fire"
};

const shopName = {
     "1": "Engine",
     "2" : "Food",
     "3" : "Garments"
}

const otherName = {
     "1" : "Bros",
     "2" : "Limited",
     "3" : "Hub"
}

let a= Math.trunc( Math.random()*3)+1;
let b= Math.trunc( Math.random()*3)+1;
let c= Math.trunc( Math.random()*3)+1;


console.log(`${Adjectives[a]} ${shopName[b]} ${otherName[c]}`);