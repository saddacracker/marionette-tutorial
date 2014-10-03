ContactManager.module("ContactsApp.List", function(List, ContactManager, 
Backbone, Marionette, $, _){
    // M ItemView
    List.Contact = Marionette.ItemView.extend({ 
        template: "#contact-list-item",
        tagName: "tr",
        
        // Listeners
        events: {
            "click": "highlightName",
            "click button.js-delete": "deleteClicked"
            // "click td": "alertContents"
        },
        
        // Events Handlers
        highlightName: function(e){
            // alert(this.model.escape("phoneNumber"));
            e.preventDefault();
            this.$el.toggleClass("warning");
        },
        
        deleteClicked: function(e){
            e.stopPropagation();
            // alert("some shit was deleted. psych");
            
            // Broadcast your request to teh controller / views shouldn't handle this logic
            this.trigger("contact:delete", this.model);
            // alert(this.model.id);
        },
        
        alertContents: function(e){
            var $item = $(e.target);
            alert($item.text());
        }
    });

    // Marionette Composite View is a more powerful version 
    // of Collection View (has a template)
    List.Contacts = Marionette.CompositeView.extend({ 
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        childView: List.Contact,
        childViewContatiner: "tbody" // render child views in tbody
    });
});