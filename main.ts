let start = 0
let pasi = 0
basic.showNumber(pasi)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    start = 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    pasi = 0
    basic.showNumber(pasi)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    if (start == 1) {
        pasi = pasi + 1
        basic.showNumber(pasi)
        if (pasi == 100) {
            basic.showIcon(IconNames.Happy)
        }
        
    }
    
})
