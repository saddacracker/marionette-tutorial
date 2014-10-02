ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
    // M ItemView
    List.Contact = Marionette.ItemView.extend({ 
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
    List.Contacts = Marionette.CollectionView.extend({ 
        tagName: "ul",
        childView: List.Contact
    });
});