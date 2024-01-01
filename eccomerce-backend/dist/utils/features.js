import mongoose from "mongoose";
export const connectDb = () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Eccomercem24",
    }).then(c => {
        console.log(`DB Connect to ${c.connection.host}`);
    }).catch(e => {
        console.log(console.log(e));
    });
};
