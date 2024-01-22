const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    const apiUrl=process.env.API_URL;
    axios.get(`${apiUrl}/api/users`)
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    const apiUrl=process.env.API_URL;
    axios.get(`${apiUrl}/api/users`)
        .then(function(response){
            res.render('add_user', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_user = (req, res) =>{
    const apiUrl=process.env.API_URL;
    axios.get(`${apiUrl}/api/users`, { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}