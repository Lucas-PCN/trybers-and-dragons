import Race from './Race';

class Halfling extends Race {
  static raceInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.raceInstances += 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.raceInstances;
  }
}

export default Halfling;