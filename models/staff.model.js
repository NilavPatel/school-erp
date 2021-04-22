const mongoose = require('mongoose');
const { Schema } = mongoose;

const staffSchema = new Schema({
    emailId: {
        type: String,
        required: [true, 'EmailId is required'],
        unique: true,
        trim: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    firstName: { type: String, required: [true, 'FirstName is required'] },
    middleName: { type: String, required: [true, 'MiddleName is required'] },
    lastName: { type: String, required: [true, 'LastName is required'] },
    birthDate: { type: Date, required: [true, 'BirthDate is required'] },
    bloodGroup: { type: String },
    phoneNumber1: { type: String, required: [true, 'PhoneNumber1 is required'] },
    phoneNumber2: { type: String },
    addressLine1: { type: String, required: [true, 'AddressLine1 is required'] },
    addressLine2: { type: String },
    landmark: { type: String },
    city: { type: String, required: [true, 'City is required'] },
    pincode: { type: String, required: [true, 'Pincode is required'] },
    state: { type: String, required: [true, 'State is required'] },
    country: { type: String, required: [true, 'Country is required'] },
    designation: {
        type: String,
        enum: ['Teacher', 'Principal', 'Admin'],
        default: 'Teacher',
        required: [true, 'Designation is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Staff', staffSchema);
