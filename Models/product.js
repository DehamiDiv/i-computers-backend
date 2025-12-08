import mongoose, { Schema } from "mongoose";
const productSchema = new mongoose.Schema(
    {
        productId : {
            type : String,
            required : true,
            unique : true
        },
        name : {
            type : String,
            required :true
        },
        description : {
            type : String,
            required : true
        },
        altNames : {
            type : [String],
            default : []
        },
        price : {
            type :Number,
            required : true
        },
        
         labelPrice : {
            type : Number
        },
        category : {
            type : String,
            default : "Others"
        },
        images : {
            type : [String],
            default : []
        },
        isVisible : {
            type : Boolean,
            default : true,
            required : true
        },
        brand : {
            type : String,
            default : "Generic"
        },
        model  : {
            type : String,
            default : "Standard"
        }

    }
)

const Product = mongoose.model("Product",productSchema)

export default Product;