import characterData from "./data.js"
import Character from "./character.js"

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
	console.log("attack button is working")
}

