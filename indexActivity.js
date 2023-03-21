console.log("Hello, Welcome to De La Salle University!");

function computeSupply(age, amountPerDay) {
    const maxAge = 100;
    const years = maxAge - age;
    const yearlyExpenses = amountPerDay * 365;
    const lifeSupply = yearlyExpenses * years;
    console.log(`You need to ${Math.round(lifeSupply)} to last you until the ripe old age of ${maxAge}`)
}
computeSupply(20, 7);
computeSupply(27, 6.5);
computeSupply(55, 10.2);