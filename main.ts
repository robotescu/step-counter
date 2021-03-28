input.onButtonPressed(Button.A, function () {
    start = 1
})
input.onButtonPressed(Button.B, function () {
    pasi = 0
    basic.showNumber(pasi)
})
input.onGesture(Gesture.Shake, function () {
    if (start == 1) {
        if (input.acceleration(Dimension.Strength) > 3000) {
            pasi += 2
        } else {
            pasi += 1
        }
        basic.showNumber(pasi)
        if (pasi == 100) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
let start = 0
let pasi = 0
pasi = 0
start = 0
basic.showNumber(pasi)
