const ValidationCode = require('./../../models/ValidationCode');
module.exports = async function (userName, destination,code) { 
    const query = { "userName": userName, "email":destination,"code":code};
    let validateCode = await ValidationCode.findOne(query);
    if(validateCode) {
        ValidationCode.deleteOne(query, function(err, obj) {});
        return true;
    }else{
        return false;
    }
};

