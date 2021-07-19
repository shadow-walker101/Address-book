// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}


Address.prototype.fullAddress = function() {
        return this.street + ", " + this.city + this.county;
    }
    //user interface logic
function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-county").val("");
}
$(document).ready(() => {

    $("#add-address").click(() => {
        $("#new-addresses").append('<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            '<input type="text" class="form-control new-street">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control new-city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-county">County</label>' +
            '<input type="text" class="form-control new-county">' +
            '</div>' +
            '</div>');
    });

    // What happens when we submit the form
    $("form#new-contact").submit((event) => {
        event.preventDefault();

        let inputtedFirstName = $("input#new-first-name").val();
        let inputtedLastName = $("input#new-last-name").val();

        let newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");

        $(".new-address").each(function() {
            let inputtedStreet = $(this).find("input.new-street").val();
            let inputtedCity = $(this).find("input.new-city").val();
            var inputtedCounty = $(this).find("input.new-county").val();
            var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
            newContact.addresses.push(newAddress);
        });


        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $("span.first-name").text(newContact.firstName);
            $("span.last-name").text(newContact.lastName);

            $("ul#addresses").text("");
            newContact.addresses.forEach((address) => {
                $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
            });
        });

        resetFields();

    });
})