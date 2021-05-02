let duration = 0
let lowpulseoccupancy = 0
let timeframe = 0
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    duration = pins.pulseIn(DigitalPin.P0, PulseValue.Low)
    lowpulseoccupancy = lowpulseoccupancy + duration
    if (timeframe > 1300) {
        timeframe = 0
        basic.showNumber(Math.trunc(lowpulseoccupancy / 300000))
        basic.showIcon(IconNames.SmallDiamond)
        lowpulseoccupancy = 0
    }
    timeframe += 1
})
