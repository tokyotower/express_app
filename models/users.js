var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
        required: [true, 'Let us know you by adding your name!']
    },
    email: {
        required: [true, 'Please add your email as well.']
    }
});
var User = mongoose.model("User", UserSchema);
module.exports = User;

const user_resource = new User({
    name: 'John Doe',
    email: 'john@doe.com'
})

user_resource.save((error) => {
    if (error)
        console.log(error);
    res.send({
        success: true,
        code: 200,
        msg: "User added!"
    })
})

User.find({}, 'name email', function (error, users) {
    if (error) { console.error(error); }
    res.send({
        users: users
    })
})

User.findById(1, 'name email', function (error, user) {
    if (error) { console.error(error); }
    user.name = 'Peter'
    user.email = 'peter@gmail.com'
    user.save(function (error) {
        if (error) {
            console.log(error)
        } res.send({
            success: true
        })
    })
})

User.findOneAndUpdate({ name: 'Peter' }, { $set: { name: "Sara" } },
    function (err) {
        if (err) {
            console.log(err);
        }
    });

User.findByIdAndUpdate(1, { $set: { name: "Sara" } }, function (err) {
    if (err, user) {
        console.log(err);
    }
    res.send(user);
});

User.remove({
    _id: 1
}, function (err) {
    if (err)
        res.send(err)
    res.send({
        success: true
    })
})

User.findOneAndRemove({
    _id: 1
}, function (err) {
    if (err)
        res.send(err)
    res.send({
        success: true
    })
})


User.findOneAndRemove({
    _id: 1
}, function (err, user) {
    if (err)
        res.send(err)
    res.send({
        success: true,
        user: user
    })
})

User.findByIdAndRemove(1, function (err) {
    if (err)
        res.send(err)
    res.send({
        success: true
    })
})

