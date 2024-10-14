import { NextRequest, NextResponse } from "next/server"
import * as services from "../services/userService"





export const GET = async (req: NextRequest) => {
    try {
        const url = new URL(req.url)
        const name = url.searchParams.get("name")||'';
        const city = url.searchParams.get("city")||'';
        const age = url.searchParams.get('age')||'';


        const filters = { name, city, age };
        const data = await services.getAll(filters);
        
        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: "Success get data",
            data
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        })
    }
}