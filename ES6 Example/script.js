class TownElement {

    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

    getAge(){
        let age = (new Date()).getFullYear() - this.buildYear;
        return age;
    }

    static getTotalAndAverage(arr){
        const sum = arr.reduce((prev, cur, index) => prev + cur);
        const average = sum / arr.length;
        const roundedAverage = parseFloat(average.toFixed(2));
        return [sum, roundedAverage];
    }

}

class Park extends TownElement {

    constructor(name, buildYear, numberOfTrees, area){
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area; //m2
    }

    getTreeDensity(){
        const treeDensity = this.numberOfTrees / this.area;
        const roundedTreeDensity = parseFloat(treeDensity.toFixed(2));
        return roundedTreeDensity;
    }
}

class Street extends TownElement {

    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    static classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        return classification;
    }
}

// 3 parks
parks = [new Park("São Carlos Park", 1990, 25, 200),
         new Park("Rio Park", 1982, 1240, 10000),
         new Park("Johnson's Park", 2005, 998, 10000)];

// and 4 streets
streets = [new Street("Presidente Vargas", 2001, 0.5),
           new Street("Brigadeiro Lima e Silva", 1975, 5, 4),
           new Street("Ana Neri", 1990, 0.3, 2),
           new Street("Duque de Caxias", 1924, 5, 5)];

console.log("1 - Trees density:");
parks.forEach(park => console.log(`${park.getTreeDensity()} trees per square meter at ${park.name}.`));

console.log("2 - Average age of parks:");
{
    const ages = parks.map(park => park.getAge());
    const roundedAgeAverage = TownElement.getTotalAndAverage(ages)[1];
    console.log(`Parks are ${roundedAgeAverage} years old, in average.`)
}

console.log("3 - Park with 1000+ trees:");

{
    let park = parks.find(park => park.numberOfTrees >= 1000);
    console.log(`${park.name} has more than 1000 trees.`);
}

console.log("4 - Total and average length of town streets: ");

{
    const lengths = streets.map(street => street.length);
    const [totalLength, roundedLengthAverage] = TownElement.getTotalAndAverage(lengths);
    console.log(`Total streets length: ${totalLength} km. \nAverage streets length: ${roundedLengthAverage} km per street.`);
}

console.log("5 - Size classification of all streets:");

{
    const classification = Street.classifyStreet();
    streets.forEach(street => console.log(`${street.name} is ${classification.get(street.size)}.`));
}






