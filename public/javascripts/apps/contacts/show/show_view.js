ContactManager.module("ContactsApp.Show", function(Show, ContactManager, 
Backbone, Marionette, $, _){
    // M ItemView
    Show.Contact = Marionette.ItemView.extend({ 
        template: "#contact-view",
        
        events: {
            "click a.js-list-contacts" : "listContactsClicked"
        },
    
        listContactsClicked: function(e) {
            e.preventDefault();
            ContactManager.trigger("contacts:list")
        }
    });
});