const {mongoose} = require('./../server/db/mongoose'),
      {ObjectID} = require('mongodb'),
      {Todo} = require('./../server/models/todo'),
      {User} = require('./../server/models/user');


const id = "5c792f514e9f7d1abf69a029a8";

console.log(id.length);
console.log(ObjectID.isValid(id));

// const user = new User({
//     name: 'hamad adel',
//     email: 'hamadwebdeveloper@gmail.com'
// });
//
// user.save().then( user => console.log(user), err => console.log(err) );

User.findById(id).then( (user) => {
  if (user === null)
      return console.log('User not found');
  console.log(user);
}).catch( err => {
  if (!ObjectID.isValid(id))
      return console.log('Not Valid ID');
})
