const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal=>{
    return animal[0];
})
secretMessage.splice(5,0," ");
console.log(secretMessage.join(" "))

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(num=>{
    return num/100
})

console.log(smallNumbers)