export interface Timer {
    name: string;
    description: string;
    targetMinutes: number;
    breaks: boolean;
    typeOfBreaks: 25 | 50;
    sound: string;
}
