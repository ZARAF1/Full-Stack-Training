/*
let username='';
let defaultName;
if (username) {
    defaultName = username;
    console.log('Welcome ' + defaultName)
} else {
    defaultName = 'Stranger';
    console.log('Welcome ' + defaultName)
}

*/
// Short circuit evaluation of above example
let username=''
let defaultName = username || 'Stranger';
console.log(defaultName)

// another example
let sale=true;
let decision='time to buy'||'time to wait'
console.log(decision)

/*
// above example elaborated
let sale = true;
if (sale===true){
decision='time to buy';
console.log(decision);
}
else
{
decision='time to wait';
console.log(decision)
}

*/