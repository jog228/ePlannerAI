import { X, Calendar, Clock, Tag, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface TaskCreationProps {
  onClose: () => void;
}

export function TaskCreation({ onClose }: TaskCreationProps) {
  const [title, setTitle] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [aiSubtasks, setAiSubtasks] = useState(false);

  const classes = ['Calculus II', 'Biology 101', 'History', 'Debate Club', 'Chemistry'];
  const categories = [
    { name: 'Assignment', color: '#D94625' },
    { name: 'Exam', color: '#D9A282' },
    { name: 'Club Event', color: '#A69B65' },
    { name: 'Personal', color: '#BF8984' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F2] pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white px-5 py-4 flex items-center justify-between border-b border-[#D9D8D7] shadow-sm">
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-[#F5F4F2] flex items-center justify-center">
          <X className="text-[#A69B65]" size={20} />
        </button>
        <h2 className="text-[#A69B65]">Create Task</h2>
        <div className="w-10" />
      </div>

      <div className="px-5 pt-6 space-y-5">
        {/* Title Input */}
        <div>
          <label className="block text-[#A69B65] mb-2">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title..."
            className="w-full bg-white rounded-2xl px-4 py-3 border-2 border-[#D9D8D7] focus:border-[#A69B65] outline-none transition-colors"
          />
        </div>

        {/* Class Selection */}
        <div>
          <label className="block text-[#A69B65] mb-2">Class</label>
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full bg-white rounded-2xl px-4 py-3 border-2 border-[#D9D8D7] focus:border-[#A69B65] outline-none appearance-none"
            >
              <option value="">Select a class...</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[#A69B65] mb-2">Due Date</label>
            <div className="bg-white rounded-2xl px-4 py-3 border-2 border-[#D9D8D7] flex items-center gap-2">
              <Calendar className="text-[#A69B65]" size={18} />
              <input
                type="date"
                className="flex-1 outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#A69B65] mb-2">Est. Time</label>
            <div className="bg-white rounded-2xl px-4 py-3 border-2 border-[#D9D8D7] flex items-center gap-2">
              <Clock className="text-[#A69B65]" size={18} />
              <input
                type="text"
                placeholder="2h"
                className="flex-1 outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div>
          <label className="block text-[#A69B65] mb-3">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className="px-4 py-2 rounded-full text-sm transition-all"
                style={{
                  backgroundColor: selectedCategory === category.name ? category.color : category.color + '20',
                  color: selectedCategory === category.name ? 'white' : category.color,
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* AI Subtasks Toggle */}
        <div className="bg-gradient-to-br from-[#A69B65]/10 to-[#BF8984]/10 rounded-2xl p-4 border-2 border-[#A69B65]/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#A69B65]" size={20} />
              <span className="text-[#A69B65]">Break into AI subtasks</span>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={aiSubtasks}
                onChange={(e) => setAiSubtasks(e.target.checked)}
                className="sr-only peer"
              />
              <div
                className="w-12 h-6 rounded-full peer peer-checked:bg-[#A69B65] transition-colors cursor-pointer"
                style={{ backgroundColor: aiSubtasks ? '#A69B65' : '#D9D8D7' }}
              >
                <div
                  className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"
                  style={{ transform: aiSubtasks ? 'translateX(24px)' : 'translateX(0)' }}
                />
              </div>
            </label>
          </div>
          <p className="text-sm text-[#A69B65]/70">
            Let AI break down this task into manageable steps
          </p>
        </div>

        {/* Generate Study Plan Button */}
        <button className="w-full bg-gradient-to-r from-[#A69B65] to-[#BF8984] text-white rounded-2xl py-4 flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
          <Sparkles size={20} />
          <span>Generate Study Plan Using AI</span>
        </button>

        {/* Create Task Button */}
        <button className="w-full bg-[#D94625] text-white rounded-2xl py-4 shadow-lg active:scale-95 transition-transform">
          Create Task
        </button>
      </div>
    </div>
  );
}
