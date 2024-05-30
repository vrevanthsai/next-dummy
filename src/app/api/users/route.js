import { users } from "@/util/db";
import { NextResponse } from "next/server";
// GET METHOD API
export function GET(){
    const data = users
    return NextResponse.json(data,{ status:200 })
}

// POST METHOD API
export async function POST(request){
    let payload = await request.json();
    // console.log(payload)
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({
            success:false,
            result:"required field not found"
        },{status:400})
    }
    return NextResponse.json({
        success:true,
        result:"new user created",
        data:payload
    })
}