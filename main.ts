let delais = 60
let abs = 0
let ordo = 0
for (let ordo = 0; ordo <= 4; ordo++) {
    for (let abs = 0; abs <= 4; abs++) {
        led.plot(abs, ordo)
        basic.pause(delais)
        led.unplot(abs, ordo)
    }
}
abs = 4
ordo = 4
for (let ordo = 0; ordo <= 4; ordo++) {
    for (let abs = 0; abs <= 4; abs++) {
        led.plot(4 - abs, 4 - ordo)
        basic.pause(delais)
        led.unplot(4 - abs, 4 - ordo)
    }
}
basic.forever(function () {
	
})
