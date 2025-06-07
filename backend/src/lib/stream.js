import {StreamChat } from "stream-chat";
import "dotenv/config";

const apikey = process.env.CONNECT_API_KEY;
const apiSecret = process.env.CONNECT_API_SECRET;

if(!apikey || !apiSecret)
{
    console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apikey, apiSecret);

export const upsertStreamUser = async(userData) => {
    try{
        await streamClient.upsertUser(userData);
        return userData;
    }catch(error)
    {
        console.error("Error upserting Stream user:", error);
    }
}
//TO DO : Do it later
export const generateStreamToken = (userId) => {};