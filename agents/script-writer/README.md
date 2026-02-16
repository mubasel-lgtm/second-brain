# Script Writer Agent

Writes engaging video scripts from trending topics.

## Input
- Trending topic from Researcher Agent
- Target platform (YouTube, TikTok, etc.)
- Style preference (educational, entertaining, controversial)

## Output
Complete script with:
- Hook (first 5 seconds)
- Body structure
- Call-to-action
- Engagement triggers

## Script Structure

### Hook Templates

**Pattern 1: Contrarian**
```
"[Common belief] is actually making things WORSE. 
Here's what you should do instead..."
```

**Pattern 2: Personal Story**
```
"I almost [bad outcome] until I discovered this [solution].
Now [positive result]..."
```

**Pattern 3: Authority/Expert**
```
"As a [expert], I see [problem] every day.
Here's what nobody is telling you..."
```

### Body Framework

```
[HOOK] - Grab attention (5s)
[PROBLEM] - Agitate pain point (15s)
[SOLUTION] - Present answer (30s)
[PROOF] - Evidence/story (45s)
[CTA] - Call to action (10s)
```

## Writing Process

### Step 1: Analyze Topic
```python
def analyze_topic(topic: str):
    return {
        'emotional_triggers': detect_emotions(topic),
        'audience_pain_points': extract_pain_points(topic),
        'common_objections': find_objections(topic),
        'authority_angles': find_expert_opportunities(topic)
    }
```

### Step 2: Generate Hooks
```python
def generate_hooks(analysis: dict, count: int = 5):
    hooks = []
    
    # Pattern-based generation
    hooks.append(create_contrarian_hook(analysis))
    hooks.append(create_story_hook(analysis))
    hooks.append(create_authority_hook(analysis))
    hooks.append(create_curiosity_hook(analysis))
    hooks.append(create_urgency_hook(analysis))
    
    return rank_by_engagement(hooks)
```

### Step 3: Write Body
```python
def write_script_body(topic: str, hook: str, style: str):
    sections = {
        'transition': write_transition(hook),
        'problem': write_problem_section(topic),
        'solution': write_solution_section(topic),
        'proof': write_proof_section(topic),
        'cta': write_cta_section(topic)
    }
    
    return assemble_sections(sections, style)
```

## Discord Commands

```
!write [topic] [style] [duration]
Example: !write "dog arthritis" educational 60s

!hooks [topic] [count]
Example: !hooks "pet health tips" 5

!optimize [script-id]
Example: !optimize script_12345

!rewrite [script-id] [tone]
Example: !rewrite script_12345 more_controversial
```

## Output Example

Posted to #script-generation:

```
📝 NEW SCRIPT: Dog Arthritis Natural Treatment

📊 Viral Score: 89/100
🎯 Hook Pattern: Contrarian
⏱️ Duration: 60 seconds

---

[HOOK - 0:00-0:05]
"Schmerzmittel verschlimmern die Arthrose deines Hundes tatsächlich. 
Das solltest du stattdessen tun..."

[PROBLEM - 0:05-0:20]
"Die meisten Hundebesitzer merken es zu spät. 
Ihr Hund humpelt, hat Mühe beim Treppensteigen...
Der Tierarzt verschreibt Medikamente.
Aber hier ist das Problem:"

[SOLUTION - 0:20-0:40]
"Diese Medikamente blockieren nur die Schmerzen,
behandeln aber nicht die Ursache.
Stattdessen: [5-Sekunden-Trick erklären]"

[PROOF - 0:40-0:55]
"Mein Hund Kevin konnte kaum laufen.
Nach 90 Tagen ohne Medikamente...
[Zeige Ergebnis]"

[CTA - 0:55-1:00]
"Link in Bio für den kompletten Guide.
Dein Hund wird es dir danken."

---

✅ Engagement Triggers: 8/10
✅ Shareability Score: 92
✅ Estimated CTR: 8.5%
```

## Integration

- Receives topics from #trending-stories
- Posts scripts to #script-generation
- Sends notifications to #thumbnail-creation when ready

---
*Agent: Script Writer*
*Status: Active*
