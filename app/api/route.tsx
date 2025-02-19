
import { NextRequest, NextResponse } from 'next/server';

const request = require('request')
const csv = require('csvtojson')

// const dataSource = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS8FPlRaTzyqE4eUJ7baYb0lnaDFn1kWTZDE_rNrPB2OxrXD2RF7sVxB1I2zgJm9ADgdY0hgXnwTzHO/pub?gid=0&single=true&output=csv"
const dataSource = "https://docs.google.com/spreadsheets/d/182KXGIFIbMBD5lMqXH-n81tiSIvDVB9VL_brq1qhH_s/gviz/tq?tqx=out:csv&sheet=KPI"

export async function GET(req: NextRequest) {

    const level = req.nextUrl.searchParams.get('level');

    if (!level || level === "undefined") {
        return NextResponse.json({ "error": "please provide a level parameter" }, { status: 400 });
    }

    const jsonArray = await csv().fromStream(request.get(dataSource));

    const levelFiltered = jsonArray.filter((item: any) => item['Level'] == level);

    return NextResponse.json(
        {
            "level": `${level}`,
            "data": levelFiltered,
            "lastUpdated": new Date().toISOString()
        }
        , { status: 200 });
}