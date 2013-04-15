
KEEPALIVE_INTERVAL = 5;

Meteor.startup(function(){
});

Accounts.ui.config({
    requestPermissions: {
    }
});

Meteor.setInterval(function(){
    Meteor.call('keepalive');
}, KEEPALIVE_INTERVAL * 1000);

