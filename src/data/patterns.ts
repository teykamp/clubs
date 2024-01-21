var aliases = {
    // patterns
    patternName: 0,
    linkColors: 1,
    color: 2,
    secondaryColor: 3,
    sparkleColor: 4,
    flashColor: 5,
    patternSpeed: 6,
    patternDuration: 7,
    colorCycleSpeed: 8,
    synchronized: 9,

    // sparkleColor
    on: 10,
    speed: 11,
    intensity: 12,

    // flashColor
    dutyCycle: 13,

    // general
    true: 1,
    false: 0,
};

var defaultColor = "f".repeat(6 * 4);

function getDefaultSmallPattern(patternName: string) {
    // For patterns such as BPM that have a fixed color or one that changes so rapidly it doesn't need a starting color. Most of the properties are pre-defined by the pattern and not able to be changed. Hence the smaller number of options to customize.
    return {
        [aliases.patternName]: patternName,
        [aliases.sparkleColor]: {
            [aliases.on]: aliases.false,
            [aliases.speed]: 0,
            [aliases.intensity]: 0,
            [aliases.color]: {
                [aliases.linkColors]: aliases.true,
                [aliases.color]: defaultColor,
            }},
        [aliases.flashColor]: {
            [aliases.on]: aliases.false,
            [aliases.speed]: 0,
            [aliases.dutyCycle]: 0,
            [aliases.color]: {
                [aliases.linkColors]: aliases.true,
                [aliases.color]: defaultColor,
            },
        },
        [aliases.patternSpeed]: 1,
        [aliases.patternDuration]: 10,
        [aliases.synchronized]: aliases.true
    }
}


function getDefaultPattern(patternName: string) {
    return {
        [aliases.patternName]: patternName,
        [aliases.color]: {
            [aliases.linkColors]: aliases.true,
            [aliases.color]: defaultColor,
        },
        [aliases.sparkleColor]: {
            [aliases.on]: aliases.false,
            [aliases.speed]: 0,
            [aliases.intensity]: 0,
            [aliases.color]: {
                [aliases.linkColors]: aliases.true,
                [aliases.color]: defaultColor,
            }},
        [aliases.flashColor]: {
            [aliases.on]: aliases.false,
            [aliases.speed]: 0,
            [aliases.dutyCycle]: 0,
            [aliases.color]: {
                [aliases.linkColors]: aliases.true,
                [aliases.color]: defaultColor,
            },
        },
        [aliases.patternSpeed]: 1,
        [aliases.colorCycleSpeed]: 1,
        [aliases.patternDuration]: 10,
        [aliases.synchronized]: aliases.true
    }
}

function  getDefaultLargePattern(patternName: string) {
    return {
        [aliases.patternName]: patternName,
        [aliases.color]: {
            [aliases.linkColors]: aliases.true,
            [aliases.color]: defaultColor,
        },
        [aliases.secondaryColor]: defaultColor,
        [aliases.sparkleColor]: {
            [aliases.on]: aliases.false,
            [aliases.speed]: 0,
            [aliases.intensity]: 0,
            [aliases.color]: {
                [aliases.linkColors]: aliases.true,
                [aliases.color]: defaultColor,
            }},
        [aliases.flashColor]: {
            [aliases.on]: aliases.false,
            [aliases.speed]: 0,
            [aliases.dutyCycle]: 0,
            [aliases.color]: {
                [aliases.linkColors]: aliases.true,
                [aliases.color]: defaultColor,
            },
        },
        [aliases.patternSpeed]: 1,
        [aliases.colorCycleSpeed]: 1,
        [aliases.patternDuration]: 10,
        [aliases.synchronized]: aliases.true
    }
}

export const patterns = {
    "Solid Color": getDefaultPattern("solidColor"),
    "Pulsing Color": getDefaultPattern("pulsingColor"),
    "Spirals": getDefaultLargePattern("spirals"),
    "Stripes": getDefaultLargePattern("stripes"),
    "Multipole": getDefaultLargePattern("multipole"),
    "Confetti": getDefaultLargePattern("confetti"),
    "Linear Rainbow": getDefaultSmallPattern("linearRainbow"),
    "Vertical Rainbow": getDefaultSmallPattern("verticalRainbow"),
    "Vertical Wave": getDefaultLargePattern("verticalWave"),
    "Torch": getDefaultLargePattern("torch"),
    "BPM": getDefaultSmallPattern("bpm"),
    "Juggle": getDefaultSmallPattern("juggle"),
}