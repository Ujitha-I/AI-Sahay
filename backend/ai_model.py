# ai_model.py
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# Lightweight GPT-style model
model_name = "MBZUAI/LaMini-T5-738M"

print("Loading AI-Sahay Model...")
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

def get_response(user_input: str) -> str:
    try:
        inputs = tokenizer(user_input, return_tensors="pt", truncation=True)
        outputs = model.generate(
            **inputs,
            max_new_tokens=400,
            temperature=0.8,
            top_p=0.92,
            repetition_penalty=1.1
        )
        reply = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return f"AI-Sahay: {reply}"
    except Exception as e:
        print("Error generating AI response:", e)
        # fallback offline reply
        return f"AI-Sahay: You said '{user_input}'"
