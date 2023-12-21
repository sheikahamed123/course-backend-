const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb+srv://sheikahamed134:sheikahamed@cluster0.1ef0y19.mongodb.net/Udemy?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        length:8
    },
},
{
    timestamps: true,
      });

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        length:8
    },
    purchasedCourses: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'Course',
        },
      ],
   
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseId:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    imageLink:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}