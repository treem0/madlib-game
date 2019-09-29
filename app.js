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
    pluralNoun2.textContent = nound3;
    bodyPart.textContent = body;
    

}