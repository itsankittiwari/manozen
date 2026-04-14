import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { sendContactEmail } from "@/lib/mailer";
import { Timestamp } from "firebase-admin/firestore";

export const runtime = "nodejs";

export async function POST(request){
    try {
        const data = await request.json();
        const {
            name,email,phone,organization,service,message
        } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Add document to Firestore "submissions" collection
        const docRef = await adminDb.collection("submissions").add({
            name,
            email,
            phone,
            organization,
            service,
            message,
            createdAt: Timestamp.now(),
        });

        console.log("Document written with ID: ", docRef.id);

        // Send email notification
        try {
            await sendContactEmail(data);
            console.log("Email sent successfully");
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            // Continue even if email fails - document is already saved
        }

        return NextResponse.json(
            { success: true, id: docRef.id },
        );       
    }
    catch (error) {
        console.error("Firestore Error:", error);
        return NextResponse.json(
            { error: "Database error" },
            { status: 500 }
        );
    }
}
