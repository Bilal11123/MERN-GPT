import { OpenAI } from "openai";
export const configureOpenAI = () => {
    return new OpenAI({
        apiKey: process.env.OPEN_AI_SECRET, // Ensure API key is in environment variables
        organization: process.env.OPEN_AI_ORGANIZATION_ID,
    });
};
//# sourceMappingURL=openai-config.js.map