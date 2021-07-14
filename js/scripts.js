// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Contact.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
    //user interface logic

$(document).ready(() => {
    $("form#new-contact").submit((event) => {
        event.preventDefault();

        let inputtedFirstName = $("input#new-first-name").val();
        let inputtedLastName = $("input#new-last-name").val();

        let newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $("span.first-name").text(newContact.firstName);
            $("span.last-name").text(newContact.lastName);
        });

    })
})