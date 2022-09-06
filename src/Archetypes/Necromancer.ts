import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.archetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeInstances;
  }
}

export default Necromancer;