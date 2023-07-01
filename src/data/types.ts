type BasePattern = {
    displayName: string,
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
    }
],
    bodyColor: {
        on: boolean,
        speed: number,
        duration: number,
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
            }],
    },
    ringColor: {
        on: boolean,
        speed: number,
        duration: number,
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
        }],
    },
    sparkleColor: {
        on: boolean,
        speed: number,
        duration: number,
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
        }],
    },
    flashColor: {
        on: boolean,
        speed: number,
        duration: number,
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
        }],
    },
    patternSpeed: number,
    colorCycleSpeed: number,
}

type BaseSmallPattern = {
    displayName: string,
    sparkleColor: {
        on: boolean,
        speed: number,
        duration: number,
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
        }],
    },
    flashColor: {
        on: boolean,
        speed: number,
        duration: number,
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
        }],
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