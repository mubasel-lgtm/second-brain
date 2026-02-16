import { Brain, FileText, CheckCircle, Clock, TrendingUp, Lightbulb } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Good Morning, Mubasel</h2>
          <p className="text-gray-600 mt-1">Here's your daily briefing</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Last updated</p>
          <p className="font-medium">{new Date().toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard 
          icon={<Brain className="w-6 h-6 text-blue-600" />}
          title="Total Memories"
          value="127"
          trend="+5 this week"
        />
        <StatCard 
          icon={<CheckCircle className="w-6 h-6 text-green-600" />}
          title="Tasks Completed"
          value="43"
          trend="8 pending"
        />
        <StatCard 
          icon={<FileText className="w-6 h-6 text-purple-600" />}
          title="Documents"
          value="32"
          trend="3 new"
        />
        <StatCard 
          icon={<Clock className="w-6 h-6 text-orange-600" />}
          title="Active Projects"
          value="5"
          trend="2 urgent"
        />
      </div>

      {/* Daily Brief Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Morning Brief Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Today's Morning Brief</h3>
          </div>
          <div className="space-y-3 text-sm text-gray-600">
            <p>📰 <strong>News:</strong> AI regulation updates, Pet industry trends</p>
            <p>💡 <strong>Business Ideas:</strong> 3 opportunities identified</p>
            <p>✅ <strong>Tasks:</strong> 5 high-priority items</p>
            <p>🤝 <strong>Collaboration:</strong> 2 tasks we can do together</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            View Full Brief
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            <h3 className="text-lg font-semibold">Quick Actions</h3>
          </div>
          <div className="space-y-3">
            <QuickAction 
              title="Add New Memory"
              description="Save an insight or idea"
              href="/memory/new"
            />
            <QuickAction 
              title="Create Task"
              description="Add to today's todo list"
              href="/tasks/new"
            />
            <QuickAction 
              title="Upload Document"
              description="Add to knowledge base"
              href="/documents/new"
            />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <ActivityItem 
            time="2 hours ago"
            action="Added new memory"
            detail="Notar research results - 17 contacts"
          />
          <ActivityItem 
            time="4 hours ago"
            action="Completed task"
            detail="Extracted 27 video hooks"
          />
          <ActivityItem 
            time="Yesterday"
            action="Morning brief sent"
            detail="5 news stories, 3 business ideas"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, title, value, trend }: { 
  icon: React.ReactNode
  title: string
  value: string
  trend: string
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <span className="text-xs text-gray-500">{trend}</span>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  )
}

function QuickAction({ title, description, href }: {
  title: string
  description: string
  href: string
}) {
  return (
    <a href={href} className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  )
}

function ActivityItem({ time, action, detail }: {
  time: string
  action: string
  detail: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
      <div>
        <p className="text-sm text-gray-500">{time}</p>
        <p className="font-medium text-gray-900">{action}</p>
        <p className="text-sm text-gray-600">{detail}</p>
      </div>
    </div>
  )
}
