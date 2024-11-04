const { roundup } = require("./cattle.js")
const { hireDrovers } = require("./drovers.js")
const { journeyMaker } = require("./journey.js")

const cattleToDrive = 50
const drovers = hireDrovers(cattleToDrive)
const cattle = roundup(cattleToDrive)
const journey = journeyMaker()

console.log(`
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\\|/         (__)
     '\------(oo)
       ||   (__)               \\|/
       ||w--||     \\|/
   \\|/
            \\|/                     (__)
                             '\------(oo)
                               ||   (__)
                               ||w--||     \\|/
`)

console.log(`You will be accompanying ${drovers.length} drovers as they drive ${cattleToDrive} cattle to Old Red's Ranch for grazing`)
console.log(`\nThe herd is made of up the following cattle (only their breed is shown):`)
console.log(`${cattle}\n`)

console.log("Here is the team of drovers you will be joining")
for (const drover of drovers) {
    console.log(`\t* ${drover.first_name} ${drover.last_name}`)
}

console.log("\n\nYour journey will take you through the wildness of the American Midwest and across the following terrain")
for (const area of journey) {
    console.log(`\t* ${area}`)
}
