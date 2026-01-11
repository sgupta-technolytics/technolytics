import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, company, phone, message } = body;

    /* ================= VALIDATION ================= */
    if (!name || !email || !company || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    /* ================= TRANSPORTER ================= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    /* ================= EMAIL ================= */
    await transporter.sendMail({
      from: `"Technolytics Demo" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // where you receive the demo request
      replyTo: email, // reply directly to user
      subject: " New Demo Request – Technolytics",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2 style="color:#2563eb;">New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p style="font-size:12px;color:#555;">
            This request was submitted from the Technolytics website.
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("SEND DEMO ERROR:", error);

    return new Response(
      JSON.stringify({ success: false, message: "Email failed to send" }),
      { status: 500 }
    );
  }
}
