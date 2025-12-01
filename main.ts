let segundo_player = 0
input.onButtonPressed(Button.A, function () {
    segundo_player = 1
    basic.showIcon(IconNames.SmallSquare)
})
input.onGesture(Gesture.Shake, function () {
    let player = 0
    segundo_player = randint(1, 3)
    if (segundo_player == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (segundo_player == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    if (player == segundo_player) {
        basic.showString("EMPATE")
    } else if (player == 1 && segundo_player == 3) {
        basic.showString("GANADOR")
    } else if (player == 2 && segundo_player == 1) {
        basic.showString("GANADOR")
    } else if (player == 3 && segundo_player == 2) {
        basic.showString("GANADOR")
    } else {
        basic.showString("PERDEDOR")
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
