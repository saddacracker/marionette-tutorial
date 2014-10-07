ContactManager.module("Entities",function(Entities,ContactManager,
Backbone,Marionette,$,_){
    
    // Model defaults
    Entities.Contact = Backbone.Model.extend({
        defaults: {
            firstName: ""
        }
    });
    
    // Create a collection 
    // Do any sorting or magic before page load, here
    Entities.ContactCollection = Backbone.Collection.extend({
        model: Entities.Contact,
        // sort by multiple fields
        // if you just provide a field name, comparator uses sortBy
        // if you provide more than one parameter, comparator uses sort
        // this is sorted before it's displayed to the user
        comparator: function (contact) {
            return [contact.get("firstName"), contact.get("lastName")]
        }
    });
    
    // Initialize contacts / fetch
    var contacts;
    
    var initializeContacts = function(){ 
        contacts = new Entities.ContactCollection([
            {   id: 1, firstName: "Alice", lastName: "Arten",
                phoneNumber: "555-0184" },
            {   id: 2, firstName: "Bob", lastName: "Brigham",
                phoneNumber: "555-0163" },
            {   id: 3, firstName: "Charlie", lastName: "Campbell",
                phoneNumber: "555-0129" },
            {   id: 4, firstName: "Snoop", lastName: "Dogg",
                phoneNumber: "555-1234" }
        ]);
    };
    
    var API = {
        getContactEntities: function(){ 
            if(contacts === undefined){
                initializeContacts();
            }
            return contacts; 
        }
    };
    
    // Listen for a request from the controller
    ContactManager.reqres.setHandler("contact:entities", function(){ 
        return API.getContactEntities();
    });
        
});