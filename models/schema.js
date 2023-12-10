import mongoose , {Schema} from "mongoose";

const userSchema = new Schema ({
name : String,
doctorid : String,
specialization : String,
contactinfo: String,
})
 const Topic = mongoose.models.Topic || mongoose.model('Topic', userSchema);
 export default Topic;