const { randomize } = require("./utils.js")

const createRivers = () => {
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}

const createMountains = () => {
    const mountains = Math.floor(Math.random() * 2) + 1
    return mauntains
}

const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}

const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}

const journeyMaker = () => {
    const journey = []

    const areas = {
        rivers: createRiver(),
        forests: createForest(),
        mountains: createMountain(),
        plains: createPlain()
    }

    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {
        journey.push("river")
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
        journey.push("forest")
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountain; mountainNumber++) {
        journey.push("mountain")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plain")
    }

    return randomize(journey)
}

module.exports = {
    createRivers, createForests,
    createMountains, createPlains
}