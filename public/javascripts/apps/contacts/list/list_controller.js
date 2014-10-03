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
            // 
            // Arguments: <childView>, <parameters>
            contactsListView.on("childview:contact:delete", function(childView, model){
                // alert("childView reference: " + childView.template + " argument passed: " + model.id)
                contacts.remove(model);
            });
            
            contactsListView.on("childview:contact:highlight", function(childView, model){
                console.log(model.attributes.firstName);
            });
            
            // Drop that shit into the region liek a boss
            ContactManager.mainRegion.show(contactsListView);
        }
    }
    
    
});