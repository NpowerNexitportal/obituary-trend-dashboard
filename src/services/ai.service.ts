export class AIService {
  static async generateContent(prompt: string, type: 'SUMMARY' | 'NEWS' | 'BLOG' | 'SEO') {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.warn("OPENAI_API_KEY not found. Returning mock content.");
      return this.mockGeneration(type);
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error generating AI content:", error);
      return this.mockGeneration(type);
    }
  }

  private static mockGeneration(type: string) {
    return `[Mock AI ${type} Content]\nThis is a placeholder for the AI-generated ${type.toLowerCase()} content because no API key was provided.`;
  }

  static async rewriteObituary(name: string, details: string) {
    const prompt = `Rewrite the following obituary for ${name} in a respectful and SEO-optimized manner:\n\n${details}`;
    return this.generateContent(prompt, 'SUMMARY');
  }
}
