export type Pattern = {
    name: string,
    displayName: string,
    color: [number, number, number],
    bodyColor: boolean,
    ringColor: boolean,
    sparkleColor: {
        on: boolean,
        speed: number,
        duration: number,
    },
    flashColor: {
        on: boolean,
        speed: number,
        duration: number,
    },
    patternSpeed: number,
    colorCycleSpeed: number,
}