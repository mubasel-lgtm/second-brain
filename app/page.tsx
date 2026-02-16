'use client'

import { useState, useEffect } from 'react'
import { 
  Search,
  Bell,
  Plus,
  Settings,
  Trash2,
  MoreHorizontal,
  ChevronRight,
  Clock,
  FileText,
  CheckSquare,
  Bookmark,
  Zap,
  TrendingUp,
  Mail
} from 'lucide-react'

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState('')
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hour = now.getHours()
      
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }))
      
      if (hour < 12) setGreeting('Good morning')
      else if (hour < 18) setGreeting('Good afternoon')
      else setGreeting('Good evening')
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-100 flex flex-col">
        {/* User */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white text-xs font-medium">
              M
            </div>
            <span className="text-sm font-medium text-gray-900">Mubasel&apos;s Brain</span>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2">
          <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
            <Search className="w-4 h-4" />
            <span>Search</span>
            <span className="ml-auto text-xs text-gray-400">⌘+P</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-2 space-y-0.5">
          <SidebarItem icon={Clock} label="Dashboard" active />
          <SidebarItem icon={FileText} label="Memories" count={127} />
          <SidebarItem icon={CheckSquare} label="Tasks" count={8} />
          <SidebarItem icon={Bookmark} label="Documents" count={32} />
          <SidebarItem icon={Zap} label="Projects" count={5} />
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-gray-100 space-y-0.5">
          <SidebarItem icon={Trash2} label="Trash" />
          <SidebarItem icon={Settings} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {greeting}, Mubasel
              </h1>
              <p className="text-gray-500">
                Here&apos;s everything that needs your attention today.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <span className="text-sm text-gray-500 tabular-nums ml-4">{currentTime}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mb-10">
            <StatCard 
              icon={FileText}
              label="Memories"
              value="127"
              color="bg-blue-50 text-blue-600"
            />
            <StatCard 
              icon={CheckSquare}
              label="Tasks"
              value="8"
              color="bg-green-50 text-green-600"
            />
            <StatCard 
              icon={Bookmark}
              label="Documents"
              value="32"
              color="bg-purple-50 text-purple-600"
            />
            <StatCard 
              icon={Zap}
              label="Projects"
              value="5"
              color="bg-amber-50 text-amber-600"
            />
          </div>

          {/* Content Blocks */}
          <div className="space-y-4">
            {/* Morning Brief */}
            <ContentBlock 
              icon={TrendingUp}
              title="Morning Brief"
              subtitle="Daily at 8:00 AM"
              color="text-gray-700"
            >
              <div className="grid grid-cols-2 gap-3 mt-4">
                <BriefItem label="Dubai AI News" value="3 new stories" />
                <BriefItem label="Business Ideas" value="2 opportunities" />
                <BriefItem label="Today's Tasks" value="5 high priority" />
                <BriefItem label="Agent Actions" value="2 completed" />
              </div>
            </ContentBlock>

            {/* Notary Project */}
            <ContentBlock 
              icon={Clock}
              title="Notary Command"
              subtitle="GmbH transfer from Dubai"
              color="text-gray-700"
            >
              <div className="flex gap-2 mt-4">
                <Tag label="14 awaiting replies" variant="neutral" />
                <Tag label="2 responded" variant="success" />
                <Tag label="1 follow-up" variant="warning" />
              </div>
            </ContentBlock>

            {/* Recent Activity */}
            <ContentBlock 
              icon={Clock}
              title="Recent Activity"
              color="text-gray-700"
            >
              <div className="mt-4 space-y-3">
                <ActivityItem 
                  time="2h ago"
                  text="Added memory: Notary research results — 17 contacts"
                />
                <ActivityItem 
                  time="4h ago"
                  text="Completed task: Extracted 27 video hooks"
                />
                <ActivityItem 
                  time="Yesterday"
                  text="AgentMail activated: widecenter550@agentmail.to"
                />
              </div>
            </ContentBlock>

            {/* Agent Status */}
            <ContentBlock 
              icon={Mail}
              title="Marvin Status"
              subtitle="Your AI assistant"
              color="text-gray-700"
            >
              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-600">Online</span>
                </div>
                <span className="text-sm text-gray-500">2 jobs running</span>
                <span className="text-sm text-gray-500 font-mono">widecenter550@agentmail.to</span>
              </div>
            </ContentBlock>
          </div>

          {/* Add Button */}
          <button className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </main>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, count, active }: { 
  icon: React.ElementType
  label: string
  count?: number
  active?: boolean
}) {
  return (
    <button className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
      active 
        ? 'bg-gray-100 text-gray-900 font-medium' 
        : 'text-gray-600 hover:bg-gray-50'
    }`}>
      <Icon className="w-4 h-4" />
      <span className="flex-1 text-left">{label}</span>
      {count !== undefined && (
        <span className="text-xs text-gray-400">{count}</span>
      )}
    </button>
  )
}

function StatCard({ icon: Icon, label, value, color }: {
  icon: React.ElementType
  label: string
  value: string
  color: string
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center mb-3`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}

function ContentBlock({ icon: Icon, title, subtitle, color, children }: {
  icon: React.ElementType
  title: string
  subtitle?: string
  color: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${color}`} />
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      {children}
    </div>
  )
}

function BriefItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm text-gray-900 font-medium">{value}</span>
    </div>
  )
}

function Tag({ label, variant }: { label: string; variant: 'neutral' | 'success' | 'warning' }) {
  const variants = {
    neutral: 'bg-gray-100 text-gray-600',
    success: 'bg-green-50 text-green-600',
    warning: 'bg-amber-50 text-amber-600'
  }
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${variants[variant]}`}>
      {label}
    </span>
  )
}

function ActivityItem({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-400 w-16">{time}</span>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  )
}
