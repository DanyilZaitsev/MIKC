import { Tamagotchi } from './tamagotchi.js';
import { NewYearActionVisitor } from './newYearActionVisitor.js';
import { SeasonalActionPack } from './seasonalActionPack.js';

let currentTamagotchi = new Tamagotchi("My Tamagotchi");
let newYearPack = new SeasonalActionPack(new NewYearActionVisitor());

function performBaseAction() {
    alert(`${currentTamagotchi.name} is performing a base action!`);
}

function buyNewYearPack() {
    newYearPack.applySeasonalAction(currentTamagotchi);
}
