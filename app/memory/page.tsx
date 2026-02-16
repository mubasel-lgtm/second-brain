import { Search, Plus, Calendar, Tag } from 'lucide-react'

export default function MemoriesPage() {
  const memories = [
    {
      id: 1,
      title: "Notar Research Results",
      date: "2026-02-16",
      tags: ["business", "gmbh", "notary"],
      summary: "Contacted 17 German online notaries for GmbH transfer from Dubai",
      content: "Successfully sent emails to 17 verified notaries..."
    },
    {
      id: 2,
      title: "Video Hook Extraction Process",
      date: "2026-02-16",
      tags: ["content", "automation", "video"],
      summary: "Created automated system for extracting video hooks using Whisper",
      content: "Process: Download → 30s clip → Transcribe → Extract timestamps → Cut..."
    },
    {
      id: 3,
      title: "Second Brain System Design",
      date: "2026-02-17",
      tags: ["system", "knowledge-management", "nextjs"],
      summary: "Building comprehensive knowledge management system",
      content: "Components: Dashboard, Memory bank, Task manager, Document store..."
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Memory Bank</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Add Memory
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search memories..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>All Tags</option>
          <option>Business</option>
          <option>Personal</option>
          <option>Automation</option>
        </select>
      </div>

      {/* Memories List */}
      <div className="space-y-4">
        {memories.map(memory => (
          <div key={memory.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{memory.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {memory.date}
              </div>
            </div>
            
            <p className="text-gray-600 mb-3">{memory.summary}</p>
            
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              <div className="flex gap-2">
                {memory.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
