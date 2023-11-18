import sys
from llm import chat_completions
from prompt import assemble_prompt
from utils import encode_image

def main(args):
    image_path = args[1]
    output_path = args[2]

    base64_image = encode_image(image_path)
    prompt = assemble_prompt(base64_image)
    response = chat_completions(prompt)

    with open(output_path, "w") as f:
        f.write(response.choices[0].message.content)

if __name__ == "__main__":
    main(sys.argv)
