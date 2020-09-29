let GPA = 0
input.onPinPressed(TouchPin.P0, function () {
    GPA = randint(80, 100)
    basic.showNumber(GPA)
    if (GPA <= 84) {
        basic.showString("A-")
    } else if (GPA <= 89) {
        basic.showString("A")
    } else if (GPA <= 100) {
        basic.showString("A+")
    }
})
