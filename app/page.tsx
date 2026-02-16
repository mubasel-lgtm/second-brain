'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Search, Bell, Plus, Settings, Trash2, CheckSquare, 
  FileText, Bookmark, Zap, Clock, Brain, MoreHorizontal,
  ChevronRight, TrendingUp, Mail, X
} from 'lucide-react';

interface Memory {
  id: string;
  title: string;
  content: string;
  tags: string;
  created_at: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  created_at: string;
}

interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  created_at: string;
}

interface Stats {
  memories: number;
  tasks: number;
  documents: number;
  projects: number;
}

export default function Dashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const [stats, setStats] = useState<Stats>({ memories: 0, tasks: 0, documents: 0, projects: 0 });
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddMemory, setShowAddMemory] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newMemory, setNewMemory] = useState({ title: '', content: '', tags: '' });
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium' });
  const [currentTime, setCurrentTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 18) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      setStats(data.stats);
      setActivities(data.activities);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddMemory(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch('/api/memories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMemory)
      });
      setNewMemory({ title: '', content: '', tags: '' });
      setShowAddMemory(false);
      fetchData();
    } catch (error) {
      console.error('Failed to add memory:', error);
    }
  }

  async function handleAddTask(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });
      setNewTask({ title: '', description: '', priority: 'medium' });
      setShowAddTask(false);
      fetchData();
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Clock, href: '/' },
    { id: 'memories', label: 'Memories', icon: Brain, href: '/memory', count: stats.memories },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare, href: '/tasks', count: stats.tasks },
    { id: 'documents', label: 'Documents', icon: FileText, href: '/documents', count: stats.documents },
    { id: 'projects', label: 'Projects', icon: Zap, href: '/projects', count: stats.projects },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 flex flex-col bg-gray-50/50">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white text-xs font-medium">
              M
            </div>
            <span className="text-sm font-medium text-gray-900">Mubasel&apos;s Brain</span>
          </div>
        </div>

        <div className="px-3 py-2">
          <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-500 bg-white border border-gray-200 rounded-md">
            <Search className="w-4 h-4" />
            <span>Search</span>
            <span className="ml-auto text-xs text-gray-400">⌘+P</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
                pathname === item.href
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.count > 0 && (
                <span className="text-xs text-gray-400">{item.count}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-200 space-y-0.5">
          <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <Trash2 className="w-4 h-4" />
            <span>Trash</span>
          </button>
          <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-8 py-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {greeting}, Mubasel
              </h1>
              <p className="text-gray-500">Here&apos;s everything that needs your attention today.</p>
            </div>
            <div className="flex items-center gap-3">
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
            <StatCard icon={Brain} label="Memories" value={stats.memories} color="bg-blue-50 text-blue-600" />
            <StatCard icon={CheckSquare} label="Tasks" value={stats.tasks} color="bg-green-50 text-green-600" />
            <StatCard icon={FileText} label="Documents" value={stats.documents} color="bg-purple-50 text-purple-600" />
            <StatCard icon={Zap} label="Projects" value={stats.projects} color="bg-amber-50 text-amber-600" />
          </div>

          {/* Content Blocks */}
          <div className="space-y-4">
            {/* Quick Actions */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setShowAddMemory(true)}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Memory
              </button>
              <button
                onClick={() => setShowAddTask(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Task
              </button>
            </div>

            {/* Morning Brief */}
            <ContentBlock icon={TrendingUp} title="Morning Brief" subtitle="Daily at 8:00 AM">
              <div className="grid grid-cols-2 gap-3 mt-4">
                <BriefItem label="Dubai AI News" value="3 new stories" />
                <BriefItem label="Business Ideas" value="2 opportunities" />
                <BriefItem label="Today's Tasks" value={`${stats.tasks} pending`} />
                <BriefItem label="Agent Actions" value="Active" />
              </div>
            </ContentBlock>

            {/* Recent Activity */}
            <ContentBlock icon={Clock} title="Recent Activity">
              <div className="mt-4 space-y-3">
                {activities.length === 0 ? (
                  <p className="text-sm text-gray-400">No recent activity</p>
                ) : (
                  activities.slice(0, 5).map((activity) => (
                    <ActivityRow
                      key={activity.id}
                      time={new Date(activity.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      text={activity.title}
                    />
                  ))
                )}
              </div>
            </ContentBlock>

            {/* Agent Status */}
            <ContentBlock icon={Mail} title="Marvin Status" subtitle="Your AI assistant">
              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-600">Online</span>
                </div>
                <span className="text-sm text-gray-500">widecenter550@agentmail.to</span>
              </div>
            </ContentBlock>
          </div>
        </div>
      </main>

      {/* Add Memory Modal */}
      {showAddMemory && (
        <Modal onClose={() => setShowAddMemory(false)} title="Add Memory">
          <form onSubmit={handleAddMemory} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={newMemory.title}
                onChange={(e) => setNewMemory({ ...newMemory, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                value={newMemory.content}
                onChange={(e) => setNewMemory({ ...newMemory, content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black h-24"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <input
                type="text"
                value={newMemory.tags}
                onChange={(e) => setNewMemory({ ...newMemory, tags: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="comma, separated, tags"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
              >
                Save Memory
              </button>
              <button
                type="button"
                onClick={() => setShowAddMemory(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Add Task Modal */}
      {showAddTask && (
        <Modal onClose={() => setShowAddTask(false)} title="Add Task">
          <form onSubmit={handleAddTask} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black h-20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
              >
                Create Task
              </button>
              <button
                type="button"
                onClick={() => setShowAddTask(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }: { icon: any, label: string, value: number, color: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center mb-3`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function ContentBlock({ icon: Icon, title, subtitle, children }: { icon: any, title: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors bg-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-gray-700" />
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
  );
}

function BriefItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm text-gray-900 font-medium">{value}</span>
    </div>
  );
}

function ActivityRow({ time, text }: { time: string, text: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-400 w-16">{time}</span>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}

function Modal({ onClose, title, children }: { onClose: () => void, title: string, children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
