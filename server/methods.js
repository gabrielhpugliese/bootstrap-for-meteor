
Meteor.methods({
    keepalive : function() {
        if (!Connection.get()){
            Connection.set();
        } else {
            Connection.update();
        }
    },
});