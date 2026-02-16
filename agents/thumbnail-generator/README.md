# Thumbnail Generator Agent

Creates high-CTR thumbnails using AI and design principles.

## Input
- Script from Script Writer
- Style preferences
- Platform requirements (YouTube, TikTok, etc.)

## Output
- 3-5 thumbnail variations
- A/B test recommendations
- CTR predictions

## Design Principles

### High-CTR Elements

**1. Faces & Emotions**
- Close-up shots
- Extreme expressions (shock, curiosity, concern)
- Eye contact with viewer

**2. Contrast & Colors**
- Bright, saturated colors
- High contrast backgrounds
- Complementary color schemes

**3. Text Overlays**
- Maximum 3-5 words
- Large, bold fonts
- Question format or numbers

**4. Curiosity Gaps**
- Show partial information
- Create "I need to know" feeling
- Unusual juxtapositions

## Generation Process

### Step 1: Analyze Script
```python
def analyze_for_thumbnail(script: dict):
    return {
        'key_emotion': extract_primary_emotion(script),
        'main_hook': extract_hook_phrase(script),
        'visual_elements': suggest_visuals(script),
        'text_options': generate_text_variations(script)
    }
```

### Step 2: Create Variations
```python
def generate_thumbnails(analysis: dict, count: int = 5):
    thumbnails = []
    
    # Style variations
    styles = ['shock', 'curiosity', 'story', 'authority', 'transformation']
    
    for i, style in enumerate(styles[:count]):
        thumbnail = {
            'id': f'thumb_{uuid4()}',
            'style': style,
            'concept': create_concept(analysis, style),
            'prompt': generate_ai_prompt(analysis, style),
            'text_overlay': select_text(analysis, style),
            'predicted_ctr': estimate_ctr(style, analysis)
        }
        thumbnails.append(thumbnail)
    
    return thumbnails
```

### Step 3: Generate with AI
```python
def create_ai_thumbnail(prompt: str, text: str):
    """
    Use AI image generation (Midjourney/DALL-E/Stable Diffusion)
    """
    image = generate_image(prompt)
    
    # Add text overlay
    final_thumbnail = add_text_overlay(
        image=image,
        text=text,
        font='bold_sans',
        position='center_bottom',
        stroke=True
    )
    
    return final_thumbnail
```

## Thumbnail Styles

### Style 1: Shock/Controversy
```
Image: Extreme reaction face + controversial object
Text: "DON'T Do This" / "STOP Using"
Colors: Red, black, yellow
CTR Prediction: 9-12%
```

### Style 2: Curiosity/Question
```
Image: Mysterious scene or confused face
Text: "Why Is This Happening?" / "The Real Reason"
Colors: Blue, purple, white
CTR Prediction: 8-10%
```

### Style 3: Transformation/Before-After
```
Image: Split screen showing contrast
Text: "Before → After" / "90 Days Later"
Colors: Green, orange, gradient
CTR Prediction: 7-9%
```

### Style 4: Authority/Expert
```
Image: Professional setting, confident pose
Text: "Vet Explains" / "Doctor Reveals"
Colors: White, blue, clean
CTR Prediction: 6-8%
```

### Style 5: Story/Personal
```
Image: Emotional moment, pet + owner
Text: "I Thought I Lost Him" / "His Last Day"
Colors: Warm tones, soft lighting
CTR Prediction: 8-11%
```

## Discord Commands

```
!thumbnail [script-id] [style]
Example: !thumbnail script_12345 shock

!variations [thumbnail-id]
Example: !variations thumb_67890

!test [thumb-a] [thumb-b]
Example: !test thumb_111 thumb_222

!ctr-predict [thumbnail-id]
Example: !ctr-predict thumb_333
```

## Output Example

Posted to #thumbnail-creation:

```
🎨 THUMBNAILS GENERATED

Script: "Dog Arthritis Natural Treatment"
Estimated CTR: 8.7%

---

[THUMBNAIL 1 - SHOCK STYLE]
🔴 Predicted CTR: 10.2%
💡 Concept: Vet with shocked expression + crossed-out pills
📝 Text: "STOP! Meds Make It WORSE"
🎨 Colors: Red background, yellow text

[THUMBNAIL 2 - CURIOSITY STYLE]  
🔵 Predicted CTR: 8.9%
💡 Concept: Dog looking confused + question marks
📝 Text: "Why Is He Limping?"
🎨 Colors: Blue gradient, white text

[THUMBNAIL 3 - TRANSFORMATION STYLE]
🟢 Predicted CTR: 9.5%
💡 Concept: Split screen - sad dog / happy running dog
📝 Text: "90 Days Changed Everything"
🎨 Colors: Before=dark, After=bright sunny

[THUMBNAIL 4 - AUTHORITY STYLE]
⚪ Predicted CTR: 7.8%
💡 Concept: Professional vet with clipboard
📝 Text: "What Vets Won't Tell You"
🎨 Colors: White coat, clinical background

[THUMBNAIL 5 - STORY STYLE]
🟠 Predicted CTR: 9.1%
💡 Concept: Emotional owner hugging old dog
📝 Text: "I Almost Lost Him..."
🎨 Colors: Warm sunset tones

---

📊 RECOMMENDATION: 
Use Thumbnail #1 (SHOCK) for maximum CTR
A/B Test: #1 vs #3

🔗 Images attached below
```

## Tools Integration

- Midjourney API for image generation
- Canva API for text overlays
- Remove.bg for background removal
- Photoshop API for advanced editing

## Performance Tracking

Stores all thumbnail data:
- Design elements used
- CTR results
- A/B test outcomes
- Winning patterns

Feeds back to improve future generations.

---
*Agent: Thumbnail Generator*
*Status: Active*
