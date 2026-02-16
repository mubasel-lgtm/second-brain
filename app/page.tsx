import { Brain, FileText, CheckCircle, Clock, TrendingUp, Lightbulb, Plus, ArrowRight, Zap, Mail, Bell, Calendar } from 'lucide-react'

export default function Dashboard() {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
  
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Navigation Bar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Second Brain
                </h1>
                <p className="text-xs text-slate-500">Mission Control</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Mail className="w-5 h-5 text-slate-400" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold">
                MM
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">{currentDate}</p>
              <h2 className="text-4xl font-bold text-white">
                Good Evening, <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Mubasel</span>
              </h2>
              <p className="text-slate-500 mt-2">Your personal command center — everything in one place.</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-light text-slate-300">{currentTime}</p>
              <p className="text-sm text-slate-600">Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={<Brain className="w-5 h-5" />}
            title="Memories"
            value="127"
            change="+5"
            color="violet"
          />
          <StatCard 
            icon={<CheckCircle className="w-5 h-5" />}
            title="Tasks"
            value="8"
            subtitle="3 high priority"
            color="emerald"
          />
          <StatCard 
            icon={<FileText className="w-5 h-5" />}
            title="Documents"
            value="32"
            change="+2"
            color="blue"
          />
          <StatCard 
            icon={<Zap className="w-5 h-5" />}
            title="Active Projects"
            value="5"
            subtitle="2 urgent"
            color="amber"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Morning Brief Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-slate-900 border border-violet-500/20 p-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-violet-500/20 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Morning Brief</h3>
                      <p className="text-sm text-slate-400">Delivered daily at 8:00 AM</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors">
                    View Full
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BriefItem 
                    icon="📰"
                    label="Dubai AI News"
                    value="3 new stories"
                  />
                  <BriefItem 
                    icon="💡"
                    label="Business Ideas"
                    value="2 opportunities"
                  />
                  <BriefItem 
                    icon="✅"
                    label="Today's Tasks"
                    value="5 high priority"
                  />
                  <BriefItem 
                    icon="🤝"
                    label="Agent Actions"
                    value="2 completed"
                  />
                </div>
              </div>
            </div>

            {/* Notary Command Center */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Notary Command</h3>
                    <p className="text-sm text-slate-400">GmbH transfer from Dubai</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-medium">
                  17 contacts
                </span>
              </div>
              
              <div className="flex gap-3">
                <StatusBadge status="waiting" label="Awaiting replies" count={14} />
                <StatusBadge status="success" label="Responded" count={2} />
                <StatusBadge status="urgent" label="Follow-up needed" count={1} />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <ActivityRow 
                  time="2h ago"
                  icon={<Brain className="w-4 h-4" />}
                  title="Memory added"
                  description="Notary research results — 17 contacts"
                  color="violet"
                />
                <ActivityRow 
                  time="4h ago"
                  icon={<CheckCircle className="w-4 h-4" />}
                  title="Task completed"
                  description="Extracted 27 video hooks from content"
                  color="emerald"
                />
                <ActivityRow 
                  time="Yesterday"
                  icon={<Mail className="w-4 h-4" />}
                  title="AgentMail active"
                  description="widecenter550@agentmail.to ready"
                  color="blue"
                />
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <ActionButton 
                  icon={<Plus className="w-4 h-4" />}
                  label="Add Memory"
                  color="violet"
                />
                <ActionButton 
                  icon={<CheckCircle className="w-4 h-4" />}
                  label="Create Task"
                  color="emerald"
                />
                <ActionButton 
                  icon={<FileText className="w-4 h-4" />}
                  label="Upload Document"
                  color="blue"
                />
                <ActionButton 
                  icon={<Mail className="w-4 h-4" />}
                  label="Check AgentMail"
                  color="amber"
                />
              </div>
            </div>

            {/* Agent Status */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Marvin Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Status</span>
                  <span className="flex items-center gap-2 text-sm text-emerald-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Active Jobs</span>
                  <span className="text-sm text-slate-200">2 running</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Email</span>
                  <span className="text-xs text-slate-500 font-mono">widecenter550...</span>
                </div>
                <div className="pt-3 border-t border-slate-800">
                  <p className="text-xs text-slate-500">Last action: 2m ago</p>
                </div>
              </div>
            </div>

            {/* Cron Jobs */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Automations</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-200">Morning Brief</p>
                    <p className="text-xs text-slate-500">Daily 8:00 AM</p>
                  </div>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon, title, value, change, subtitle, color }: {
  icon: React.ReactNode
  title: string
  value: string
  change?: string
  subtitle?: string
  color: string
}) {
  const colors: Record<string, string> = {
    violet: 'from-violet-500/20 to-violet-600/20 border-violet-500/30 text-violet-400',
    emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
    amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400',
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${colors[color]} border p-5`}>
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg bg-${color}-500/20`}>
          {icon}
        </div>
        {change && (
          <span className="text-xs font-medium text-slate-400">{change}</span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-slate-400">{title}</p>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

function BriefItem({ icon, label, value }: { icon: string, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/50 border border-slate-800/50">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-sm font-medium text-slate-300">{label}</p>
        <p className="text-xs text-slate-500">{value}</p>
      </div>
    </div>
  )
}

function StatusBadge({ status, label, count }: { status: string, label: string, count: number }) {
  const colors: Record<string, string> = {
    waiting: 'bg-slate-700 text-slate-300',
    success: 'bg-emerald-500/20 text-emerald-400',
    urgent: 'bg-rose-500/20 text-rose-400',
  }

  return (
    <div className={`px-4 py-2 rounded-lg ${colors[status]} text-sm font-medium`}>
      {count} {label}
    </div>
  )
}

function ActivityRow({ time, icon, title, description, color }: {
  time: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  const colors: Record<string, string> = {
    violet: 'bg-violet-500/20 text-violet-400',
    emerald: 'bg-emerald-500/20 text-emerald-400',
    blue: 'bg-blue-500/20 text-blue-400',
  }

  return (
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-lg ${colors[color]}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-200">{title}</p>
          <span className="text-xs text-slate-600">{time}</span>
        </div>
        <p className="text-sm text-slate-500 truncate">{description}</p>
      </div>
    </div>
  )
}

function ActionButton({ icon, label, color }: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  const colors: Record<string, string> = {
    violet: 'hover:bg-violet-500/20 hover:border-violet-500/50',
    emerald: 'hover:bg-emerald-500/20 hover:border-emerald-500/50',
    blue: 'hover:bg-blue-500/20 hover:border-blue-500/50',
    amber: 'hover:bg-amber-500/20 hover:border-amber-500/50',
  }

  return (
    <button className={`w-full flex items-center gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-left transition-all ${colors[color]} group`}>
      <span className="text-slate-400 group-hover:text-white transition-colors">{icon}</span>
      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{label}</span>
    </button>
  )
}
