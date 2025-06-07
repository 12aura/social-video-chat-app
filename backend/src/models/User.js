import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
    fullName:{
        type: String, 
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        minlength:6
    },
    bio:
    {
        type:String,
        default:"",
    },
    profilePic:
    {
        type:String,
        default:"",
    },
    nativeLanguage:
    {
        type:String,
        default:"",
    },
    learningLanguage:
    {
        type:String,
        default:"",
    },
    location:
    {
        type:String,
        default:"",
    },
    isOnboarded:
    {
        type:Boolean,
        default: false,
    },
    friends:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },
    ],
}, 
{timestamps:true});
//createdAt, updatedAt

//member since createdAt
userSchema.pre("save", async function(next)
{

    if(!this.isModified("password")) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

        next();
    }catch(error){
        next(error);
    }
    
});

userSchema.methods.matchPassword = async function(enteredPassword)
{
    const isPasswordCorrect = await bcrypt.compare(enteredPassword, this.password);
    return isPasswordCorrect;
};
const User = mongoose.model("User", userSchema);
//pre hook
//It is called as password hashing where we will just turn our password to some gibbrish unreadbale text or something 
//E.g. john@email.com 12345 => $%^&976%^


export default User;