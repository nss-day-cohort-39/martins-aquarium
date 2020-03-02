import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
import Fish from "./Fish.js";

const contentTarget = document.querySelector(".fishList")

const renderFish = collection => {
    for (const fishObject of collection) {
        contentTarget.innerHTML += Fish(fishObject)
    }
}

const FishList = () => {
    let holyFish = mostHolyFish()
    renderFish(holyFish)

    let soldiers = soldierFish()
    renderFish(soldiers)

    let plebs = nonHolyFish()
    renderFish(plebs)
}

export default FishList
