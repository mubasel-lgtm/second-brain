#!/bin/bash

# Second Brain Setup Script
# Run this to initialize the system

echo "🧠 Second Brain System Setup"
echo "============================"
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run from second-brain directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔧 Creating necessary directories..."
mkdir -p memory
mkdir -p data/backups
mkdir -p logs

echo ""
echo "📝 Creating environment file..."
if [ ! -f ".env.local" ]; then
    cat > .env.local << EOF
# Second Brain Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Telegram Bot (for morning brief)
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Discord (for content factory)
DISCORD_BOT_TOKEN=your_discord_token_here
DISCORD_GUILD_ID=your_guild_id_here

# APIs
OPENAI_API_KEY=your_openai_key_here
NEWS_API_KEY=your_newsapi_key_here

# Database (optional - for advanced features)
# DATABASE_URL=your_database_url
EOF
    echo "✅ Created .env.local - Please edit with your API keys"
else
    echo "⚠️  .env.local already exists"
fi

echo ""
echo "📊 Setting up memory system..."
touch memory/README.md
cat > memory/README.md << 'EOF'
# Memory Storage

This directory contains all your knowledge and memories.

## Structure
- `ideas/` - Business ideas and opportunities
- `patterns/` - Identified patterns and insights  
- `conversations/` - Important conversation summaries
- `projects/` - Project-specific knowledge
- `daily/` - Daily notes (YYYY-MM-DD.md)

## Adding Memories

1. Create markdown file
2. Add frontmatter:
   ```yaml
   ---
   date: 2026-02-17
   tags: [business, automation]
   source: conversation
   ---
   ```
3. Write content
4. Save to appropriate folder

## Search

Use the dashboard search or `grep` to find memories.
EOF

echo ""
echo "🤖 Creating initial memory files..."

# Create initial memories
cat > memory/system-overview.md << 'EOF'
---
date: 2026-02-17
tags: [system, second-brain, overview]
source: setup
---

# Second Brain System

## What is This?
Personal knowledge management system combining:
- Memory bank
- Task management
- Document storage
- Morning brief automation
- Content factory

## How to Use

### 1. Dashboard
- View daily brief preview
- See stats and activity
- Quick actions

### 2. Memories
- Store all knowledge
- Tag and organize
- Full-text search

### 3. Tasks
- Daily todo lists
- Project tracking
- Priority management

### 4. Morning Brief
- Automated daily at 8:00 AM
- News, ideas, tasks
- Delivered via Telegram

### 5. Content Factory
- Discord-based agents
- Research → Scripts → Thumbnails
- Automated workflow

## Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Check cron jobs
openclaw cron list
```
EOF

cat > memory/business-ideas-pool.md << 'EOF'
---
date: 2026-02-17
tags: [business, ideas, opportunities]
source: brainstorming
---

# Business Ideas Pool

## Active Ideas

### 1. AI Content Agency
- Automated video production
- Multi-platform content
- Subscription model

### 2. Pet Health Education
- Dog arthritis solutions
- Natural remedies
- Digital products

### 3. Automation Consultancy
- Business process automation
- AI integration
- High-ticket services

## Resources
- [Trend Researcher](/agents/news-researcher/)
- [Script Writer](/agents/script-writer/)
- [Thumbnail Generator](/agents/thumbnail-generator/)
EOF

echo ""
echo "⚙️  Setting up cron jobs..."
echo "Morning Brief: 8:00 AM daily"
echo "Trend Research: Every 6 hours"

# Note about cron setup
cat > CRON_SETUP.md << 'EOF'
# Cron Job Setup

The following cron jobs should be configured:

## Morning Brief (Daily 8:00 AM)
```
0 8 * * * /usr/local/bin/openclaw cron run morning-brief
```

## Trend Research (Every 6 hours)
```
0 */6 * * * /usr/local/bin/openclaw cron run trend-research
```

## Weekly Review (Mondays 9:00 AM)
```
0 9 * * 1 /usr/local/bin/openclaw cron run weekly-review
```

These are already configured in the system.
Check with: `openclaw cron list`
EOF

echo ""
echo "✅ Setup Complete!"
echo ""
echo "Next Steps:"
echo "1. Edit .env.local with your API keys"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo "4. Check Telegram for morning brief setup"
echo "5. Configure Discord bot (see discord-factory/README.md)"
echo ""
echo "🚀 Your Second Brain is ready!"
EOF

chmod +x /Users/mubasel/.openclaw/workspace/second-brain/setup.sh

echo "✅ Created setup.sh"