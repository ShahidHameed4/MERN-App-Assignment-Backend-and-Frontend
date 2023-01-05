import mongoose from 'mongoose';
import { Schema } from 'mongoose';
mongoose.connect('mongodb://localhost:27017/assignment');

const AssignmentSchema = new Schema({
    title: {type:String, required: true},
    instruction: {type:String},
    dueDate: {type:Date, required: true},
    course: {type:String, required: true},
    points: {type:Number, required: true},
    topic: {type: String, required: true}
}, {timestamps: true});

export default mongoose.model('Assignment', AssignmentSchema);
