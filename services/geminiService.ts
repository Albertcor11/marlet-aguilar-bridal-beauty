import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `Eres un asistente virtual amigable y profesional para MARLET AGUILAR, una maquillista experta en novias en Oaxaca. Tu objetivo es ayudar a las usuarias a conocer sus servicios, agendar citas y resolver dudas.
- Los servicios principales son: Maquillaje para Novias, Cursos de Automaquillaje y Asesorías de Belleza.
- Para agendar, siempre debes dirigir a las usuarias a contactar por WhatsApp o Instagram. No puedes agendar por aquí.
- Sé siempre amable, positiva y utiliza un lenguaje cálido y elegante.
- Responde en español.`;

export const askGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    return "Lo siento, estoy teniendo problemas para conectarme en este momento. Por favor, intenta de nuevo más tarde.";
  }
};