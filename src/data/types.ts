type BasePattern = {
    name: string,
    displayName: string,
    color: [number, number, number],
    bodyColor: {
        on: boolean,
        speed: number,
        duration: number,
        color: [number, number, number],
    },
    ringColor: {
        on: boolean,
        speed: number,
        duration: number,
        color: [number, number, number],
    },
    sparkleColor: {
        on: boolean,
        speed: number,
        duration: number,
        color: [number, number, number],
    },
    flashColor: {
        on: boolean,
        speed: number,
        duration: number,
        color: [number, number, number],
    },
    patternSpeed: number,
    colorCycleSpeed: number,
}

type BaseSmallPattern = {
    name: string,
    displayName: string,
    sparkleColor: {
        on: boolean,
        speed: number,
        duration: number,
        color: [number, number, number],
    },
    flashColor: {
        on: boolean,
        speed: number,
        duration: number,
        color: [number, number, number],
    },
    patternSpeed: number
}

export type SolidColor = BasePattern
export type PulsingColor = BasePattern
export type Confetti = BasePattern
// 
export type MultiPole = BasePattern & {
    secondaryColor: {
        on: boolean,
        speed: number,
        duration: number,
        color: [number, number, number],
    }
}
export type VerticalWave = MultiPole
export type Torch = MultiPole
// 
export type LinearRainbow = BaseSmallPattern
export type VerticalRainbow = BaseSmallPattern
export type BPM = BaseSmallPattern
export type Juggle = BaseSmallPattern