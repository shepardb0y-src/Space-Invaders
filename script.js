class Spaceship {
  constructor(hull, firepower, accuracy, alive) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.alive = true;
  }
}
////////human chlild constructor/////
class Enterprise extends Spaceship {
  constructor(hull, firepower, accuracy, alive) {
    super(hull, firepower, accuracy, alive);
  }
  attack() {
    return attackSequence;
  }
}
const usHello = new Enterprise(20, 5, 0.6, true);
const user = [usHello];

///////alien  constructor/////
class AlienFLeet extends Spaceship {
  constructor(hull, firepower, accuracy, alive) {
    super(hull, firepower, accuracy, alive);
  }
}

const game = {
  alienOneReady: false,
  alienFleet: [],
  createAlien: function (params) {
    if (!this.alienOneReady) {
      //alien creation
      for (let i = 0; i < 7; i++) {
        this.alienFleet.push(
          new AlienFLeet(alienHealth(), alienAttack(), alienAccuracy())
        );
      }
      //   console.log(this.alienFleet);
      //   console.log(usHello.accuracy);
      //battle phase

      for (let i = 0; i < this.alienFleet.length; i++) {
        if (usHello.accuracy >= Math.random()) {
          this.alienFleet[i].hull = this.alienFleet[i].hull - usHello.firepower;
          console.log(this.alienFleet[i].hull + "Alien health  user hit");
          //   this.alienFleet.alive = false;
          console.log(this.alienFleet.alive);
          alieattackSequencefleet(user);
          console.log(this.alienFleet[i].hull);
        }
        //still alive
        else if (this.alienFleet[i].hull <= 0 && this.alienFleet.alive) {
          console.log(this.alienFleet[i] + "second"); //dead alien
          // } else if (
          //   this.alienFleet[i].hull >= 0 &&
          //   this.alienFleet[i].hull < 6
          // ) {
          console.log("Cant stop me third");
        } else {
          console.log("miss");
        }
      }
    }
  },
};

function alieattackSequencefleet(enemy) {
  let random = Math.random();
  for (let i = 0; i < enemy.length; i++) {
    // console.log(enemy[i].accuracy);
    // console.log(random);
    if (random < usHello.accuracy && game.alienFleet[i].hull > 0) {
      ////isolates dead alien
      enemy[i].hull = enemy[i].hull - game.alienFleet[i].firepower;
      //  game.createAlien(usHello); this meets the condition of if the alien survives but makes an infinite loop of creating aliens aas well
      console.log(`  still alive alien hit  user ${enemy[i].hull} `);
    } else if (random < usHello.accuracy && game.alienFleet.alive) {
      game.alienFleet.alive = true;
      enemy[i].hull = enemy[i].hull - game.alienFleet[i].firepower;
    } else {
      //   console.log("miss");
      console.log(` ${enemy[i].hull} user health allien dead `);
    }
  }
}

function alienHealth() {
  let random = Math.floor(Math.random() * 4);
  this.hull = 0;
  if (random === 0) {
    this.hull = 3;
    return this.hull;
    console.log("alien health is 3");
  } else if (random === 1) {
    this.hull = 4;
    return this.hull;
    console.log("alien health is 4");
  } else if (random === 2) {
    this.hull = 5;
    return this.hull;
    console.log(" alien health is 5");
  } else {
    this.hull = 6;
    return this.hull;
    console.log("alien health is 6");
  }
}

function alienAttack() {
  let random = Math.floor(Math.random() * 3);
  let firepower = 0;
  if (random === 0) {
    firepower = 4;
    return firepower;
    console.log(" alien firepower is 4");
  } else if (random === 1) {
    firepower = 2;
    return firepower;
    console.log(" alien firepower is 2");
  } else {
    firepower = 3;
    return firepower;
    console.log("alien firepower is 3");
  }
}
function alienAccuracy() {
  let random = Math.floor(Math.random() * 3);
  let accuracy = 0;
  if (random === 0) {
    accuracy = 0.6;
    return accuracy;
    console.log("alien accuracy is .6");
  } else if (random === 1) {
    accuracy = 0.7;
    return accuracy;
    console.log("alien accuracy is .7");
  } else {
    accuracy = 0.8;
    return accuracy;
    console.log(" alien accuracy is .8");
  }
}

console.log(game.createAlien(usHello));
