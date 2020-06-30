const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Employee = new Schema({
    emp_Name: {
        type: String
    },
    emp_phone: {
        type: String
    },
    emp_email: {
        type: String
    },
    emp_dob: {
        type: Date
    }
});
module.exports = mongoose.model('Employee', Employee);