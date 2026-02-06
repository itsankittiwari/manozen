import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendContactEmail } from "@/lib/mailer";

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
        const docRef = await addDoc(collection(db, "submissions"), {
            name,
            email,
            phone,
            organization,
            service,
            message,
            createdAt: serverTimestamp(),
        });

        console.log("Document written with ID: ", docRef.id);

        await sendContactEmail(data);

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
