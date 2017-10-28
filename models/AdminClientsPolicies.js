/**
 * Created by AWS2-25 on 12/10/2017.
 */

"use strict";

module.exports = AdminClientsPolicies;

AdminClientsPolicies.prototype.constructor = AdminClientsPolicies;

function AdminClientsPolicies(_clients, _policies) {

    this.getUsersById = function (id) {
        var result = null;
        if(id != null) {
            for (var c in _clients) {
                if (_clients[c].getId() == id) {
                    this.getPoliciesClient(_clients[c]);
                    return _clients[c].getJson();
                }
            }
        }
        return result;
    };

    this.getUsersByName = function(){
        this.getUsersById = function (name) {
            var result = [];
            if(name != null) {
                for (var c in _clients) {
                    if (_clients[c].getName().indexOf(name) == -1) {
                        this.getPoliciesClient(_clients[c]);
                        console.log(result.length);
                        result.push(_clients[c].getJson());
                    }
                }
            }
            return result;
        };
    };

    this.getPoliciesLinkedUserName = function(){
        var result = [];

        for(var c in _clients){
            if(_clients[c].getRole() == 'admin')
                for(var p in _policies){
                    if(_policies[p].getClientId() == _clients[c].getId()){
                        _policies[p].setUserName(_clients[c].getName());
                        result.push(_policies[p].getJson());
                    }
                }
        }

        return result;
    };

    this.getUserLinkedPolicy = function(){
        var result = [];
        for (var c in _clients) {
            if(_clients[c].getRole()){
                this.getPoliciesClient(_clients[c]);
                result.push( _clients[c].getJson());
            }
        }

        return result;
    };

    this.getPoliciesByClientId = function (clientId) {
        var result = [];
        for(var p in _policies){
            if(_policies[p].getClientId() == clientId){
                result.push(_policies[p]);
            }
        }
        return result;
    };

    this.getPoliciesClient = function(client){
        client.setPolicies(this.getPoliciesByClientId(client.getId()));
    }
}