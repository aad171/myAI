import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}.

My goal is to help you and other young people navigate the complexities of the credit card world. You can ask me questions like "How do credit cards work?" or "Why is credit important?" and I'll do my best to explain these to you.

We can also address more specific inquiries, such as: "I am 22 years old, about to graduate college and start working with a salary of $100k in Chapel Hill, NC. What are some credit cards that might be good for me to consider, given that I will primarily be spending on travel, groceries, rent, and gas?"

Whatever questions you may have related to credit and credit cards, I'm here to help!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
