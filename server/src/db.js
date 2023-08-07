import mongoose from "mongoose";


export const connectDB =  async () =>{
   try {
      await mongoose.connect("mongodb+srv://Enmanuel-TG:Enmanuel.TG.1517@cluster0.occrysb.mongodb.net/?retryWrites=true&w=majority");
      console.log("DB connect successfully")
   } catch (err) {
      console.log(err)
   }
}

