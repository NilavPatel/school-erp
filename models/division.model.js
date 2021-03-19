const mongoose = require('mongoose');
const { Schema } = mongoose;

const DivisionSchema = new Schema({
    divisionName: { type: String, required: [true, 'DivisionName is required'] },
    classTeacher: { type: Schema.ObjectId, ref: 'Staff', required: [true, 'Class teacher is required'] }
}, { timestamps: true });

module.exports = mongoose.model('Division', DivisionSchema);
