export var gamma = {};
export var flavanoids = {};

// processing the json object for flavanoids and gamma
export const calculateFlavanoids = ({wineData}: any) => {
    const data = new Map();
    const gammaData = new Map();

    for(const obj of wineData){
        const {Alcohol : wineClass, Ash, Hue, Flavanoids, Magnesium} = obj;
        let wineClassInformation = data.get(wineClass);
        if(!wineClassInformation){
            wineClassInformation = {sum: 0, length: 0, elements : []};
            data.set(wineClass, wineClassInformation)
        }
        let flavanoid = typeof(Flavanoids)==="string"? Number(Flavanoids): Flavanoids;
        wineClassInformation.sum += flavanoid;
        wineClassInformation.length += 1;
        wineClassInformation.elements.push(flavanoid);
        let gammaClassInformation = gammaData.get(wineClass);
        if(!gammaClassInformation){
            gammaClassInformation = {sum: 0, length: 0, elements: []};
            gammaData.set(wineClass, gammaClassInformation)
        }
        let gammaElement = Math.round(((Number(Ash) * Number(Hue))/Number(Magnesium))*1000)/1000;
        gammaClassInformation.sum += gammaElement;
        gammaClassInformation.length += 1;
        gammaClassInformation.elements.push(gammaElement);
        gamma = Object.fromEntries(gammaData);
    }
    flavanoids = Object.fromEntries(data);
}

// method to calculate mode 
export const calculateMode = (data: number[]) => {
    const arrayMap = new Map<number, number>();
    for (const element of data) {
      const count = arrayMap.get(element) ?? 0;
      arrayMap.set(element, count + 1);
    }
    let maxCount = 0;
    let mode: number = 0;
    for (const [element, count] of arrayMap.entries()) {
      if (count > maxCount) {
        maxCount = count;
        mode = element;
      }
    }
    return Math.round(mode*1000)/1000;
}

// method to calculate median 
export const calculateMedian = (data: number[]) => {
    const sortedArray = data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor((sortedArray.length - 1) / 2);
    if (sortedArray.length % 2 === 1) {
        return Math.round(sortedArray[middleIndex]*1000)/1000;
    } else {
        const lowerMiddle = sortedArray[middleIndex];
        const upperMiddle = sortedArray[middleIndex + 1];
        return Math.round(((lowerMiddle + upperMiddle) / 2)*1000)/1000;
    }
}

// calculate mean, median and mode for the respective classes
export const createTableData = (data: any) => {
    const tableData= new Map();
    Object.keys(data).forEach((key) => {
        let mean = data[key]["sum"] / data[key]["length"];
        let median = calculateMedian(data[key]["elements"]);
        let mode = calculateMode(data[key]["elements"]);
        tableData.set(key,  {
            mean : Math.round(mean*1000)/1000, 
            median: median,
            mode: mode
        })    
    })
    return Object.fromEntries(tableData);
}