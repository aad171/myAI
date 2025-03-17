import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}. My goal is to help you and other young people navigate the complexity the credit card world. Try asking me questions like "How do credit cards work" or even as specific as "I am 22 years old, about to graduate college and start working making $100k in Chapel Hill, NC, what are some credit cards that might be good for me to look at applying for considering I will primarily be spending on travel, groceries, rent, and gas?" `;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
