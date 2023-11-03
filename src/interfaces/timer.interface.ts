export interface Timer {
    name: string;
    targetMinutes: number;
    breaks: boolean;
    typeOfBreaks: 25 | 50;
    sound: string;
}
