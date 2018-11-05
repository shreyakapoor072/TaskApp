const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    user_email:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    }
})

UserSchema.statics.authenticate = function (email, password, callback) {
    this.findOne({ user_email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        if(password === user.user_password) {
            return callback(null, user);
          } else {
            var err = new Error('password wrong');
            return callback(err);
          }
      });
    }

module.exports =  mongoose.model('User',UserSchema);