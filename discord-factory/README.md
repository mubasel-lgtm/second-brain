# Discord Content Factory

Multi-agent content production system organized in Discord channels.

## Channel Structure

### 📊 Research Channels
```
#trending-stories
#competitor-analysis  
#audience-insights
#content-calendar
```

### ✍️ Production Channels
```
#script-generation
#thumbnail-creation
#video-editing
#quality-review
```

### 📤 Distribution Channels
```
#content-queue
#publishing-schedule
#performance-metrics
```

## Agent System

### Agent 1: Trend Researcher
**Role:** Finds trending stories and viral content
**Input:** Keywords, niches, timeframes
**Output:** Curated list of trending topics with engagement data
**Channel:** #trending-stories

**Commands:**
- `!research [niche] [timeframe]` - Research trending topics
- `!analyze [url]` - Analyze viral content
- `!competitor [channel]` - Track competitor content

### Agent 2: Script Writer
**Role:** Writes scripts based on research
**Input:** Trending topics from Agent 1
**Output:** Complete scripts with hooks, structure, CTAs
**Channel:** #script-generation

**Commands:**
- `!write [topic]` - Generate script for topic
- `!hook [script-id]` - Create multiple hook variations
- `!optimize [script-id]` - Improve engagement

### Agent 3: Thumbnail Generator
**Role:** Creates thumbnails using AI/design tools
**Input:** Script/story from Agent 2
**Output:** Multiple thumbnail variations
**Channel:** #thumbnail-creation

**Commands:**
- `!thumbnail [script-id] [style]` - Generate thumbnails
- `!variations [thumbnail-id]` - Create variations
- `!test [thumbnail-a] [thumbnail-b]` - A/B test setup

## Workflow

```
1. Trend Researcher finds story
   ↓ Posts to #trending-stories
   
2. Script Writer creates script
   ↓ Posts to #script-generation
   
3. Thumbnail Generator creates visuals
   ↓ Posts to #thumbnail-creation
   
4. Content moves to #content-queue
   
5. Approved content → #publishing-schedule
```

## Automation Setup

### Discord Bot Configuration
```python
# Bot token and permissions
TOKEN = os.getenv('DISCORD_BOT_TOKEN')
INTENTS = discord.Intents.all()

# Channel mappings
CHANNELS = {
    'research': 1234567890,
    'scripts': 1234567891,
    'thumbnails': 1234567892,
    'queue': 1234567893
}
```

### Agent Triggers
```
# Morning trend scan (8 AM)
!research pets 24h

# When 5+ stories collected
@script-writer generate-scripts

# When scripts ready
@thumbnail-gen create-thumbnails
```

## Content Pipeline Status

| Stage | Agent | Status | Output |
|-------|-------|--------|--------|
| Research | Trend Researcher | Active | 5 stories/day |
| Scripts | Script Writer | Active | 3-5 scripts/day |
| Thumbnails | Thumbnail Gen | Active | 15-20 variants/day |
| Review | Human | Manual | Quality check |
| Publish | Scheduler | Automated | Optimal timing |

## Metrics Dashboard

Track in #performance-metrics:
- Views per video
- CTR (Click-through rate)
- Engagement rate
- Trending topics hit rate
- Content velocity (videos/week)

## Integration with Second Brain

All content ideas, scripts, and performance data sync to:
- `/memory/content-ideas.md`
- `/memory/viral-patterns.md`
- `/memory/performance-data.md`

---
*System Status: Building in progress*
