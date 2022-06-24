// -------promesas ------------


function dividir(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 == 0) {
            reject('No se puede dividir por 0');
        } else {
            resolve(num1 / num2);
        }
    });
}
// console.log(dividir(10, 2));
// console.log(dividir(10, 0));



Promise.resolve(20)
    .then(X =>X+1 )
    .then(X =>X *2 )
    .then(X =>{
if(x==22)throw 'error'
else return 80})    
.then (X=>30) 
.then(X=>x/2)
.then(console.log)
.catch(console.log)
