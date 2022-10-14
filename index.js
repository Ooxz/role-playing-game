import characterData from "./data.js"
import Character from "./character.js"

let monstersArray = ["orc", "demon", "goblin"]

function getNewMonster() {
	const nextMonsterData = characterData[monstersArray.shift()]
	console.log(nextMonsterData)
}

getNewMonster()

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
	document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
	document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

render()

document.getElementById("attack-button").addEventListener("click", attack)

function attack() {
	wizard.getDiceHtml()
	orc.getDiceHtml()
	wizard.takeDamage(orc.currentDiceScore)
	orc.takeDamage(wizard.currentDiceScore)
	render()
	if(orc.alive === false || wizard.alive === false) {
		endGame()
	}
}

console.log(orc.alive)
function endGame() {
	const endMessage = orc.health > 0 ? "The Orc is victorious"
	: wizard.health > 0 ? "The Wizard is victorious"
	: "They are both dead"

	const endEmoji = orc.health > 0 ?"☠️"
	: wizard.health > 0 ? "🔮"
	: "😱"

	document.body.innerHTML = `<div class="end-game">
	<h2>Game Over</h2>
	<h3>${endMessage}</h3>
	<p class="end-emoji">${endEmoji}</p>
</div>` 
	

	console.log(endMessage)
	orc.alive = true
	wizard.alive = true
	orc.health = characterData.monster.health
	wizard.health = characterData.hero.health
	console.log("The game is over")
}
