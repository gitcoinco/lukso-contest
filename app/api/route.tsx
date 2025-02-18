import { NextRequest, NextResponse } from 'next/server';

const data = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' },
];

export async function GET(request: NextRequest) {

    const week = request.nextUrl.searchParams.get('week');

    if (!week || week === "undefined") {
        return NextResponse.json({ "error": "please provide a week parameter" }, { status: 400 });
    }

    return NextResponse.json({ "cool": `coolio week: ${week}` }, { status: 200 });


}