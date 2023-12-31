function getDefaultSmallPattern(name: string, id: number, patternName: string) {
    return {
        id: id,
        name: name,
        displayName: name,
        patternName: patternName,
        sparkleColor: {
            name: "Sparkle Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }]},
        flashColor: {
            name: "Flash Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }],
        },
        patternSpeed: 0,
        synchronized: true
    }
}


function getDefaultPattern(name: string, id: number, patternName: string) {
    return {
        id: id,
        name: name,
        displayName: name,
        patternName: patternName,
        linkColors: true,
        color: {
            name: "Color",
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }]},
        sparkleColor: {
            name: "Sparkle Color",
            on: false,
            speed: 0,
            intensity: 0,
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }],
        },
        flashColor: {
            name: "Flash Color",
            on: false,
            speed: 0,
            dutyCycle: 0,
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }],
        },
        patternSpeed: 0,
        colorCycleSpeed: 5,
    }
}

function  getDefaultLargePattern(name: string, id: number, patternName: string) {
    return {
        id: id,
        name: name,
        displayName: name,
        patternName: patternName,
        color: {
            name: "Color",
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }]},
        sparkleColor: {
            name: "Sparkle Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }],
        },
        flashColor: {
            name: "Flash Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }],
        },
        patternSpeed: 0,
        colorCycleSpeed: 5,
        secondaryColor: {
            name: "Secondary Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [{
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            },
            {
                "h": 0,
                "s": 0,
                "l": 0
            }],
        },
    }
}



export const patterns = {
    "Solid Color": getDefaultPattern("Solid Color", getDate(), "solidColor"),
    "Pulsing Color": getDefaultPattern("Pulsing Color", getDate(), "pulsingColor"),
    "Multipole": getDefaultLargePattern("Multipole", getDate(), "multipole"),
    "Confetti": getDefaultLargePattern("Confetti", getDate(), "confetti"),
    "Linear Rainbow": getDefaultSmallPattern("Linear Rainbow", getDate(), "linearRainbow"),
    "Vertical Rainbow": getDefaultSmallPattern("Vertical Rainbow", getDate(), "verticalRainbow"),
    "Vertical Wave": getDefaultLargePattern("Vertical Wave", getDate(), "verticalWave"),
    "Torch": getDefaultLargePattern("Torch", getDate(), "torch"),
    "BPM": getDefaultSmallPattern("BPM", getDate(), "bpm"),
    "Juggle": getDefaultSmallPattern("Juggle", getDate(), "juggle"),
}
    
function getDate() {
    return Date.now()
}