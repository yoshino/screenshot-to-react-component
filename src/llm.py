import openai
import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

openai.api_key = os.getenv("OPENAI_API_KEY")
client = openai.OpenAI()

def chat_completions(messages):
    response = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=messages,
        max_tokens=4096,
        temperature=0
    )
    return response
