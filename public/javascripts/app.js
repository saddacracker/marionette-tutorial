var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: "#main-region"
});


// BB Model
ContactManager.Contact = Backbone.Model.extend({ 
    defaults: {
        firstName: ""
    }
});

// BB Collection
ContactManager.ContactCollection = Backbone.Collection.extend({ 
    model: ContactManager.Contact,
    // sort by multiple fields
    // if you just provide a field name, comparator uses sortBy
    // if you provide more than one parameter, comparator uses sort
    // this is sorted before it's displayed to the user
    comparator: function (contact) {
        return [contact.get("firstName"), contact.get("lastName")]
    }
});

// M ItemView
ContactManager.ContactItemView = Marionette.ItemView.extend({ 
    template: "#contact-list-item",
    tagName: "li",
    events: {
        "click span": "alertPhoneNumber",
    },

    alertPhoneNumber: function(){
        alert(this.model.escape("phoneNumber"));
    }
});

// M CollectionView
ContactManager.ContactsView = Marionette.CollectionView.extend({ 
    tagName: "ul",
    childView: ContactManager.ContactItemView 
});


ContactManager.on("start",function(){ 
    
    contacts = new ContactManager.ContactCollection([
        {
            firstName: "Victor",
            lastName: "Dole",
            phoneNumber: "555-0184"
        }, {
            firstName: "Charlie",
            lastName: "Campbell",
            phoneNumber: "555-0122"
        }, {
            firstName: "Phillip",
            lastName: "McCrevice",
            phoneNumber: "555-0129"
        }, {
            firstName: "Phillip",
            lastName: "McCrackin",
            phoneNumber: "555-0169"
        }, {
            firstName: "Phillip",
            lastName: "Andrikidis",
            phoneNumber: "555-3129"
        }, {
            firstName: "Charlie",
            lastName: "McCrevice",
            phoneNumber: "555-5729"
        }
    ]);
    
    // Marrionette collection view
    var contactsListView = new ContactManager.ContactsView({
        collection: contacts // BB collection
    });
    ContactManager.mainRegion.show(contactsListView);
});


ContactManager.start();