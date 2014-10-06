ContactManager.module("ContactsApp.Show", function(Show, ContactManager, 
Backbone, Marionette, $, _){
    // M ItemView
    Show.Contact = Marionette.ItemView.extend({ 
        template: "#contact-view"
    });
});