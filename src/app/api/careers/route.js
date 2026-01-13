import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, role, experience, message } = await req.json();

    if (!name || !email || !role || !experience) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Technolytics Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Career Application",
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "N/A"}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Career API Error:", error);
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
