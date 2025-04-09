function lotBilling(vehicle,duration){
    const day = 24;
    duration = duration < 1 ? 1 : duration;
    if(vehicle == "car") {
        let price= 5000 + (duration-1) * 3000;
        if(duration > day){
            price += 50000;
        }
        return price;
    } 
    let price = 2000 + (duration-1) * 1000;
    if(duration > day){
        price += 20000;
    }
    return price;
}

console.log(lotBilling("car", 3));
console.log(lotBilling("bike", 0.5));
console.log(lotBilling("car", 27));