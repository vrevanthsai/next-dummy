import { NextResponse } from "next/server"

// it is used for multiple api routes
export async function GET(request,content){
    // console.log(content)
    const studentDetails = content.params.student
    // console.log(studentDetails)
    return NextResponse.json({
        data:studentDetails
    },{status:200})
}