// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

//user interface logic

$(document).ready(() => {
    $("form#new-contact").submit((event) => {
        event.preventDefault();

        let inputtedFirstName = $("input#new-first-name").val();
        let inputtedLastName = $("input#new-last-name").val();

        let newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class = 'contact'>" + newContact.firstName + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    })
})