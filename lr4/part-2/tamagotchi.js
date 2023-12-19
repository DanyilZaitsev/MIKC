export class Tamagotchi {
    constructor(name) {
        this.name = name;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}
