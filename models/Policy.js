/**
 * Created by AWS2-25 on 12/10/2017.
 */
"use strict";

module.exports = Policy;

Policy.prototype.constructor = Policy;

function Policy(_id, _amountInsured, _email, _inceptionDate, _installmentPayment, _clientId){

    var _userName = "";

    this.getUserName = function(){
        return _userName;
    };

    this.setUserName = function(userName){
        _userName = userName;
    };

    this.getId = function () {
        return _id
    };

    this.getAmountInsured = function () {
        return _amountInsured;
    };

    this.getEmail = function () {
        return _email;
    };

    this.getInceptionDate = function () {
        return _inceptionDate;
    };

    this.getInstallmentPayment = function () {
        return _installmentPayment;
    };

    this.getClientId = function () {
        return _clientId;
    };

    this.getJson = function(){
        return {
            id: this.getId(),
            amountInsured: this.getAmountInsured(),
            email: this.getEmail(),
            inceptionDate: this.getInceptionDate(),
            installmentPayment: this.getInstallmentPayment(),
            clienId: this.getClientId(),
            userName: this.getUserName()
        }
    }
}