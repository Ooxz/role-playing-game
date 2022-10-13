import characterData from "./data.js";
import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);

	this.takeDamage = function(attackScoreArray){
		console.log(`${this.name} ${attackScoreArray}`)
	}

    this.diceArray = getDicePlaceholderHtml(this.diceCount).join(" ");
	
    this.getDiceHtml = function (diceCount) {
      this.currentDiceScore = getDiceRollArray(this.diceCount)
	  this.diceArray = this.currentDiceScore.map(function (num) {
		return `<div class="dice">${num}</div>`
	  }).join('')
    };
	
    this.getCharacterHtml = function () {
      const { elementId, name, avatar, health, diceCount, diceArray } = this;
      this.diceArray = this.getDiceHtml(diceCount);
      return `
	<div class="character-card">
	<h4 class="name">${name}</h4>
	<img class="avatar" src="${avatar}"/>
	<p class="health">health: <b>${health} </b></p>
	<div class="dice-container">
	${diceArray}
	</div>
	</div>
	`;
    };
  }
}

export default Character;
