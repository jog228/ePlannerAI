import { Sparkles, Clock, Coffee, Check } from 'lucide-react';
import { useState } from 'react';

export function AIStudyPlan() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const studyPlan = {
    title: 'Math Assignment: Derivatives',
    totalTime: '2 hours',
    subtasks: [
      { id: 1, title: 'Review derivative rules', duration: '20 min', type: 'study' },
      { id: 2, title: 'Break: Stretch & hydrate', duration: '5 min', type: 'break' },
      { id: 3, title: 'Solve practice problems 1-5', duration: '25 min', type: 'study' },
      { id: 4, title: 'Break: Short walk', duration: '10 min', type: 'break' },
      { id: 5, title: 'Solve practice problems 6-10', duration: '25 min', type: 'study' },
      { id: 6, title: 'Break: Refill water', duration: '5 min', type: 'break' },
      { id: 7, title: 'Review and verify answers', duration: '20 min', type: 'study' },
      { id: 8, title: 'Break: Celebrate! 🎉', duration: '10 min', type: 'break' },
    ],
  };

  const toggleStep = (id: number) => {
    setCompletedSteps((prev) =>
      prev.includes(id) ? prev.filter((stepId) => stepId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F4F2] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#A69B65] to-[#BF8984] px-5 py-8">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h1 className="text-white mb-1">AI Study Plan</h1>
            <p className="text-white/90 text-sm">Personalized for your success</p>
          </div>
        </div>
      </div>

      <div className="px-5 pt-6">
        {/* Plan Overview */}
        <div className="bg-white rounded-3xl p-5 shadow-lg mb-6 border-2 border-[#A69B65]/20">
          <h2 className="text-[#A69B65] mb-3">{studyPlan.title}</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="text-[#D9D8D7]" size={16} />
              <span className="text-[#D9D8D7] text-sm">{studyPlan.totalTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-[#A69B65]" size={16} />
              <span className="text-[#A69B65] text-sm">
                {completedSteps.length}/{studyPlan.subtasks.length} completed
              </span>
            </div>
          </div>
          <div className="w-full h-2 bg-[#D9D8D7]/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#A69B65] to-[#BF8984] rounded-full transition-all"
              style={{ width: `${(completedSteps.length / studyPlan.subtasks.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Pomodoro Suggestion */}
        <div className="bg-gradient-to-br from-[#D9A282]/20 to-[#BF8984]/20 rounded-2xl p-4 mb-6 border-2 border-[#D9A282]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D9A282]/30 rounded-xl flex items-center justify-center">
              <Clock className="text-[#D9A282]" size={20} />
            </div>
            <div>
              <h3 className="text-[#A69B65] mb-1">Pomodoro Mode</h3>
              <p className="text-sm text-[#D9A282]">25-min focused work + 5-min breaks</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-[#D9A282] text-white rounded-xl text-sm active:scale-95 transition-transform">
              Start
            </button>
          </div>
        </div>

        {/* Study Steps */}
        <div className="space-y-3">
          <h3 className="text-[#A69B65] mb-2">Study Breakdown</h3>
          {studyPlan.subtasks.map((task, index) => {
            const isCompleted = completedSteps.includes(task.id);
            const isBreak = task.type === 'break';

            return (
              <div
                key={task.id}
                className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4 transition-all"
                style={{
                  opacity: isCompleted ? 0.6 : 1,
                  backgroundColor: isBreak ? '#F5F4F2' : 'white',
                }}
              >
                <button
                  onClick={() => toggleStep(task.id)}
                  className="w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{
                    borderColor: isBreak ? '#D9A282' : '#A69B65',
                    backgroundColor: isCompleted ? (isBreak ? '#D9A282' : '#A69B65') : 'transparent',
                  }}
                >
                  {isCompleted && <Check className="text-white" size={16} />}
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {isBreak && <Coffee className="text-[#D9A282]" size={16} />}
                    <h4
                      className={isCompleted ? 'line-through' : ''}
                      style={{ color: isBreak ? '#D9A282' : '#A69B65' }}
                    >
                      {task.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[#D9D8D7]">{task.duration}</p>
                </div>

                <div
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: isBreak ? '#D9A282' + '20' : '#A69B65' + '20',
                    color: isBreak ? '#D9A282' : '#A69B65',
                  }}
                >
                  {task.type}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sustainable Break Tips */}
        <div className="mt-6 bg-gradient-to-br from-[#A69B65]/10 to-[#BF8984]/10 rounded-3xl p-5 border-2 border-[#A69B65]/20">
          <h3 className="text-[#A69B65] mb-3">🌿 Sustainable Break Ideas</h3>
          <ul className="space-y-2 text-sm text-[#A69B65]">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Take a 5-minute walk to boost focus and reduce carbon footprint</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Refill your reusable water bottle instead of using disposables</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Stretch near a window for natural light exposure</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}