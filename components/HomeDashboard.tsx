import { Plus, Play, BookOpen, TrendingUp } from 'lucide-react';
import logoImage from 'figma:asset/213b25174b29fb59fd97aae264ae0349c0ca4692.png';

interface HomeDashboardProps {
  onCreateTask: () => void;
}

export function HomeDashboard({ onCreateTask }: HomeDashboardProps) {
  const tasks = [
    { id: 1, title: 'Finish Math Assignment', class: 'Calculus II', priority: 'high', time: '2h', color: '#D94625' },
    { id: 2, title: 'Review Biology Notes', class: 'Biology 101', priority: 'medium', time: '1h', color: '#D9A282' },
    { id: 3, title: 'Club Meeting Prep', class: 'Debate Club', priority: 'low', time: '30m', color: '#A69B65' },
    { id: 4, title: 'Read Chapter 5', class: 'History', priority: 'medium', time: '1.5h', color: '#BF8984' },
  ];

  return (
    <div className="pb-24 px-5 pt-14">
      {/* Header with Logo */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-[#D94625] mb-1">Good Morning! 👋</h1>
          <p className="text-[#A69B65]">Saturday, November 15</p>
        </div>
        <img src={logoImage} alt="ePlannerAI" className="w-12 h-12 rounded-2xl" />
      </div>

      {/* AI-Generated Daily Plan */}
      <div className="bg-gradient-to-br from-[#A69B65] to-[#BF8984] rounded-3xl p-5 mb-6 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="text-white mb-2">AI Daily Plan</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Focus on your Math Assignment first (2 hours). Take a 15-min walk break, then review Biology notes. You'll have time for club prep in the evening.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <button
          onClick={onCreateTask}
          className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-2 active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-xl bg-[#D94625]/10 flex items-center justify-center">
            <Plus className="text-[#D94625]" size={24} />
          </div>
          <span className="text-sm text-[#A69B65]">Add Task</span>
        </button>

        <button className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-2 active:scale-95 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-[#A69B65]/10 flex items-center justify-center">
            <Play className="text-[#A69B65]" size={24} />
          </div>
          <span className="text-sm text-[#A69B65]">Pomodoro</span>
        </button>

        <button className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-2 active:scale-95 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-[#BF8984]/10 flex items-center justify-center">
            <BookOpen className="text-[#BF8984]" size={24} />
          </div>
          <span className="text-sm text-[#A69B65]">Study Plan</span>
        </button>
      </div>

      {/* Today's Tasks */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#A69B65]">Today's Tasks</h2>
          <span className="text-sm text-[#D9D8D7]">4 tasks</span>
        </div>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4"
            >
              <div
                className="w-5 h-5 rounded-lg border-2 flex-shrink-0"
                style={{ borderColor: task.color }}
              />
              <div className="flex-1">
                <h3 className="text-[#A69B65] mb-1">{task.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#D9D8D7]">{task.class}</span>
                  <span className="text-sm text-[#D9D8D7]">•</span>
                  <span className="text-sm text-[#D9D8D7]">{task.time}</span>
                </div>
              </div>
              <div
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: task.color + '20',
                  color: task.color,
                }}
              >
                {task.priority}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Tracker */}
      <div className="bg-gradient-to-br from-[#D9A282] to-[#BF8984] rounded-3xl p-5 shadow-lg mb-6">
        <h3 className="text-white mb-3">🌱 Eco Impact</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-white/90 text-sm">Distance walked today</span>
            <span className="text-white">1.2 miles</span>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="bg-white rounded-2xl p-5 shadow-md border-2 border-[#D9D8D7]">
        <p className="text-[#A69B65] text-center italic">
          "You're doing great! Keep up the momentum and remember to take breaks. 💪"
        </p>
        <p className="text-[#D9D8D7] text-center text-sm mt-2">— Your AI Study Coach</p>
      </div>
    </div>
  );
}