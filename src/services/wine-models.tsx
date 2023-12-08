


export interface Wine {
    "Alcohol": number;
    "Malic Acid": number;
    "Ash": number;
    "Alcalinity of ash": number;
    "Magnesium": number;
    "Total phenols": number;
    "Flavanoids": number;
    "Nonflavanoid phenols": string;
    "Proanthocyanins": string;
    "Color intensity": number;
    "Hue": number;
    "OD280/OD315 of diluted wines": string;
    "Unknown": number;
}

export interface Flavanoids {
    sum : number;
    length: number;
    gamma : number;
}

export interface TableData {
    mean: number;
    median: number;
    mode: number;
}