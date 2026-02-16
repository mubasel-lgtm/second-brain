import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const dataDir = path.join(process.cwd(), 'data');
const dbPath = path.join(dataDir, 'db.json');

interface DB {
  memories: any[];
  tasks: any[];
  documents: any[];
  projects: any[];
  activities: any[];
}

function getDb(): DB {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dbPath)) {
    const emptyDb: DB = { memories: [], tasks: [], documents: [], projects: [], activities: [] };
    fs.writeFileSync(dbPath, JSON.stringify(emptyDb, null, 2));
    return emptyDb;
  }
  return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
}

function saveDb(db: DB) {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

// Memories
export function getMemories(limit = 50) {
  const db = getDb();
  return db.memories.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, limit);
}

export function getMemoryCount() {
  return getDb().memories.length;
}

export function createMemory(title: string, content: string, tags?: string) {
  const db = getDb();
  const memory = {
    id: uuidv4(),
    title,
    content,
    tags: tags || '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  db.memories.push(memory);
  logActivity('memory', 'Memory created', title);
  saveDb(db);
  return memory.id;
}

// Tasks
export function getTasks(status?: string) {
  const db = getDb();
  let tasks = db.tasks;
  if (status) {
    tasks = tasks.filter(t => t.status === status);
  }
  return tasks.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export function getTaskCount(status?: string) {
  const db = getDb();
  if (status) {
    return db.tasks.filter(t => t.status === status).length;
  }
  return db.tasks.length;
}

export function createTask(title: string, description?: string, priority = 'medium', dueDate?: string) {
  const db = getDb();
  const task = {
    id: uuidv4(),
    title,
    description: description || '',
    status: 'pending',
    priority,
    due_date: dueDate || null,
    created_at: new Date().toISOString(),
    completed_at: null
  };
  db.tasks.push(task);
  logActivity('task', 'Task created', title);
  saveDb(db);
  return task.id;
}

export function completeTask(id: string) {
  const db = getDb();
  const task = db.tasks.find(t => t.id === id);
  if (task) {
    task.status = 'completed';
    task.completed_at = new Date().toISOString();
    logActivity('task', 'Task completed', task.title);
    saveDb(db);
  }
}

// Documents
export function getDocuments() {
  return getDb().documents;
}

export function getDocumentCount() {
  return getDb().documents.length;
}

// Projects
export function getProjects() {
  return getDb().projects;
}

export function getProjectCount() {
  return getDb().projects.length;
}

// Activities
export function getActivities(limit = 20) {
  const db = getDb();
  return db.activities
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}

export function logActivity(type: string, title: string, description?: string) {
  const db = getDb();
  db.activities.push({
    id: uuidv4(),
    type,
    title,
    description: description || '',
    created_at: new Date().toISOString()
  });
  // Keep only last 100 activities
  if (db.activities.length > 100) {
    db.activities = db.activities.slice(-100);
  }
  saveDb(db);
}

// Stats
export function getStats() {
  return {
    memories: getMemoryCount(),
    tasks: getTaskCount('pending'),
    documents: getDocumentCount(),
    projects: getProjectCount()
  };
}
