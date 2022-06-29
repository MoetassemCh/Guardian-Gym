const mongoose=require('mongoose');
const {isEmail}=require('validator');// isEmail is a preedefined function from the validator package
const bcrypt = require('bcrypt');//for hasshing a pass


const userSchema = new mongoose.Schema({
email:{
type:String,
required:[true,'please enter an email'],//first parameter is for the true case and the second is for the false case
unique:true,
lowercase:true,
validate:[isEmail, 'please enter a valid email']//called costum error messages
},
password:{
    type:String,
    required:[true,'please enter a password'],
    minlength:[6, 'minimum password length is 6 characters']
},
});

//fire a function after a user doc is added to db

//userSchema.post('save', function(doc, next){//post here means this function is firing save event occures
 //console.log('new user was created &saved', doc);
 //next();//for every middleware there should be a next function
//});


//fire  a function before a user is added to the db

//userSchema.pre('save', function(next){
    //console.log('user about to be created and saved', this);
   // next();
//});

//fire a function before the doc is saved in the db
userSchema.pre('save', async function(next){
const salt=await bcrypt.genSalt();
this.password=await bcrypt.hash(this.password, salt);
    next();
});

//create a login method
userSchema.statics.login = async function(email, password){/*the 2 parameters in the function is the ones loged in by the user,
find if an email exist in db and save it in user const*/
const user = await this.findOne({email});
if(user){
   const auth = await bcrypt.compare(password, user.password);//compare the pass entered and the one in the db
     if(auth){ //if password is correct
       return user;
     }
     throw Error('incorect password');
}
throw Error('incorect email');
}

//create a model to interact with the db 
const User=mongoose.model('user', userSchema);//user is the  singular name of the collection in the db
module.exports=User;