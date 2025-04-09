const lotBilling = (vehicleType, duration) => {
    const pricing = {
        car: {
            firstHour: 5000,
            nexthour: 3000,
            extraCharge: 50000,
        },
        bike: {
            firstHour: 2000,
            nexthour: 1000,
            extraCharge: 20000,
        },
    };
    
    let totalCharge = 0;
    totalCharge = duration > 24 ? pricing[vehicleType].extraCharge : 0;

    let totalFee = pricing[vehicleType].firstHour + (duration - 1) * pricing[vehicleType].nexthour + totalCharge;

    return totalFee;
}

console.log(lotBilling("car", 3));
console.log(lotBilling("bike", 1));
console.log(lotBilling("car", 27));