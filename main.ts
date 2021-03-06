let Pac_Man = game.createSprite(0, 2)
let Janaria = game.createSprite(4, 4)
let Mamua = game.createSprite(2, 2)
Mamua.set(LedSpriteProperty.Blink, 100)
Mamua.set(LedSpriteProperty.Brightness, 50)
Janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    basic.pause(200)
    basic.pause(200)
    if (input.acceleration(Dimension.X) > 200) {
        Pac_Man.move(1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < 200) {
        Pac_Man.move(-1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        Pac_Man.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) < 200) {
        Pac_Man.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (Pac_Man.isTouching(Janaria)) {
        soundExpression.spring.play()
        game.setScore(1)
        Janaria.delete()
        Janaria = game.createSprite(randint(0, 4), randint(0, 4))
        Janaria.set(LedSpriteProperty.Brightness, 10)
    }
    if (Pac_Man.isTouching(Mamua)) {
        soundExpression.twinkle.play()
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(500)
    Mamua.move(1)
    Mamua.ifOnEdgeBounce()
})
