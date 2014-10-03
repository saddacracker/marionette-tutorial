ContactManager.module("ContactsApp.List", function(List, ContactManager, 
Backbone, Marionette, $, _){
    // M ItemView
    List.Contact = Marionette.ItemView.extend({ 
        template: "#contact-list-item",
        tagName: "tr",
        
        // events
        events: {
            "click": "highlightName",
            "click td": "alertContents"
        },

        highlightName: function(e){
            // alert(this.model.escape("phoneNumber"));
            e.preventDefault();
            this.$el.toggleClass("warning");
        },
        
        alertContents: function(e){
            var $item = $(e.target);
            alert($item.text());
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