// app/api/chatbot/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Call your AI API here; for example, with OpenAI:
    const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await openAiResponse.json();

    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json({ reply: "Sorry, something went wrong." }, { status: 500 });
  }
}
