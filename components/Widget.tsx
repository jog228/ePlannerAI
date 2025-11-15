"use client";

import Image from "public/logo.png";
import { Calendar, AlertCircle } from "lucide-react";

export function Widget() {
  // temporary test data
  const upcomingTasks = [
    { id: 1, title: "Math Assignment Due", time: "Today, 11:59 PM", priority: "high", color: "#D94625" },
    { id: 2, title: "Biology Quiz", time: "Today, 2:00 PM", priority: "high", color: "#D9A282" },
    { id: 3, title: "Club Meeting", time: "Tomorrow, 4:00 PM", priority: "medium", color: "#A69B65" },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1E] p-6 flex items-start justify-center pt-20">
      <div className="w-full max-w-sm space-y-4">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-white/60 text-sm mb-2">iPhone Home Screen Widget</p>
          <p className="text-white/40 text-xs">Swipe through widgets to see ePlannerAI</p>
        </div>

        {/* SMALL WIDGET */}
        <div className="bg-[#F5F4F2] rounded-3xl p-4 shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ePlannerAI"
                width={32}
                height={32}
                className="rounded-xl"
              />
              <span className="text-[#A69B65]">Today</span>
            </div>
            <span className="text-xs text-[#D9D8D7]">Nov 15</span>
          </div>

          <div className="space-y-2">
            {upcomingTasks.slice(0, 2).map((task) => (
              <div key={task.id} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: task.color }}
                />
                <span className="text-sm text-[#A69B65] flex-1 truncate">{task.title}</span>
                <span className="text-xs text-[#D9D8D7]">{task.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MEDIUM WIDGET */}
        <div className="bg-[#F5F4F2] rounded-3xl p-5 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ePlannerAI"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <div>
                <h3 className="text-[#A69B65]">ePlannerAI</h3>
                <p className="text-xs text-[#D9D8D7]">Today's Schedule</p>
              </div>
            </div>
            <Calendar className="text-[#A69B65]" size={20} />
          </div>

          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: task.color }} />
                <div className="flex-1 min-w-0">
                  <h4 className="text-[#A69B65] truncate">{task.title}</h4>
                  <p className="text-xs text-[#D9D8D7]">{task.time}</p>
                </div>
                {task.priority === "high" && (
                  <AlertCircle className="text-[#D94625] flex-shrink-0" size={16} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#D9D8D7] flex items-center justify-between">
            <span className="text-xs text-[#D9D8D7]">3 tasks remaining</span>
            <span className="text-xs text-[#A69B65]">View all →</span>
          </div>
        </div>

        {/* LARGE WIDGET */}
        <div className="bg-[#F5F4F2] rounded-3xl p-5 shadow-2xl">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ePlannerAI"
                width={50}
                height={50}
                className="rounded-xl"
              />
              <div>
                <h2 className="text-[#A69B65]">ePlannerAI</h2>
                <p className="text-sm text-[#D9D8D7]">Saturday, November 15</p>
              </div>
            </div>
          </div>

          {/* daily AI tip */}
          <div className="bg-gradient-to-br from-[#A69B65] to-[#BF8984] rounded-2xl p-4 mb-4">
            <p className="text-white text-sm leading-relaxed">
              💡 Focus on Math Assignment first (2h). Take a walk break, then review Biology.
            </p>
          </div>

          {/* tasks */}
          <h3 className="text-[#A69B65] text-sm mb-2">Priority Tasks</h3>
          <div className="space-y-2 mb-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="bg-white rounded-xl p-3 flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded border-2"
                  style={{ borderColor: task.color }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-[#A69B65] text-sm truncate">{task.title}</h4>
                  <p className="text-xs text-[#D9D8D7]">{task.time}</p>
                </div>
                <div
                  className="px-2 py-1 rounded-lg text-xs"
                  style={{
                    backgroundColor: task.color + "20",
                    color: task.color,
                  }}
                >
                  {task.priority}
                </div>
              </div>
            ))}
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#D9A282]/20 rounded-xl p-3 border border-[#D9A282]/30">
              <p className="text-xs text-[#D9A282] mb-1">Walked Today</p>
              <p className="text-[#D9A282]">1.2 miles</p>
            </div>
            <div className="bg-[#A69B65]/20 rounded-xl p-3 border border-[#A69B65]/30">
              <p className="text-xs text-[#A69B65] mb-1">Eco Score</p>
              <p className="text-[#A69B65]">85/100</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}