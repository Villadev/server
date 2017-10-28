/**
 * Created by AWS2-25 on 12/10/2017.
 */
"use strict";

var http = require('requestify');
var Client = require('../models/Client');
var Policy = require('../models/Policy');
module.exports = new DataService();

DataService.prototype.constructor = DataService;

function DataService(){

    var policies = [];
    var clients = [];


    this.getPolicies = function(){
        return policies;
    };

    this.getClients = function(){
        return clients;
    };

    this.loadData = function () {
        this.getDataClients();
        this.getDataPolicies();
    };

    this.getDataClients = function(){
        http.get('http://www.mocky.io/v2/5808862710000087232b75ac').then(function(res){
            if(res != null && res.getBody() != null && res.getBody().clients != null){

                for(var i in res.getBody().clients){
                    var cli = res.getBody().clients[i];
                    clients.push(new Client(cli.id, cli.name, cli.email, cli.role));
                }
            }
        }).catch(function(error){
            console.log(error);
        });
    };

    this.getDataPolicies = function(){
        http.get('http://www.mocky.io/v2/580891a4100000e8242b75c5').then(function(res){
            if(res != null && res.getBody() != null && res.getBody().policies != null){
                for(var i in res.getBody().policies){
                    var pol = res.getBody().policies[i];
                    policies.push(new Policy(pol.id, pol.amountInsured, pol.email, pol.inceptionDate, pol.installmentPayment, pol.clientId));
                }
            }
        }).catch(function(error){
            console.log(error);
        });
    };
}

