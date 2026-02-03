import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, subject, message } = body;

        // Validate required fields
        if (!name || !phone || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Use Web3Forms API (free and easy to set up)
        const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!web3formsKey) {
            console.error("Web3Forms access key not configured");
            return NextResponse.json(
                { error: "Email service not configured" },
                { status: 500 }
            );
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: web3formsKey,
                subject: `Contact Form: ${subject}`,
                from_name: "Madugai Website",
                to: "info@madugai.com",
                name: name,
                phone: phone,
                message: message,
            }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json(
                { message: "Email sent successfully" },
                { status: 200 }
            );
        } else {
            console.error("Web3Forms error:", result);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
