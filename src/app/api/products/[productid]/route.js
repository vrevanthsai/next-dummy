import { connectionString } from "@/lib/connect";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  // console.log(content.params)
  try {
    // DB CONNECTION
    await mongoose.connect(connectionString);

    // PUT OPERATION
    const pid = content.params.productid;
    const payload = await request.json();
     // validation
     if(!payload.name || !payload.price || !payload.company || !payload.color || !payload.category){
      return NextResponse.json({
          success:false,
          result:"required field not found,fill all fields"
      },{status:400})
    }
    // console.log(payload , pid)
    let updatedProduct = await Product.findByIdAndUpdate(pid, payload, {
      new: true,
    });

    // PUT-API
    return NextResponse.json(
      {
        success: true,
        msg: "product updated",
        result: updatedProduct,
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

// GET API for single product details
export async function GET(request,content){
  try{
    await mongoose.connect(connectionString)
    const pid = content.params.productid
    const product = await Product.findById(pid);
     // PUT-API
     return NextResponse.json(
      {
        success: true,
        msg: "single product details",
        result: product,
      },
      { status: 200 }
    );
  }catch(error){
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

// DELETE API with pid
export async function DELETE(request,content){
  try{
    await mongoose.connect(connectionString)
    const pid = content.params.productid
    const product = await Product.findByIdAndDelete(pid)
     // delete-API
     return NextResponse.json(
      {
        success: true,
        msg: "product deleted",
        result: product,
      },
      { status: 200 }
    );
  }catch(error){
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