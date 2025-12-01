let segundo_player = 0
input.onButtonPressed(Button.A, function () {
    segundo_player = 1
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    segundo_player = 3
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    segundo_player = 2
    basic.showIcon(IconNames.Square)
})
basic.forever(function () {
	
})
