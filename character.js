import characterData from "./data.js";
import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js";


class Character {
  constructor(data) {
    Object.assign(this, data);

    this.maxHealth = this.health;

    console.log(this.maxHealth);

    this.getHealthBarHtml = function () {
      const percent = getPercentage(this.health, this.maxHealth);

      return `
	  <div class="health-bar-outer">
	  		<div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
		  	style="width: ${percent}%;">
	  		</div>
  		</div>`;
    };

    this.diceArray = getDicePlaceholderHtml(this.diceCount).join(" ");

    this.getDiceHtml = function () {
      this.currentDiceScore = getDiceRollArray(this.diceCount);
      this.diceArray = this.currentDiceScore
        .map((num) => `<div class="dice">${num}</div>`)
        .join("");
    };

    this.takeDamage = function (attackScoreArray) {
      const totalAttackScore = attackScoreArray.reduce(
        (total, num) => total + num
      );
      this.health -= totalAttackScore;
      if (this.health <= 0) {
        this.health = 0;
        this.alive = false;
      }
    };

    this.getCharacterHtml = function () {
      const { elementId, name, avatar, health, diceCount, diceArray } = this;
      const healthBar = this.getHealthBarHtml();
      this.diceArray = this.getDiceHtml(diceCount);
      return `
	<div class="character-card">
	<h4 class="name">${name}</h4>
	<img class="avatar" src="${avatar}"/>
	<p class="health">health: <b>${health} </b></p>
	${healthBar}
	<div class="dice-container">
	
	${diceArray}
	
	</div>
	</div>
	`;
    };
  }
}



export default Character;
