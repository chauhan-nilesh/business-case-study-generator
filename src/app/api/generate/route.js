import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SECTIONS = [
  'Overview',
  'History & Origin',
  'Business Model',
  'Revenue & Valuation',
  'Marketing Strategy',
  'Growth Strategy',
  'Challenges / Controversies',
  'Key Learnings',
  'Recent News Summary',
];

export async function POST(req) {
  try {
    const { company } = await req.json();

    if (!company) {
      return NextResponse.json({ error: 'Company name is required' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `You are a business analyst AI. Return ONLY valid JSON. Generate a structured business report on "${company}" with the following sections as keys: ${SECTIONS.join(', ')}. Each section should be concise, clear, and based on trends until end of 2024. Return ONLY a valid JSON object without any markdown or explanation.`;

    const result = await model.generateContent(prompt);

    if(!result || !result.response || !result.response.text) {
      throw new Error('Failed to generate content');
    }

    let text = result.response.text().replace(/```(json)?/g, '').trim();

    const data = JSON.parse(text);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error generating report:', error);
    return NextResponse.json(
      { error: 'Failed to generate business report', details: error?.message || error.toString() },
      { status: 500 }
    );
  }
}
