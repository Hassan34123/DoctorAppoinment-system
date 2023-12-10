import connectMongoDB from "@/lib/mongose";
import Topic from "@/models/schema";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,descdoctroid,splization,contentinfo} = await request.json();
          await connectMongoDB();
await Topic.create({name,descdoctroid,splization,contentinfo});
return NextResponse.json({message: 'Topic created successfully'},{status:201})
}
export async function GET(){
    await connectMongoDB();
    const topic = await Topic.find()
    return NextResponse.json({topic})
}
export async function DELETE(request){
 const id = await request.nextUrl.searchParams.get('id') 
    await connectMongoDB();
    await Topic.findOneAndDelete(id)
    return NextResponse.json({message:'Document Deleted'},{status: 200})
}