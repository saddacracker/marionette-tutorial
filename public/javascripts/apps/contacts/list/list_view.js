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
            this.trigger("contact:highlight", this.model);
        },
        
        deleteClicked: function(e){
            e.stopPropagation();            
            // Broadcast your request to teh controller / views shouldn't handle this logic
            this.trigger("contact:delete", this.model);
        },
        
        alertContents: function(e){
            var $item = $(e.target);
            alert($item.text());
        },
        
        // Override ItemView.remove()
        remove: function() {
            var self = this;
            this.$el.fadeOut(function(){
                // Basically calls the original remove function as if
                // we hadn't redefined it.  This way the original remove 
                // code will clean upo as necessary.
                Marionette.ItemView.prototype.remove.call(self);
            });
            
        }
    });

    // Marionette Composite View is a more powerful version 
    // of Collection View (has a template)
    List.Contacts = Marionette.CompositeView.extend({ 
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        childView: List.Contact,
        childViewContatiner: "tbody", // render child views in tbody
        
        // WAT? Magic corresponding method from child view
        onChildviewContactDelete: function(){
            this.$el.fadeOut(250, function() {
                $(this).fadeIn(250);
            });
        }
    });
});