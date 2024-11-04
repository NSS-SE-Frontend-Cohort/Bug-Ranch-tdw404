const randomize = (array) => {
    return array.sort(() => Math.random() - 0.5)
}

module.exports = { randomize }
