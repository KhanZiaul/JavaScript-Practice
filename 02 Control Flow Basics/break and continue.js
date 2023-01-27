//break and continue

let scores = [30,40,70,90,0,0,100,110];

for(let i=0; i<scores.length; i++){

if(scores[i]==0){
    continue;
}

console.log(scores[i]);

if(scores[i]==100){

    console.log('congratulations!!  You done it');
    break;
}

}
