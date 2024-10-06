import { RealtimeRelay } from "./lib/relay";
import dotenv from "dotenv";
dotenv.config({ override: true });

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const AZURE_AI_KEY = process.env.AZURE_AI_KEY;

const PORT = Number.parseInt(process.env.PORT) || 8081;

const relay = new RealtimeRelay(AZURE_AI_KEY);
relay.listen(PORT);
