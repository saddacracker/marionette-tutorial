ContactManager.module("ContactsApp.List", function(List, ContactManager, 
Backbone, Marionette, $, _){
    // M ItemView
    List.Contact = Marionette.ItemView.extend({ 
        template: "#contact-list-item",
        tagName: "tr",
        
        // events
        events: {
            "click td": "alertPhoneNumber",
        },

        alertPhoneNumber: function(){
            alert(this.model.escape("phoneNumber"));
        }
    });

    // Marionette Composite View is a more powerful version of Collection View that has a template
    List.Contacts = Marionette.CompositeView.extend({ 
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        childView: List.Contact,
        childViewContatiner: "tbody" // render child views in tbody
    });
});