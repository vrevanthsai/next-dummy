import { connectionString } from "@/lib/connect";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// GET METHOD WITH MONGODB ATLAS
export async function GET() {
  // console.log(connectionString)
  try {
    await mongoose.connect(connectionString); //db connection
    const data = await Product.find({}); //opertion-GET(ALL products)
    return NextResponse.json(
      {
        // GET-API
        success: true,
        result: data,
      },
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      {
        success: false,
        result: "internal/connection error",
        error,
      },
      { status: 400 }
    );
  }
}

// POST METHOD WITH MONGODB ATLAS
export async function POST(request) {
  try {
    await mongoose.connect(connectionString);
    // manual/static data
    // let product = new Product({
    //     name:"Note 10",
    //     price:"30000",
    //     color:"red",
    //     company:"apple",
    //     category:"mobile"
    // })

    //data from postman/FE(dynamic-data)
    let payload = await request.json();
    // validation
    if(!payload.name || !payload.price || !payload.company || !payload.color || !payload.category){
        return NextResponse.json({
            success:false,
            result:"required field not found,fill all fields"
        },{status:400})
    }
    let product = new Product(payload);

    const result = await product.save();
    return NextResponse.json(
      {
        // POST-API
        success: true,
        msg: "product created",
        result,
      },
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      {
        success: false,
        result: "internal/connection error",
        error,
      },
      { status: 400 }
    );
  }
}
