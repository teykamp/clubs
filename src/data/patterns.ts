function getDefaultSmallPattern(name: string, id: number) {
    return {
        id: id,
        name: name,
        displayName: name,
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
    }
}


function getDefaultPattern(name: string, id: number) {
    return {
        id: id,
        name: name,
        displayName: name,
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

function  getDefaultLargePattern(name: string, id: number) {
    return {
        id: id,
        name: name,
        displayName: name,
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
    "Solid Color": getDefaultPattern("Solid Color", getDate()),
    "Pulsing Color": getDefaultPattern("Pulsing Color", getDate()),
    "Multipole": getDefaultLargePattern("Multipole", getDate()),
    "Confetti": getDefaultLargePattern("Confetti", getDate()),
    "Linear Rainbow": getDefaultSmallPattern("Linear Rainbow", getDate()),
    "Vertical Rainbow": getDefaultSmallPattern("Vertical Rainbow", getDate()),
    "Vertical Wave": getDefaultLargePattern("Vertical Wave", getDate()),
    "Torch": getDefaultLargePattern("Torch", getDate()),
    "BPM": getDefaultSmallPattern("BPM", getDate()),
    "Juggle": getDefaultSmallPattern("Juggle", getDate()),
}
    
function getDate() {
    return Date.now()
}