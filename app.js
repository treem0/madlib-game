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
    console.log(plural);
    console.log(verb1);
    console.log(noun1);
    console.log(noun2);
    console.log(noun3);
    console.log(body);
}