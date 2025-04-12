from gemini_wrapper.transcribe import transcribe_audio
from gemini_wrapper.gemini_prompt import prompt_gemini
from dotenv import load_dotenv
import os

load_dotenv()

audio_file = "gm.mp3"  # Place your audio file in the same folder
transcribed_text = transcribe_audio(audio_file)
print("🎧 Transcribed Text:\n", transcribed_text)

response = prompt_gemini(transcribed_text)
print("\n🤖 Gemini's Response:\n", response)
