Connections = new Meteor.Collection('connections');

if (Meteor.isServer){
    Meteor.startup(function () {
        Connections._ensureIndex({ userId : 1 }, { unique : 1 });
    });
}


Connection = {
    set : function() {
        if (!Meteor.user())
            return;
            
        return Connections.insert({
            userId: Meteor.userId(),
            last_seen: +(new Date())   
        });
    },
    get : function() {
        return Connections.findOne({
            userId: Meteor.userId()
        });
    },
    update : function(host) {
        if (!Meteor.user())
            return;
            
        return Connections.update({
            userId : Meteor.userId(),
        }, {$set : {
            last_seen : +(new Date())
        }});
    }
}

