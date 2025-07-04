import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Initialize Google AI with API key
const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
})

const religionPrompts = {
  hindu: `आप एक आध्यात्मिक गुरु हैं जो हिंदू धर्म और संस्कृति के अनुसार मार्गदर्शन देते हैं। 
  आप हिंदी में जवाब देते हैं और भगवद गीता, उपनिषद, और वेदों के ज्ञान का उपयोग करते हैं। 
  आपके उत्तर शांतिपूर्ण, प्रेरणादायक और आध्यात्मिक होते हैं। संक्षिप्त और स्पष्ट उत्तर दें।`,

  muslim: `आप एक इस्लामिक विद्वान हैं जो कुरान और हदीस के अनुसार मार्गदर्शन देते हैं। 
  आप हिंदी में जवाब देते हैं और इस्लामी शिक्षाओं के अनुसार सलाह देते हैं। 
  आपके उत्तर दयालु, ज्ञानपूर्ण और शांतिपूर्ण होते हैं। संक्षिप्त और स्पष्ट उत्तर दें।`,

  sikh: `आप एक सिख गुरु हैं जो गुरु ग्रंथ साहिब और गुरुओं की शिक्षाओं के अनुसार मार्गदर्शन देते हैं। 
  आप हिंदी और पंजाबी मिश्रित भाषा में जवाब देते हैं। 
  आपके उत्तर सेवा, समानता और भाईचारे पर आधारित होते हैं। संक्षिप्त और स्पष्ट उत्तर दें।`,

  christian: `You are a Christian spiritual guide who provides guidance based on the Bible and Christian teachings. 
  You respond in English with compassion, love, and wisdom. 
  Your answers are peaceful, encouraging, and based on Christian values of love, forgiveness, and faith. Keep responses concise and clear.`,
}

export async function POST(req: Request) {
  try {
    const { messages, religionContext } = await req.json()

    // Validate API key
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      console.error("Missing GEMINI API KEY")
      return new Response(
        JSON.stringify({
          error: "API key not configured. Please set NEXT_PUBLIC_GEMINI_API_KEY",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const systemPrompt = religionPrompts[religionContext as keyof typeof religionPrompts] || religionPrompts.hindu

    console.log("Processing chat request:", { religionContext, messageCount: messages.length })

    const result = streamText({
      model: google("gemini-1.5-flash"),
      system: systemPrompt,
      messages,
      temperature: 0.7,
      maxTokens: 300,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API Error:", error)

    // Return a fallback response if API fails
    const fallbackResponses = {
      hindu: "🙏 क्षमा करें, अभी तकनीकी समस्या है। कृपया थोड़ी देर बाद पुनः प्रयास करें। ॐ शांति।",
      muslim: "🤲 माफ करें, अभी तकनीकी दिक्कत है। कृपया बाद में कोशिश करें। अल्लाह आपको शांति दे।",
      sikh: "🙏 माफ करना जी, अभी तकनीकी समस्या है। थोड़ी देर बाद कोशिश करें। वाहेगुरु।",
      christian: "🙏 Sorry, there's a technical issue right now. Please try again later. God bless you.",
    }

    return new Response(
      JSON.stringify({
        error: "Service temporarily unavailable",
        fallback: fallbackResponses.hindu,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
