import mongoose from "mongoose"
import { invalidateCacheProps } from "../types/types.js"
import { myCache } from "../app.js"
import { Product } from "../models/product.js"
export const connectDb = ()=>{
mongoose.connect("mongodb://localhost:27017",{
    dbName:"Eccomercem24",
}).then(c=>{
    console.log(`DB Connect to ${c.connection.host}`)
}).catch(e=>{
    console.log(console.log(e))
})
}

export const invalidateCache =async ({product,order,admin}:invalidateCacheProps)=>{
if(product){
    const productKeys: string[] = [
        "latest-products",
        "categories",
        "all-products",
    ];
    //products id
    const products = await Product.find({}).select("_id");
    products.forEach(i=>{
       productKeys.push(`product-${i._id}`)
    })
    myCache.del(productKeys)
}if(order){

}if(admin){

}
}