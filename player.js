let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function() {
    //Who attacks first
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    //player attacks
    console.log("player attacks");
    let playerAttack = function() {
      let calcBasedDamage;
      if (player.mana > 0) {
        calcBasedDamage = (player.mana * player.strength) / 1000;
      } else {
        calcBasedDamage = (player.agility * player.strength) / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      calcOutputDamage = calcBasedDamage + offsetDamage;
      //Number of hits
      let numberOfHits = Math.floor(
        (Math.random() * Math.floor(player.agility / 10)) / 2 + 1
      );
      let attackValue = [calcOutputDamage, numberOfHits];
      return attackValue;
    };

    //enemy attcks
    console.log("enemy attcks");
    let enemyAttack = function() {
      let calcBasedDamage;
      if (enemy.mana > 0) {
        calcBasedDamage = (enemy.mana * enemy.strength) / 1000;
      } else {
        calcBasedDamage = (enemy.agility * enemy.strength) / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      calcOutputDamage = calcBasedDamage + offsetDamage;
      //Number of hits
      let numberOfHits = Math.floor(
        (Math.random() * Math.floor(enemy.agility / 10)) / 2 + 1
      );
      let attackValue = [calcOutputDamage, numberOfHits];
      return attackValue;
    };
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");

    //initialtes attacks!!
    console.log("initialtes attacks!!");
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValue = playerAttack();
      let totalDamage = playerAttackValue[0] * playerAttackValue[1];
      enemy.health = enemy.health - totalDamage;
      console.log(enemy.health);
      alert(
        "You hit " +
          playerAttackValue[0] +
          " damage" +
          playerAttackValue[1] +
          " times! "
      );
      if (enemy.health <= 0) {
        alert("You win! Refresh the browser and play again!");
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        let enemyAttackValue = enemyAttack();
        let totalDamage = enemyAttackValue[0] * enemyAttackValue[1];
        player.health = player.health - totalDamage;
        console.log(player.health);
        alert(
          "Enemy hit " +
            enemyAttackValue[0] +
            " damage" +
            enemyAttackValue[1] +
            " times! "
        );
        if (player.health <= 0) {
          alert("You lose! Refresh the browser and play again!");
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
          getPlayerHealth.innerHTML = "Health: 0";
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    } else if (getPlayerSpeed < getEnemySpeed) {
      let enemyAttackValue = enemyAttack();
      let totalDamage = enemyAttackValue[0] * enemyAttackValue[1];
      player.health = player.health - totalDamage;
      alert(
        "Enemy hit " +
          enemyAttackValue[0] +
          " damage" +
          enemyAttackValue[1] +
          " times! "
      );
      if (player.health <= 0) {
        alert("You lose! Refresh the browser and play again!");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;
        let playerAttackValue = playerAttack();
        let totalDamage = playerAttackValue[0] * playerAttackValue[1];
        enemy.health = enemy.health - totalDamage;
        alert(
          "You hit " +
            playerAttackValue[0] +
            " damage" +
            playerAttackValue[1] +
            " times! "
        );
        if (enemy.health <= 0) {
          alert("You win! Refresh the browser and play again!");
          getPlayerHealth.innerHTML = "Health: " + player.health;
          getEnemyHealth.innerHTML = "Health: 0";
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }
  }
};
