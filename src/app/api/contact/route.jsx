export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(request){
    try {
        const data = await request.json();
        const supabase = getSupabaseClient(); 
        const {
            name,email,phone,organization,service,message
        } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const { error } =await supabase.from("submission").insert([{
            name,
            email,
            phone,
            organization,
            service,
            message,
        }])

        if (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Database error" },
            { status: 500 }
        );
        }

        await sendContactEmail(data);

        return NextResponse.json(
            { success: true},
        );       
    }
    catch (error) {
        console.error("API Error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
