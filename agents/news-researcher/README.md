# Trend Researcher Agent

Finds viral content and trending stories automatically.

## Functions

### 1. Trend Discovery
```python
def find_trending_topics(niche: str, timeframe: str = "24h"):
    """
    Search multiple platforms for trending content
    """
    sources = {
        'youtube': search_youtube_trending(niche),
        'tiktok': search_tiktok_trending(niche),
        'twitter': search_twitter_trending(niche),
        'reddit': search_reddit_trending(niche),
        'news': search_news_trending(niche)
    }
    
    return analyze_engagement(sources)
```

### 2. Competitor Analysis
```python
def analyze_competitor(channel: str):
    """
    Track competitor's viral content
    """
    recent_videos = fetch_recent_uploads(channel, limit=50)
    
    metrics = {
        'avg_views': calculate_average(recent_videos),
        'viral_threshold': find_viral_outliers(recent_videos),
        'common_patterns': extract_patterns(recent_videos),
        'upload_frequency': calculate_frequency(recent_videos)
    }
    
    return metrics
```

### 3. Viral Prediction
```python
def predict_viral_potential(topic: str):
    """
    Score topic's viral potential (0-100)
    """
    factors = {
        'emotional_trigger': score_emotion(topic),
        'controversy_level': score_controversy(topic),
        'timeliness': score_timeliness(topic),
        'shareability': score_shareability(topic),
        'novelty': score_novelty(topic)
    }
    
    return weighted_score(factors)
```

## Output Format

Posts to #trending-stories:

```json
{
  "topic": "Dog arthritis natural treatment",
  "source": "Reddit r/dogs",
  "engagement": {
    "upvotes": 15400,
    "comments": 892,
    "shares": 2300
  },
  "sentiment": "positive",
  "viral_score": 87,
  "recommendation": "HIGH - Create content about natural arthritis treatments",
  "keywords": ["dog health", "arthritis", "natural remedies", "pet care"],
  "content_angles": [
    "Vet exposes truth about arthritis meds",
    "5 natural alternatives that actually work",
    "Why your vet won't tell you this"
  ]
}
```

## Automation

Runs every 6 hours:
- 08:00 - Morning trend scan
- 14:00 - Midday update
- 20:00 - Evening scan

## Discord Commands

```
!research [niche] [timeframe]
Example: !research pets 24h

!analyze [url]
Example: !analyze https://youtube.com/watch?v=...

!viral-score [topic]
Example: !viral-score "dog arthritis treatment"

!competitor [channel-name]
Example: !competitor @pettok
```

---
*Agent: Trend Researcher*
*Status: Active*
