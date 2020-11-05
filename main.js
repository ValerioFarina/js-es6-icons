/*  Milestone 1: definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
                 Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.  */

/*  Milestone 2: definire un array di colori e associare ad ogni tipo di icona un colore.
                 Visualizzare le icone di colore diverso in base al tipo.  */

/*  Milestone 3: aggiungere una select per filtrare le icone in base al tipo.
                 Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.  */

$(document).ready(function() {

    // we create an array of objects
    // each object represents an icon
    // each icon has a name, a prefix, a type and a family
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];

    // we create an array of colors
    const colors = ['red', 'green', 'blue'];

    // we create an array containing all our icons' types
    // each type occurs only once within the array
    const iconTypes = [];
    icons.forEach((icon) => {
        if (!iconTypes.includes(icon.type)) {
            iconTypes.push(icon.type);
        }
    });

    // we loop through the array "icons"
    icons.forEach((icon) => {
        // for each icon, we pick all its properties using the destructuring assignment syntax
        const {family, prefix, name, type} = icon;
        // we use the family, the prefix and the name "to build" the font-awesome class corresponding to the icon
        const iconClass = `${family} ${prefix}${name}`;
        // we retrieve the index of the icon's type within the array "iconTypes"
        const typeIndex = iconTypes.indexOf(type);
        // according to the index, we set the icon's color
        const iconColor = colors[typeIndex];
        // we display each icon (with the corresponding name and color) in the html page
        $('#container-icons').append(`
            <div class="icon ${iconColor}">
                <i class="${iconClass}"></i>
                <p>${name}</p>
            </div>
        `);
    });

    // we select the option with id "select-all"
    // we set the value of this option equal to a string containing (as substrings) all the icon's types
    $('#select-all').val(iconTypes);

    // for each icon's type, we append to the html element with id "select-icons"
    // an option having as value (and as inner text) the current icons' type
    iconTypes.forEach((type) => {
        $('#select-icons').append(`
            <option value="${type}">${type}</option>
        `);
    });

    // we catch the event of value-change that involves the html element with id "select-icons"
    $('#select-icons').change(() => {
        // we remove all the icons
        $('#container-icons').empty();
        // we retrieve the value of the html element with id "select-icons"
        // this value corresponds to the icon's type that has been chosen by the user
        const chosenType = $('#select-icons').val();
        // according to the chosen type, we filter the array of icons
        const chosenIcons = icons.filter((icon) => chosenType.includes(icon.type));
        // we loop through the array "chosenIcons"
        chosenIcons.forEach((icon) => {
            // for each icon, we pick all its properties using the destructuring assignment syntax
            const {family, prefix, name, type} = icon;
            // we use the family, the prefix and the name "to build" the font-awesome class corresponding to the icon
            const iconClass = `${family} ${prefix}${name}`;
            // we retrieve the index of the icon's type within the array "iconTypes"
            const typeIndex = iconTypes.indexOf(type);
            // according to the index, we set the icon's color
            const iconColor = colors[typeIndex];
            // we display each icon (with the corresponding name and color) in the html page
            $('#container-icons').append(`
                <div class="icon ${iconColor}">
                    <i class="${iconClass}"></i>
                    <p>${name}</p>
                </div>
            `);
        });
    });


});
