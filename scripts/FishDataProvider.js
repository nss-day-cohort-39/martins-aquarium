/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Betty",
        species: "Longtooth Barracuda",
        location: "Cumberland River",
        length: "2 ft",
        food: ["Squid"]
    },
    {
        name: "Bart",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "Crustaceans"]
    },
    {
        length: "2 in",
        species: "Clownfish",
        food: ["Plankton"],
        location: "Great Barrier Reef",
        name: "Nemo"
    },
    {
        name: "Dory",
        species: "Blue Tang",
        location: "New Zealand Sea",
        length: "4 in",
        food: ["Clownfish"]
    }
]

export const useFish = () => {
    return fishCollection.slice()
}
