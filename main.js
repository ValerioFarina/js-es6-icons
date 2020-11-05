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

    // we "print" (within the html element with id "container-icons") all the icons included in the array "icons"
    // each icon is printed together with its name
    // icons of different types are printed with different colors; icons of the same type will have the same color
    printIcons(icons, $('#container-icons'));

    // we select the option with id "select-all"
    // we set the value of this option equal to a string containing (as substrings) all the icon's types
    $('#select-all').val(iconTypes);

    // for each icon's type, we append to the html element with id "select-icons"
    // an option having as value (and as inner text) the current icon's type
    iconTypes.forEach((type) => {
        // we get a copy of the tag "option" placed inside the dive with id "template-option"
        const htmlOption = $('#template-option').children().clone()
        // we set the value of htmlOption equal to type
        htmlOption.val(type);
        // we set the inner text of htmlOption equal to type
        htmlOption.text(type);
        // we append htmlOption to the div with id "select-icons"
        $('#select-icons').append(htmlOption);
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
        // we "print" (within the html element with id "container-icons") all the icons included in the array "chosenIcons"
        // each icon is printed together with its name
        // icons of different types are printed with different colors; icons of the same type will have the same color
        printIcons(chosenIcons, $('#container-icons'));
    });




    // ***************************** My functions *****************************

    // this function takes as inputs an array of icons and an html element (in the form of a JQuery object)
    // the function "prints" all the icons within the html element
    // each icon is printed together with its name
    // icons of different types are printed with different colors; icons of the same type will have the same color
    function printIcons(arrayOfIcons, htmlElement) {
        // we loop through the array "icons"
        arrayOfIcons.forEach((icon) => {
            // for each icon, we pick all its properties using the destructuring assignment syntax
            const {family, prefix, name, type} = icon;
            // we use the family, the prefix and the name "to build" the font-awesome class corresponding to the icon
            const iconClass = `${family} ${prefix}${name}`;
            // we retrieve the index of the icon's type within the array "iconTypes"
            const typeIndex = iconTypes.indexOf(type);
            // according to the index, we set the icon's color
            const iconColor = colors[typeIndex];
            // we get a copy of the div with class "icon" placed inside the div with id "template-icon"
            const htmlIcon = $('#template-icon').children('.icon').clone();
            // we add to this copy the class "iconColor"
            htmlIcon.addClass(iconColor);
            // htmlIcon has an <i></i> tag as children; we add to this children the class "iconClass"
            htmlIcon.children('i').addClass(iconClass);
            // htmlIcon has a <p></p> tag as children; we add to this children the name of the icon as inner text
            htmlIcon.children('p').text(name);
            // we append htmlIcon to htmlElement
            htmlElement.append(htmlIcon)
        });
    };


});
