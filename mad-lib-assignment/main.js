// Event Listener
document.getElementById('madlib-btn').addEventListener('click', displayMessage)

//Event Function
function displayMessage() {

    //Input
    let verbEndingIng = document.getElementById('ing').value;
    let pluralNoun = document.getElementById('plr-noun').value;
    let adjective = document.getElementById('adj').value;
    let presentTenseVerb = document.getElementById('ptv').value;
    let noun = document.getElementById('noun').value;

    // Build a Message
    let message = '"There are too many ' +  verbEndingIng  + ' ' + pluralNoun  + ' on this ' + adjective + ' airplane!" I screamed. "Somebody has to' + 
    presentTenseVerb + ' on the ' + noun + ' to solve this problem!"'

    //Output
    document.getElementById('output').innerHTML = message;

}