const mongoose = require('mongoose');
const { Schema } = mongoose;

const divisionSchema = new Schema({
    divisionName: { type: String, required: [true, 'DivisionName is required'] },
    classTeacher: { type: Schema.ObjectId, ref: 'Staff', required: [true, 'Class teacher is required'] }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

divisionSchema.virtual('students', {
    ref: 'Student',
    localField: '_id',
    foreignField: 'division',
    justOne: false
});

module.exports = mongoose.model('Division', divisionSchema);
