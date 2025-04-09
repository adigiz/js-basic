function parkirBNI(vehicle,duration){
    if(vehicle == "car") {
        let bayar= 5000 + (duration-1) * 3000;
        if(duration > 24){
            bayar = bayar + 50000;
        }
        return bayar;
    } 
    let bayar = 2000 + (duration-1) * 1000;
    if(duration > 24){
        bayar = bayar + 20000;
    }
    return bayar;
}

console.log(parkirBNI("car", 3));
console.log(parkirBNI("bike", 1));
console.log(parkirBNI("car", 27));