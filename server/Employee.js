const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    salary: {
        type: Number,
        required: true
    }
},{timestamps: true});

mongoose.model("Employee", employeeSchema);
