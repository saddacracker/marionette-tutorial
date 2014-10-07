ContactManager.module("ContactsApp.Show", function(Show, ContactManager, 
Backbone, Marionette, $, _){
    
    
    Show.Controller = {
        showContact: function(id) {
            var contacts = ContactManager.request("contact:entities");
            var model = contacts.get(id);
            // Instantiate teh conatct view
            var contactView = new Show.Contact({
               model: model 
            });
            
            // load it 
            ContactManager.mainRegion.show(contactView);
        }
    }
    
    
});