import { NextResponse } from "next/server";

export  async function POST(request: any, res: any) {
    const body = await request.text()
    console.log(body)
    return NextResponse.json({ status: 200, message: 'Hello World' });
}


export function GET() {
    return NextResponse.json({ status: 200, message: 'Hello World' });
}