import { RealtimeRelay } from "./lib/relay";
import dotenv from "dotenv";
dotenv.config({ override: true });

const AZURE_OPENAI_API_KEY = process.env.AZURE_OPENAI_API_KEY;

const PORT = Number.parseInt(process.env.PORT) || 8081;

const relay = new RealtimeRelay(AZURE_OPENAI_API_KEY);
relay.listen(PORT);
