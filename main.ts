let duration = 0
let lowpulseoccupancy = 0
let timeframe = 0
basic.forever(function () {
    duration = pins.pulseIn(DigitalPin.P0, PulseValue.Low)
    lowpulseoccupancy = lowpulseoccupancy + duration
    if (timeframe > 1500) {
        timeframe = 0
        led.plotBarGraph(
        lowpulseoccupancy / 1500,
        2
        )
        soundExpression.giggle.play()
        lowpulseoccupancy = 0
    }
    timeframe += 1
})
