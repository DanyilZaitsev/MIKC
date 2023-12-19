export class SeasonalActionPack {
    constructor(visitor) {
        this.visitor = visitor;
    }

    applySeasonalAction(tamagotchi) {
        tamagotchi.accept(this.visitor);
    }
}
