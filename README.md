# 🧠 Second Brain System

Personal knowledge management and productivity system for Mubasel.

## System Overview

```
┌─────────────────────────────────────────────────────────┐
│                    SECOND BRAIN                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📊 Dashboard        📝 Memories       ✅ Tasks        │
│  ├── Stats           ├── Search        ├── Today      │
│  ├── Brief Preview   ├── Tags          ├── Calendar   │
│  └── Quick Actions   └── Timeline      └── Projects   │
│                                                         │
│  📄 Documents      🤖 Morning Brief    🎮 Content     │
│  ├── Upload        ├── 8:00 AM Daily   ├── Factory    │
│  ├── Organize      ├── News + Ideas    ├── Agents     │
│  └── Sync          ├── Tasks + Collab  └── Discord    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Features

### 1. Memory Bank
- Store all knowledge, ideas, and insights
- Tag-based organization
- Full-text search
- Timeline view
- Import from various sources

### 2. Task Management
- Daily task lists
- Priority levels (High/Medium/Low)
- Project organization
- Due dates & reminders
- Completion tracking

### 3. Document Store
- Central file repository
- Auto-organization
- Version control
- Quick search
- Cross-linking with memories

### 4. Morning Brief (Automated)
**Every day at 8:00 AM Dubai time:**
- 📰 News relevant to your interests
- 💡 Business ideas based on trends
- ✅ Tasks for today
- 🤝 Collaborative task recommendations

**Delivered via:** Telegram

### 5. Content Factory (Discord)
Multi-agent content production system:
- **Agent 1:** Trend Researcher
- **Agent 2:** Script Writer  
- **Agent 3:** Thumbnail Generator

Organized in Discord channels for seamless workflow.

## Quick Start

### 1. Install Dependencies
```bash
cd /Users/mubasel/.openclaw/workspace/second-brain
npm install
```

### 2. Run Development Server
```bash
npm run dev
# Opens at http://localhost:3000
```

### 3. Access Dashboard
Open browser → http://localhost:3000

## Morning Brief Configuration

The morning brief is automatically scheduled via cron:
- **Time:** 8:00 AM daily (Asia/Dubai timezone)
- **Channel:** Telegram
- **Content:** Dynamic based on current tasks, news, and trends

To modify the brief content, edit:
```
/cron/morning-brief
```

## Discord Content Factory Setup

### 1. Create Discord Server
- Create new server or use existing
- Invite bot with appropriate permissions

### 2. Channel Structure
Create these channels:
```
📊 Research
#trending-stories
#competitor-analysis

✍️ Production  
#script-generation
#thumbnail-creation

📤 Distribution
#content-queue
#publishing-schedule
```

### 3. Configure Agents
Each agent runs independently:
- Trend Researcher: Scans every 6 hours
- Script Writer: Triggered by new trends
- Thumbnail Generator: Triggered by new scripts

## Directory Structure

```
second-brain/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard
│   ├── memory/            # Memory bank
│   ├── tasks/             # Task manager
│   └── documents/         # Document store
├── agents/                # Agent configurations
│   ├── news-researcher/
│   ├── script-writer/
│   └── thumbnail-generator/
├── discord-factory/       # Discord integration
├── components/            # React components
├── lib/                   # Utility functions
└── memory/               # Knowledge storage
    ├── ideas.md
    ├── patterns.md
    └── performance.md
```

## Memory Storage

All memories stored in `/memory/` as markdown files:
- `YYYY-MM-DD-event.md` - Daily notes
- `topic-name.md` - Topic-specific knowledge
- `patterns.md` - Identified patterns
- `ideas.md` - Business ideas

## Task Management

Tasks synced across:
- Second Brain dashboard
- Morning brief
- Collaborative recommendations

Status tracking:
- ⏳ Pending
- 🔄 In Progress
- ✅ Completed
- 📅 Scheduled

## Automation

### Cron Jobs
```
0 8 * * *     Morning Brief (Daily)
0 */6 * * *   Trend Research (Every 6h)
0 9 * * 1     Weekly Review (Mondays)
```

### Triggers
- New file in Drive → Auto-process
- New memory added → Update search index
- Task completed → Log to analytics

## Integration Points

### External Services
- **Telegram:** Morning brief delivery
- **Discord:** Content factory
- **Google Drive:** Document storage
- **iCloud:** Email processing

### APIs Used
- News APIs (for trending stories)
- Whisper (for video transcription)
- AI services (for content generation)

## Current Status

| Component | Status | Notes |
|-----------|--------|-------|
| NextJS App | ✅ Active | Dashboard live |
| Morning Brief | ✅ Scheduled | 8:00 AM daily |
| Memory Bank | ✅ Active | 127 memories stored |
| Task Manager | ✅ Active | 8 pending tasks |
| Discord Factory | 🔄 Building | Agents configuring |
| Content Pipeline | ⏳ Setup | Channels creating |

## Next Steps

1. **Deploy NextJS app** to Vercel/Railway
2. **Configure Discord bot** with proper permissions
3. **Train agents** on your content style
4. **Set up monitoring** for system health
5. **Create backup system** for memories

## Support

For issues or questions:
1. Check agent READMEs in `/agents/`
2. Review Discord factory docs
3. Check cron job status

---
*Second Brain System v1.0*
*Created: 2026-02-17*
*Status: Active Development*
