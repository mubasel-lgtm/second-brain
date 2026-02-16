import { CheckCircle2, Circle, Clock, AlertCircle, Plus } from 'lucide-react'

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Review Notary Responses",
      status: "pending",
      priority: "high",
      due: "2026-02-18",
      category: "Business"
    },
    {
      id: 2,
      title: "Deploy Second Brain System",
      status: "in-progress",
      priority: "high",
      due: "2026-02-17",
      category: "Development"
    },
    {
      id: 3,
      title: "Set up Discord Content Factory",
      status: "pending",
      priority: "medium",
      due: "2026-02-18",
      category: "Content"
    },
    {
      id: 4,
      title: "Morning Brief Automation",
      status: "completed",
      priority: "high",
      due: "2026-02-17",
      category: "Automation"
    }
  ]

  const pendingTasks = tasks.filter(t => t.status !== 'completed')
  const completedTasks = tasks.filter(t => t.status === 'completed')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Tasks</h2>
          <p className="text-gray-600">{pendingTasks.length} pending, {completedTasks.length} completed</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          New Task
        </button>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-red-600">{tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length}</p>
          <p className="text-sm text-red-700">High Priority</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-yellow-600">{tasks.filter(t => t.priority === 'medium' && t.status !== 'completed').length}</p>
          <p className="text-sm text-yellow-700">Medium Priority</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-blue-600">{pendingTasks.length}</p>
          <p className="text-sm text-blue-700">Total Pending</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-green-600">{completedTasks.length}</p>
          <p className="text-sm text-green-700">Completed Today</p>
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Pending Tasks</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {pendingTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Completed</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {completedTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function TaskItem({ task }: { task: any }) {
  const priorityColors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-gray-600 bg-gray-50'
  }

  return (
    <div className="p-4 flex items-center gap-4 hover:bg-gray-50">
      <button className="flex-shrink-0">
        {task.status === 'completed' ? (
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        ) : (
          <Circle className="w-6 h-6 text-gray-400 hover:text-blue-600" />
        )}
      </button>
      
      <div className="flex-1">
        <p className={`font-medium ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
          {task.title}
        </p>
        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Due {task.due}
          </span>
          <span>{task.category}</span>
        </div>
      </div>

      <span className={`px-2 py-1 text-xs rounded ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
        {task.priority}
      </span>
    </div>
  )
}
