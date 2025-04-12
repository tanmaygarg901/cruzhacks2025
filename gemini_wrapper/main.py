from datetime import date
from record import record_to_wav
from transcribe import transcribe_audio
from gemini_prompt import prompt_gemini

# Step 1: Record
record_to_wav("gm.wav", duration=30)

# Step 2: Transcribe
user_input = transcribe_audio("gm.wav")
print("\n🗣️ Transcription:\n", user_input)

# Step 3: Wrap in prompt for legal context
today = date.today().strftime("%B %d, %Y")
context_prompt = f"""
You are a professional legal assistant helping college students understand their rights.
Explain everything calmly, clearly, and in simple terms.
The student does not know much about the law.
It is currently {today}.

Here is what the student said:
\"\"\"{user_input}\"\"\"

Now respond with what they can and cannot do based on what you understood.
"""

# Step 4: Send to Gemini
response = prompt_gemini(context_prompt)
print("\n💬 Gemini says:\n", response)
