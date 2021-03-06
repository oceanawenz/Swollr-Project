const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res, next) => {
        const { user_name, password, email } = req.body;
        console.log(req.body)
        const db = req.app.get('db');
        db.check_if_user_exists(email).then(foundUser => {
            console.log(user_name, "this is the user from check if user exists")
            if(foundUser.length) {
                // console.log(foundUser)
                res.status(200).send('User already exists!')
            } else {
                const saltRounds = 12;
                bcrypt.genSalt(saltRounds).then(salt => {
                    bcrypt.hash(password, salt).then(hashedPassword => {
                        db.register_user([user_name, hashedPassword, email]).then((createdUser) => {
                            req.session.user = createdUser[0]
                            // res.statusMessage = "Register Successful"
                            res.status(200).send(req.session.user)
                        })
                    })
                })
            }
        }).catch(err => {
            console.log(err)
        })
    },

    login: (req, res, next) => {
        const { email, password } = req.body;
        console.log(req.body);
        const db = req.app.get('db');
         //if the user attempts to login with username, but their username is not found
        db.check_if_user_exists(email).then((userFound) => {
             if(!userFound[0]) {
                 res.status(200).send('User does not exist')
             } else {
                 bcrypt.compare(password, userFound[0].password).then(matchedPassword => {
                     //if there is a matched password
                     if(matchedPassword) {
                         const {user_name, email, user_id } = userFound[0]
                         // send back the user_name email and user_id from userFound[0]
                         req.session.user = {user_name, email, user_id}
                         res.status(200).send(req.session.user);
                     } else {
                         res.status(200).send('Incorrect Password. Please try again')
                     }
                 })
             }
        }).catch(err => {
            console.log(err, 'login error')
        })
    },

    logout: (req, res, next) => {
       req.session.destroy();
       res.status(200).send("You have been logged out.")
    },

    userInfo: (req, res, next) => {
        console.log("user info hit")
        res.status(200).send(req.session.user)
        
    }
}


  

   
  