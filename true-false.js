// Falsy:
// false
// 0
// ""
// undenfined
// null
// NaN
// Truthy:
// '0', ' ', []
//'false'
let name = 12;
if(name || name == 0 ) {
     console.log("condition is true");
}
else{
    console.log("condition is false");
}