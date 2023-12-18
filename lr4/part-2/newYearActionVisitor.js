import { Visitor } from './visitor.js';

export class NewYearActionVisitor extends Visitor {
    visit(tamagotchi) {
        alert(`${tamagotchi.name} is singing New Year songs and spreading holiday cheer!`);
    }
}
