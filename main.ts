input.onButtonPressed(Button.A, function () {
    start = 1
})
input.onButtonPressed(Button.B, function () {
    start = 0
    pasi = 0
    basic.showNumber(pasi)
})
input.onGesture(Gesture.Shake, function () {
    if (start == 1) {
        if (input.acceleration(Dimension.Y) > 500) {
            pasi += 2
        } else {
            pasi += 1
        }
        basic.showNumber(pasi)
        if (pasi == 10) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
let start = 0
let pasi = 0
pasi = 0
start = 0
basic.showNumber(pasi)
