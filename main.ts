let teller = 0
input.onButtonPressed(Button.B, function () {
    teller = 0
    basic.showNumber(teller)
})
input.onGesture(Gesture.ThreeG, function () {
    teller += 1
    basic.showNumber(teller)
})
