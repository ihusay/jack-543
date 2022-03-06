let 是否发射 = 0
let 距离 = 0
input.onPinPressed(TouchPin.P0, function () {
    if (是否发射 == 1) {
        是否发射 = 0
    } else {
        是否发射 = 1
    }
})
basic.forever(function () {
    if (是否发射 == 1) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.playTone(233, music.beat(BeatFraction.Sixteenth))
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        basic.pause(200)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.playTone(370, music.beat(BeatFraction.Sixteenth))
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        basic.pause(200)
    }
})
basic.forever(function () {
    if (距离 <= 100) {
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (cbit_小车类.Ultrasonic_Car() > 0) {
        距离 = cbit_小车类.Ultrasonic_Car()
    } else {
        距离 = 1000
    }
    basic.pause(200)
})
