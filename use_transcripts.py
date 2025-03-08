"""
Simple Transcript Loader

This script demonstrates how to load and use the transcripts from the JSON file.
"""

import json

def load_transcripts(file_path):
    """
    Load transcripts from a JSON file.
    
    Args:
        file_path (str): Path to the JSON file
        
    Returns:
        dict: A dictionary with speaker names as keys and transcripts as values
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading transcripts: {e}")
        return {}

def get_transcript(transcripts, name):
    """
    Get a transcript for a specific speaker.
    
    Args:
        transcripts (dict): The transcripts dictionary
        name (str): The name of the speaker
        
    Returns:
        str: The transcript, or None if not found
    """
    return transcripts.get(name)

def get_all_speakers(transcripts):
    """
    Get a list of all speaker names.
    
    Args:
        transcripts (dict): The transcripts dictionary
        
    Returns:
        list: A list of all speaker names
    """
    return list(transcripts.keys())

def main():
    # Load the transcripts
    transcripts = load_transcripts('transcripts.json')
    
    if not transcripts:
        print("No transcripts loaded.")
        return
    
    # Print all available speakers
    print("Available speakers:")
    for name in get_all_speakers(transcripts):
        print(f"- {name}")
    
    # Example: Get a specific transcript
    name = "Brady Moore"
    transcript = get_transcript(transcripts, name)
    
    if transcript:
        print(f"\nExcerpt of {name}'s transcript:")
        print(transcript[:150] + "...")
    else:
        print(f"\nNo transcript found for {name}")
    
    # Example: How you might use this with an AI chatbot
    print("\nExample of how to use with an AI chatbot:")
    print("1. Load the transcripts")
    print("2. Get the transcript for the requested speaker")
    print("3. Send the transcript to the AI model along with the user's message")
    print("4. Return the AI's response")

if __name__ == "__main__":
    main() 