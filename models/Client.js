/**
 * Created by AWS2-25 on 12/10/2017.
 */

"use strict";

module.exports = Client;

Client.prototype.constructor = Client;

function Client(_id, _name, _email, _role ){

    var policies = [];

    this.getId = function () {
        return _id;
    };

    this.getName = function () {
        return _name;
    };

    this.getEmail = function () {
        return _email;
    };

    this.getRole = function () {
        return _role;
    };

    this.addPolicy = function (policy) {
        policies.push(policy);
    };

    this.setPolicies = function (policiesList) {
        policies = policiesList;
    };

    this.getPoliciesJson = function(){
        var pols = [];

        for(var i in policies){
            pols.push(policies[i].getJson());
        }
        return pols;
    };

    this.getJson = function () {
        return {
            id: _id,
            name: _name,
            email: _email,
            role: _role,
            policies: this.getPoliciesJson()
        }
    }
}