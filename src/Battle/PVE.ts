import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    player: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      while (this.player.lifePoints > 0
        && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
      if (this.player.lifePoints > 0) {
        return 1;
      } 
      return -1;
    });
    return super.fight();
  }
}

export default PVE;