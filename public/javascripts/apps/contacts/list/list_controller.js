ContactManager.module("ContactsApp.List", function(List, ContactManager, 
Backbone, Marionette, $, _){
    
    
    List.Controller = {
        listContacts: function() {
            // Gets the contacts from the model/entity
            var contacts = ContactManager.request("contact:entities");
    
            // Create the List View (action)
            var contactsListView = new List.Contacts({
                collection: contacts
            });
            
            // Listen for stuff on the List View
            contactsListView.on("childview:contact:delete", function(childView, model){
                contacts.remove(model);
            });
            
            // Drop that shit into the region liek a boss
            ContactManager.mainRegion.show(contactsListView);
        }
    }
    
    
});