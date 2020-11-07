import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Snack = new Schema(
    {


        name : {
            type : String,
            required: true,
        },

        price: {
            type : Number,
            required: true,
        },
    },
    {
        varsionkey: false
    }
);

export default mongoose.model(`Snack`, Snack, `Snack`);