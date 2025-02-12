import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },

        description:{
            type:String,
            required:true,
            maxLength:500
        },
        image:{
            type:String,
            required:true
        },

        link:{
            type:String,
            required:true
        },
        
        language:{
            type:String,
            required:true
        }

    }
)

const Project = mongoose.model("Project", projectSchema);

export default Project;
