# AI Mock Interview Server Relay

## Description
This is a server relay that connects the AI Mock Interview client to OpenAI. This server is responsible for sending the user's input to OpenAI and returning the response to the client. It works using websockets (which is why this isn't integrated into the nextjs client directly).

## Why patching?

The `@openai/realtime-api-beta` library uses hardcoded OpenAI API urls which are not configurable. In order to use Azure OpenAI services, we need to patch the library to use the correct API url.