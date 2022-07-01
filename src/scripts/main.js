console.log("Welcome to the main module")
import {createPlan} from './plan.js'
import {createAsparagus} from './seeds/asparagus.js'
import {createCorn} from './seeds/corn.js'
import {createPotato} from './seeds/potato.js'
import {createSoybean} from './seeds/soybean.js'
import {createSunflower} from './seeds/sunflower.js'
import {createWheat} from './seeds/wheat.js'

let yearlyPlan = createPlan()
console.log(yearlyPlan)

let asparagusPlant = createAsparagus()
let cornPlant = createCorn()
let potatoPlant = createPotato()
let soybeanPlant = createSoybean()
let sunflowerPlant = createSunflower()
let wheatPlant = createWheat()
console.log(asparagusPlant)
console.log(cornPlant)
console.log(potatoPlant)
console.log(soybeanPlant)
console.log(sunflowerPlant)
console.log(wheatPlant)