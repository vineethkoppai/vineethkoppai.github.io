define(
[
'backbone' ,
'views/page'
],

function( 
Backbone,
PageView 
) {


Router = Backbone.Router.extend({

    routes: {
        ""              : "home",
        "home"          : "homePage",
        "aboutUs"       : "showAboutUs",
        "services"      : "showServices",
        "infrastructure": "showInfrastructure",
        "contactUs"     : "showContactUs"
    },

    initialize: function () {
      console.log("initialize router");
      this.app = new PageView();      
    },

    home: function () {
        this.app.showHome();
    }
});

return Router;

});

