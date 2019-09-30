function handleUserInput() {
    const pluralNoun = document.getElementById('plural-noun');
    const plural = pluralNoun.value;
    const verbIng = document.getElementById('verb-ing');
    const verb1 = verbIng.value;
    const nounAnimal = document.getElementById('noun-animal');
    const noun1 = nounAnimal.value;
    const nounDoor = document.getElementById('noun-door');
    const noun2 = nounDoor.value;
    const pluralNoun2 = document.getElementById('pnoun');
    const noun3 = pluralNoun2.value;
    const bodyPart = document.getElementById('bodypart');
    const body = bodyPart.value;

    pluralNoun.textContent = plural;
    verbIng.textContent = verb1;
    nounAnimal.textContent = noun1;
    nounDoor.textContent = noun2;
    pluralNoun2.textContent = noun3;
    bodyPart.textContent = body;
    document.getElementById("story").textContent = "I was scared out of my " + plural + ". I could hear the wind " + verb1 + " and in the distance a " + noun1 + " was howling. I crossed the room, locked the " + noun2 + " and climbed into bed, pulling the " + noun3 + " over my " + body +".";
    
}

