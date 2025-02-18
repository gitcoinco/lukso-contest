
import { NextRequest, NextResponse } from 'next/server';

const request = require('request')
const csv = require('csvtojson')

const data = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' },
];

export async function GET(req: NextRequest) {

    const level = req.nextUrl.searchParams.get('level');

    if (!level || level === "undefined") {
        return NextResponse.json({ "error": "please provide a level parameter" }, { status: 400 });
    }

    const jsonArray = await csv().fromStream(request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRxSPB3HP9zCiD7gOWuzDiGX1fWLAWEvm8Dyj1tVQ34KjgFGxLW0jGxZXH89ItBH99lAkHt08yu-uHY/pub?gid=0&single=true&output=csv'));

    const levelFiltered = jsonArray.filter((item: any) => item.level == level);

    return NextResponse.json(
        {
            "level": `${level}`,
            "data": jsonArray
        }
        , { status: 200 });


}