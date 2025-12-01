let segundo_player = 0
input.onButtonPressed(Button.A, function () {
    segundo_player = 1
    basic.showIcon(IconNames.SmallSquare)
})
input.onGesture(Gesture.Shake, function () {
    segundo_player = randint(1, 3)
    if (segundo_player == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (segundo_player == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    segundo_player = 3
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    segundo_player = 2
    basic.showIcon(IconNames.Square)
})
