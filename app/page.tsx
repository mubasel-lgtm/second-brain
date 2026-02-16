'use client'

import { useState, useEffect } from 'react'
import { 
  Brain, 
  CheckCircle2, 
  FileText, 
  Clock, 
  TrendingUp, 
  Plus,
  ArrowUpRight,
  Mail,
  Bell,
  Calendar,
  Zap,
  Search,
  MoreHorizontal,
  ChevronRight
} from 'lucide-react'

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }))
      setCurrentDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans antialiased">
      {/* Top Navigation */}
      <header className="border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#fafafa] rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#0a0a0a]" />
              </div>
              <span className="font-semibold text-[15px] tracking-tight">Second Brain</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="/" active>Dashboard</NavLink>
              <NavLink href="/memory">Memories</NavLink>
              <NavLink href="/tasks">Tasks</NavLink>
              <NavLink href="/documents">Documents</NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors">
              <Search className="w-4 h-4 text-[#666]" />
            </button>
            <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors relative">
              <Bell className="w-4 h-4 text-[#666]" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#ef4444] rounded-full" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-[#333] to-[#1a1a1a] rounded-full border border-[#333] flex items-center justify-center text-xs font-medium">
              MM
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#666] text-sm mb-1">{currentDate}</p>
              <h1 className="text-[32px] font-semibold tracking-tight">
                Good evening, Mubasel
              </h1>
              <p className="text-[#666] mt-1">Here&apos;s what&apos;s happening today</p>
            </div>
            <div className="text-right">
              <p className="text-[42px] font-light tracking-tight tabular-nums leading-none">{currentTime}</p>
              <p className="text-sm text-[#666] mt-1">Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={Brain}
            label="Memories"
            value="127"
            change="+5"
            trend="up"
          />
          <StatCard 
            icon={CheckCircle2}
            label="Tasks"
            value="8"
            sublabel="3 high priority"
          />
          <StatCard 
            icon={FileText}
            label="Documents"
            value="32"
            change="+2"
            trend="up"
          />
          <StatCard 
            icon={Zap}
            label="Active Projects"
            value="5"
            sublabel="2 urgent"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Morning Brief */}
            <section className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[#fafafa]" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[15px]">Morning Brief</h2>
                    <p className="text-xs text-[#666]">Daily at 8:00 AM</p>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 text-sm text-[#666] hover:text-[#fafafa] transition-colors">
                  View all
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <BriefItem 
                  emoji="📰"
                  title="Dubai AI News"
                  description="3 new stories relevant to your interests"
                />
                <BriefItem 
                  emoji="💡"
                  title="Business Ideas"
                  description="2 opportunities identified today"
                />
                <BriefItem 
                  emoji="✅"
                  title="Today's Tasks"
                  description="5 high priority items to complete"
                />
                <BriefItem 
                  emoji="🤝"
                  title="Agent Actions"
                  description="2 automated tasks completed"
                />
              </div>
            </section>

            {/* Notary Command */}
            <section className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#fafafa]" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[15px]">Notary Command</h2>
                    <p className="text-xs text-[#666]">GmbH transfer from Dubai</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-[#1a1a1a] text-xs rounded-full border border-[#333]">
                  17 contacts
                </span>
              </div>
              <div className="p-6">
                <div className="flex gap-3">
                  <StatusPill count={14} label="Awaiting replies" variant="neutral" />
                  <StatusPill count={2} label="Responded" variant="success" />
                  <StatusPill count={1} label="Follow-up" variant="warning" />
                </div>
              </div>
            </section>

            {/* Recent Activity */}
            <section className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a]">
                <h2 className="font-semibold text-[15px]">Recent Activity</h2>
              </div>
              <div className="divide-y divide-[#1a1a1a]">
                <ActivityRow 
                  time="2h ago"
                  title="Memory added"
                  description="Notary research results — 17 contacts"
                />
                <ActivityRow 
                  time="4h ago"
                  title="Task completed"
                  description="Extracted 27 video hooks from content"
                />
                <ActivityRow 
                  time="Yesterday"
                  title="AgentMail activated"
                  description="widecenter550@agentmail.to ready"
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <section className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a]">
                <h2 className="font-semibold text-[15px]">Quick Actions</h2>
              </div>
              <div className="p-2">
                <ActionButton icon={Plus} label="Add Memory" />
                <ActionButton icon={CheckCircle2} label="Create Task" />
                <ActionButton icon={FileText} label="Upload Document" />
                <ActionButton icon={Mail} label="Check AgentMail" />
              </div>
            </section>

            {/* Agent Status */}
            <section className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a]">
                <h2 className="font-semibold text-[15px]">Marvin Status</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666]">Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
                    <span className="text-sm">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666]">Active Jobs</span>
                  <span className="text-sm">2 running</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666]">Email</span>
                  <span className="text-xs text-[#666] font-mono">widecenter550...</span>
                </div>
                <div className="pt-4 border-t border-[#1a1a1a]">
                  <p className="text-xs text-[#666]">Last action: 2m ago</p>
                </div>
              </div>
            </section>

            {/* Automations */}
            <section className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
                <h2 className="font-semibold text-[15px]">Automations</h2>
                <button className="p-1 hover:bg-[#1a1a1a] rounded transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-[#666]" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 p-3 hover:bg-[#1a1a1a] rounded-lg transition-colors cursor-pointer">
                  <Calendar className="w-4 h-4 text-[#666]" />
                  <div className="flex-1">
                    <p className="text-sm">Morning Brief</p>
                    <p className="text-xs text-[#666]">Daily 8:00 AM</p>
                  </div>
                  <span className="w-2 h-2 bg-[#22c55e] rounded-full" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a 
      href={href}
      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
        active 
          ? 'bg-[#1a1a1a] text-[#fafafa]' 
          : 'text-[#666] hover:text-[#fafafa] hover:bg-[#1a1a1a]'
      }`}
    >
      {children}
    </a>
  )
}

function StatCard({ icon: Icon, label, value, change, sublabel, trend }: {
  icon: React.ElementType
  label: string
  value: string
  change?: string
  sublabel?: string
  trend?: 'up' | 'down'
}) {
  return (
    <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#333] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#fafafa]" />
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-xs ${trend === 'up' ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
            <ArrowUpRight className={`w-3 h-3 ${trend === 'down' && 'rotate-90'}`} />
            {change}
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
        <p className="text-sm text-[#666] mt-0.5">{label}</p>
        {sublabel && <p className="text-xs text-[#666] mt-1">{sublabel}</p>}
      </div>
    </div>
  )
}

function BriefItem({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 hover:bg-[#1a1a1a] rounded-lg transition-colors cursor-pointer group">
      <span className="text-xl">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#fafafa] group-hover:text-white">{title}</p>
        <p className="text-xs text-[#666] mt-0.5">{description}</p>
      </div>
    </div>
  )
}

function StatusPill({ count, label, variant }: { count: number; label: string; variant: 'neutral' | 'success' | 'warning' }) {
  const variants = {
    neutral: 'bg-[#1a1a1a] text-[#666]',
    success: 'bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20',
    warning: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20'
  }

  return (
    <div className={`px-4 py-2 rounded-lg text-sm font-medium border ${variants[variant]}`}>
      {count} {label}
    </div>
  )
}

function ActivityRow({ time, title, description }: { time: string; title: string; description: string }) {
  return (
    <div className="px-6 py-4 flex items-start gap-4 hover:bg-[#1a1a1a]/50 transition-colors">
      <div className="w-2 h-2 bg-[#333] rounded-full mt-2" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium">{title}</p>
          <span className="text-xs text-[#666]">{time}</span>
        </div>
        <p className="text-sm text-[#666] truncate">{description}</p>
      </div>
    </div>
  )
}

function ActionButton({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm hover:bg-[#1a1a1a] transition-colors group">
      <Icon className="w-4 h-4 text-[#666] group-hover:text-[#fafafa] transition-colors" />
      <span className="text-[#666] group-hover:text-[#fafafa] transition-colors">{label}</span>
    </button>
  )
}
