const { UserModels } = require("../../models/user");
const { hashString } = require("../../modules/hashFunction");

class AuthContollers {
 async register(req, res, next) {

    try {
        const { username, password, email, mobile } = req.body;
        const hash_password = hashString(password);
        const user = await UserModels.create({ username, email, password: hash_password, mobile })
        .catch(err =>{
            if (err?.code == 11000) {
                throw {status: 400, messages: "nam karbari ghbalan estefadeh shodeh ast "}
            }
        })
        return res.json(user)
    } catch (error) {
        next(error)
    }


  }
  login() {}
  resetPassword() {}
}

module.exports = {
  AuthContollers: new AuthContollers(),
};
