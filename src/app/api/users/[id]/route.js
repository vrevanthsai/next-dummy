import { users } from "@/util/db";
import { NextResponse } from "next/server";
// single user - api data
export function GET(request, content) {
  // console.log(content.params.id)
  const userData = users.filter((u) => u.id == content.params.id);
  // console.log(userData)
  return NextResponse.json(
    userData.length == 0
      ? {
          success: false,
          result: "No Data Found",
        }
      : {
          success: true,
          result: userData[0], //send only object for single data,multiple=array
        },
    { status: 200 }
  );
}

// PUT METHOD(it needs dynamic value(params) to work)
export async function PUT(request, content) {
  let payload = await request.json(); // like req.body
  let userId = content.params.id;
  // console.log(payload , userId)
  // validation
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      {
        success: false,
        result: "required field not found",
      },
      { status: 400 }
    );
  }
  // put method used for adding new id field to req.body-data(yt)
  payload.id = userId;
  // console.log(payload)

  return NextResponse.json({
    success: true,
    message: "user data updated",
    result: payload,
  });
}

// DELETE METHOD
export function DELETE(request, content) {
  let id = content.params.id;
  if (id) {
    return NextResponse.json(
      { success: true, result: "User Deleted" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { success: false, result: "id not given" },
      { status: 400 }
    );
  }
}
