import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user)
            return res.status(401).json({ message: "User not registered OR Token malfunctioned" });
        // grab chats of user
        const chats = user.chats.map(({ role, content }) => ({
            role: role,
            content,
        }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        // send all chats to new one with open ai API
        const openai = configureOpenAI();
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: chats,
        });
        user.chats.push(chatResponse.choices[0].message);
        await user.save();
        return res.status(200).json({
            // message: chatResponse.choices[0].message.content,
            chats: user.chats,
        });
    }
    catch (error) {
        console.error("Error generating chat completion:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};
//# sourceMappingURL=chat-controllers.js.map