input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
radio.setGroup(1)
radio.setTransmitPower(7)
