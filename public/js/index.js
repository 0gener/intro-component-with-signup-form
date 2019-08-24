ready(() => {
    addEvent('.form form', 'submit', (event, element) => {
        event.preventDefault();
        
        var mandatory_elements = element.querySelectorAll('.inp.mandatory');

        mandatory_elements.forEach(element => {
            validate(element);
        });
    });

    addEvent('.inp', 'click', (event, element) => {
        var input = element.getElementsByTagName("input")[0];
        input.focus();
    });

    addEvent('.inp.mandatory', 'focusout', (event, element) => {
        validate(element);
    });
});

function validate(element){
    var input = element.getElementsByTagName("input")[0];

    if(!input.value){
        element.classList.add('invalid');
    }
    else{
        element.classList.remove('invalid');
    }
}