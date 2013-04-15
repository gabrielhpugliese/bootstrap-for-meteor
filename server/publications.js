CONNECTIONS_CLEANUP = 10;


Meteor.publish('Connections', function() {
    return Connections.find({}, {fields: {user_id: 1}});
});


Meteor.setInterval(function(){
    var now = +(new Date());
    Connections.find({last_seen: { $lt: now - CONNECTIONS_CLEANUP }}).forEach(function(conn){
        Connections.remove(conn['_id']);
    });
}, CONNECTIONS_CLEANUP * 1000);