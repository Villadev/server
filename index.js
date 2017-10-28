
var express = require('express');
var app = express();
var dataService = require('./services/getDataService.js');
var adminClientsPolicies = require('./models/AdminClientsPolicies.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.send("server init");
});

var login = false;

app.get('/login', function(request, response){
    var user = request.param('user');
    var pass = request.param('pass');
    
    var result = {
        "status":"login realizado",
        "session":""
    };
    
    if(user == 'admin' && pass == '1234'){
        result.session = "session start";

        login = true;

        response.send(result);
    }
    else{
        result.session = "login failed";
        response.send(result);
    }
});

app.get('/logout', function(request, response){
    login = false;
});

//REST SERVICE

//Get user data filtered by user id
// /getUserById?id=a0ece5db-cd14-4f21-812f-966633e7be86
app.get('/getUserById', function (request, response) {
   if(login){
       var admin = new adminClientsPolicies(dataService.getClients(), dataService.getPolicies());

       var id = request.param('id');

       var result = admin.getUsersById(id);
       response.send(result);

   } else{
       response.send("No login")
   }
});

// /getUserById?name=Britney
app.get('/getUserByName', function (request, response) {
    if(login){
        var admin = new adminClientsPolicies(dataService.getClients(), dataService.getPolicies());

        var name = request.param('name');

        var result = admin.getUsersByName(name);
        response.send(result);

    } else{
        response.send("No login")
    }
});

// /getPoliciesLinkedUserName
app.get('/getPoliciesLinkedUserName', function (request, response) {
    if(login){
        var admin = new adminClientsPolicies(dataService.getClients(), dataService.getPolicies());

        var result = admin.getPoliciesLinkedUserName();
        response.send(result);

    } else{
        response.send("No login")
    }
});

app.get('/getUserLinkedPolicy', function (request, response) {
    if(login){
        var admin = new adminClientsPolicies(dataService.getClients(), dataService.getPolicies());

        var result = admin.getUserLinkedPolicy();
        response.send(result);

    } else{
        response.send("No login")
    }
});


app.get('/test', function(request, response){
    response.send("Test ok");
});

app.listen(app.get('port'), function() {
    dataService.loadData();
  console.log('Node app is running on port', app.get('port'));
});
