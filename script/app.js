{
    let $ = document.querySelector.bind(document),
        button = $('#calc-button'),
        totalLandsNode = $('#total-lands'),
        manaNode = Array.from(document.querySelectorAll('input[type=number]'));

    button.addEventListener('click', () => {

        let mana = manaNode.map(node => parseInt(node.value)),
            totalCards = mana.reduce((a, b) => a + b, 0),
            totalMana = mana
            .map((mana, index) => mana * (index + 1))
            .reduce((a, b) => a + b, 0),
            totalLands = parseInt((totalMana / totalCards) * 10);

        console.log(`Total of cards: ${totalCards}`);
        console.log(`Total of Mana: ${totalMana}`);
        totalLandsNode.textContent = totalLands;
    });
}
