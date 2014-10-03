var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: "#main-region"
});

ContactManager.on("start",function(){ 
    // Start the app  
    ContactManager.ContactsApp.List.Controller.listContacts();
});