import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id}=params;
    const {newTitle: title, newDescription: description}= request.json();
    await connectMongoDb();
    await topic.findByIdAndUpdate(id,{title, description});
    return NextResponse.json({message: "Topic Update"},{status:200});

}
export async function Get(request,{params}){
    const {id}=params;
    await connectMongoDb();
    const topic=await Topic.findOne({_id: id});
    return NextResponse.json({topic},{status:200});
}