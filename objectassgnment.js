let santoshinfo={
firstname:"santosh",
lastname:"devkate",
age:"24",
address:{
    country:"india",
    state:"maharashtra",
    dist:'soapur'
}
}

console.log(santoshinfo);
console.log( `students address is:${santoshinfo.lastname}`);

delete santoshinfo.age;
console.log(santoshinfo);

// nested object
console.log(santoshinfo.address);
console.log(santoshinfo.address.country);

