import { mostHolyFish, soldierFish, nonHolyFish, useFish } from "./FishDataProvider.js";
import Fish from "./Fish.js";

const contentTarget = document.querySelector(".fishList")

const render = fish => contentTarget.innerHTML += fish.map(Fish).join("")

const FishList = () => {
    // Render fish that are evenly divisible by 3
    const holy = mostHolyFish()
    render(holy)

    // Render fish that are evenly divisible by 5
    const soldiers = soldierFish()
    render(soldiers)

    // Render all other fish
    const plebs = nonHolyFish()
    render(plebs)
}

export default FishList
