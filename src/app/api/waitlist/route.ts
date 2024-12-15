import { NextResponse } from "next/server";
import pool from "@/utils/db";

export async function POST(req: Request) {
    const { name, email, type } = await req.json();

    try {
        const query = "INSERT INTO waitlist (name, email, type) VALUES ($1, $2, $3)";
        const values = [name, email, type];
        await pool.query(query, values);

        return NextResponse.json({ success: true });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
        console.error("Error inserting into database:", errorMessage);
        return NextResponse.json({ success: false, error: errorMessage });
    }
}

export async function GET() {
    try {
        const { rows } = await pool.query("SELECT COUNT(*) AS count FROM waitlist");
        const count = parseInt(rows[0].count, 10);
        return NextResponse.json({ count });
    } catch (error) {
        console.error("Error fetching waitlist count:", error);
        return NextResponse.json({ count: 0 });
    }
}
