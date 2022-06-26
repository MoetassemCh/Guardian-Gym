const User = require('../user');
const jwt = require('jsonwebtoken');


//handle errors
const handleErrors = (err)=>{
 console.log(err.message, err.code);//err msg is from the schema and err code rlt to uniqueness property
 let errors ={email:'', password:''};


 //incorect email
 if(err.message === 'incorect email'){
   errors.email='this email is not registered';//when the login method is performed & we got 'incorect email' let the errors.message='this email is not registered'
 }

 //incorect password
 if(err.message === 'incorect password'){
    errors.password='password is incorect';//when the login method is performed & we got 'incorect email' let the errors.message='this email is not registered'
  }
 
 //doublicate error code
 if(err.code ===11000){
errors.email='this email is already registered';
return errors;
 }

 //validation errors
 if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties}) =>{//find the value of the errors
        errors[properties.path]=properties.message;//update the path (that can be the email or the pass)by the msg in the schemma 
    });
 }
 return errors;
}

//function to log in the user to the website by creating a token that was saved in the db
const maxAge=3 * 24 * 60 * 60;
const creatToken=(id)=>{
return jwt.sign({id},'it is secret', {// id:payload , it is secret:secret method , header:is autometically applied
    expiresIn:maxAge//in seconds
});
}
module.exports.signup_get= (req,res) =>{
    res.render('signup');//render rlt to js
}
module.exports.login_get= (req,res) =>{
    res.render('login');
}


module.exports.signup_post= async (req,res) =>{
    const {email, password}=req.body;
    //try to post a user in db , if it didnot ,catch the error
        try{
        const user = await User.create({email, password});//wait the user to create the reg then save it in user const
    //log in the user by the token that had been created

        const token= creatToken(user._id);
    //put the token in the cookie and send it as a res
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});//we multiplied maxage by 1000 since for a cookie it must be in ms
        res.status(201).json({user:user._id});//get the id user that has been saved in the db
}

    catch (err) {
     const errors=handleErrors(err);//to see in the console the mssgs in the schema
     res.status(400).json(errors);
    }
}


module.exports.login_post= async (req,res) =>{
    const{email, password}=req.body;
   try{
   const user = await User.login(email, password);
    const token= creatToken(user._id);
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000})
    res.status(200).json({email: email._id});
   }
   catch(err){
    const errors = handleErrors(err);
    res.status(400).json({errors});// errors in the log in method will be placed here
   }
}


//deleting the cookie having the token to log out , by replacing the present cookie by a cookie having empty value and maxage = 1 ms
module.exports.logout_get= (req, res) =>{
    res.cookie('jwt', '', {maxAge:1});
    res.redirect('/');//after loging out redirect the user to the home page
}