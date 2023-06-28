function getDefaultSmallPattern(name: string) {
    return {
        displayName: name,
        sparkleColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        flashColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        patternSpeed: 0,
    }
}


function getDefaultPattern(name: string) {
    return {
        displayName: name,
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
        }],
        bodyColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        ringColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        sparkleColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        flashColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        patternSpeed: 0,
        colorCycleSpeed: 0,
    }
}

function  getDefaultLargePattern(name: string) {
    return {
        displayName: name,
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
            }],
        bodyColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        ringColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        sparkleColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        flashColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
        patternSpeed: 0,
        colorCycleSpeed: 0,
        secondaryColor: {
            on: false,
            speed: 0,
            duration: 0,
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
            }],
        },
    }
}



export const patterns = {
    "Solid Color": getDefaultPattern("Solid Color"),
    "Pulsing Color": getDefaultPattern("Pulsing Color"),
    "Multipole": getDefaultLargePattern("Multipole"),
    "Confetti": getDefaultLargePattern("Confetti"),
    "Linear Rainbow": getDefaultSmallPattern("Linear rainbow"),
    "Vertical Rainbow": getDefaultSmallPattern("Vertical Rainbow"),
    "Vertical Wave": getDefaultLargePattern("Vertical Wave"),
    "Torch": getDefaultLargePattern("Torch"),
    "BPM": getDefaultSmallPattern("BPM"),
    "Juggle": getDefaultSmallPattern("Juggle"),
}
    
