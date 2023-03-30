import { reactive } from "vue"

export const store = reactive({
    cardsList: [],
    userChoice: "All Cards",
    archetypeList: ["Alien", "Noble Knight", "Melodious", "Archfiend", "Elemental HERO", "Umi",
        "ABC", "@Ignister", "Unchained", "Gem-", "Rokket", "Abyss Actor"]
})