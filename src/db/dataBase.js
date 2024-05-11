import mongoose from "mongoose";
// import "dotenv/config";

mongoose.connect("mongodb+srv://duzzyn:S50L08iADWi4g47P@duzzyn.z6obubb.mongodb.net/?retryWrites=true&w=majority&appName=duzzyn");

let db = mongoose.connection;

export default db;