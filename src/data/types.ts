type BasePattern = {
    id: number,
    displayName: string,
    name: string,
    patternName: string,
    linkColors: boolean,
    color: {
        name: string,
        linkColors: boolean,
        color: [{
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        }
    ]},
    sparkleColor: {
        name: string,
        on: boolean,
        speed: number,
        intensity: number,
        linkColors: boolean,
        color: [{
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        }],
    },
    flashColor: {
        name: string,
        on: boolean,
        speed: number,
        dutyCycle: number,
        linkColors: boolean,
        color: [{
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        }],
    },
    patternSpeed: number,
    colorCycleSpeed: number,
}

type BaseSmallPattern = {
    id: number,
    displayName: string,
    name: string,
    patternName: string,
    sparkleColor: {
        name: string,
        on: boolean,
        speed: number,
        duration: number,
        linkColors: boolean,
        color: [{
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        }],
    },
    flashColor: {
        name: string,
        on: boolean,
        speed: number,
        duration: number,
        linkColors: boolean,
        color: [{
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        }],
    },
    patternSpeed: number,
    synchronized: boolean,
}

export type SolidColor = BasePattern
export type PulsingColor = BasePattern
export type Confetti = BasePattern
// 
export type MultiPole = BasePattern & {
    secondaryColor: {
        name: string,
        on: boolean,
        speed: number,
        duration: number,
        linkColors: boolean,
        color: [{
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        },
        {
            "h": number,
            "s": number,
            "l": number
        }],
    }
}
export type VerticalWave = MultiPole
export type Torch = MultiPole
// 
export type LinearRainbow = BaseSmallPattern
export type VerticalRainbow = BaseSmallPattern
export type BPM = BaseSmallPattern
export type Juggle = BaseSmallPattern

export const colorKeys = [
    "color",
    "bodyColor",
    "ringColor",
    "sparkleColor",
    "flashColor",
    "secondaryColor"
]