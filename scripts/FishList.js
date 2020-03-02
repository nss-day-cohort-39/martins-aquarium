import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
import Fish from "./Fish.js";

const contentTarget = document.querySelector(".fishList")

const render = collection =>
    collection.forEach(fish => contentTarget.innerHTML += Fish(fish))

const FishList = () => {
    const fish = mostHolyFish().concat(soldierFish()).concat(nonHolyFish())
    render(fish)
}

export default FishList
