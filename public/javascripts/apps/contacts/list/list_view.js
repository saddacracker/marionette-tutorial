ContactManager.module("ContactsApp.List", function(List, ContactManager, 
Backbone, Marionette, $, _){
    // M ItemView
    List.Contact = Marionette.ItemView.extend({ 
        template: "#contact-list-item",
        tagName: "tr",
        
        // Listeners
        events: {
            "click": "highlightName",
            "click button.js-delete": "deleteClicked",
            "click td a.js-show": "showClicked"
        },
        
        // Events Handlers
        highlightName: function(e){
            this.$el.toggleClass("warning");
            this.trigger("contact:highlight", this.model);
        },
        showClicked: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("contact:show", this.model);
        },
        deleteClicked: function(e){
            e.stopPropagation();            
            // Broadcast your request to teh controller / views shouldn't handle this logic
            this.trigger("contact:delete", this.model);
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
        
        // WAT? A magic method?
        onChildviewContactDelete: function(){
            // this.$el.fadeOut(250, function() {
            //     $(this).fadeIn(250);
            // });
        }
    });
});