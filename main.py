start = 0
pasi = 0
basic.show_number(pasi)

def on_button_pressed_a():
    global start
    start = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global pasi
    pasi = 0
    basic.show_number(pasi)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global pasi
    if start == 1:
        pasi = pasi + 1
        basic.show_number(pasi)
        if pasi == 100:
            basic.show_icon(IconNames.HAPPY)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
