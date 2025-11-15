import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function CalendarView() {
  const [view, setView] = useState<'month' | 'week'>('month');
  const [selectedDay, setSelectedDay] = useState(15);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const events = [
    { day: 15, title: 'Math Assignment Due', color: '#D94625' },
    { day: 15, title: 'Biology Quiz', color: '#D9A282' },
    { day: 16, title: 'Club Meeting', color: '#A69B65' },
    { day: 18, title: 'Chemistry Lab', color: '#BF8984' },
    { day: 20, title: 'History Essay Due', color: '#D94625' },
  ];

  const todayEvents = events.filter(e => e.day === selectedDay);

  return (
    <div className="min-h-screen bg-[#F5F4F2] pb-24">
      {/* Header */}
      <div className="bg-white px-5 py-6 border-b border-[#D9D8D7] shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 rounded-full bg-[#F5F4F2] flex items-center justify-center">
            <ChevronLeft className="text-[#A69B65]" size={20} />
          </button>
          <h2 className="text-[#A69B65]">November 2025</h2>
          <button className="w-10 h-10 rounded-full bg-[#F5F4F2] flex items-center justify-center">
            <ChevronRight className="text-[#A69B65]" size={20} />
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 bg-[#F5F4F2] rounded-2xl p-1">
          <button
            onClick={() => setView('month')}
            className="flex-1 py-2 rounded-xl text-sm transition-all"
            style={{
              backgroundColor: view === 'month' ? 'white' : 'transparent',
              color: view === 'month' ? '#A69B65' : '#D9D8D7',
            }}
          >
            Month
          </button>
          <button
            onClick={() => setView('week')}
            className="flex-1 py-2 rounded-xl text-sm transition-all"
            style={{
              backgroundColor: view === 'week' ? 'white' : 'transparent',
              color: view === 'week' ? '#A69B65' : '#D9D8D7',
            }}
          >
            Week
          </button>
        </div>
      </div>

      <div className="px-5 pt-6">
        {/* Calendar Grid */}
        <div className="bg-white rounded-3xl p-4 shadow-md mb-6">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-sm text-[#D9D8D7]">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            
            {daysInMonth.map((day) => {
              const hasEvents = events.some(e => e.day === day);
              const isSelected = day === selectedDay;
              
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className="aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all"
                  style={{
                    backgroundColor: isSelected ? '#A69B65' : hasEvents ? '#A69B65/10' : 'transparent',
                    color: isSelected ? 'white' : '#A69B65',
                  }}
                >
                  <span className="text-sm">{day}</span>
                  {hasEvents && !isSelected && (
                    <div className="absolute bottom-1 flex gap-0.5">
                      {events.filter(e => e.day === day).slice(0, 3).map((event, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: event.color }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Events */}
        <div>
          <h3 className="text-[#A69B65] mb-4">Events for Nov {selectedDay}</h3>
          <div className="space-y-3">
            {todayEvents.length > 0 ? (
              todayEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4"
                >
                  <div
                    className="w-1 h-12 rounded-full"
                    style={{ backgroundColor: event.color }}
                  />
                  <div className="flex-1">
                    <h4 className="text-[#A69B65] mb-1">{event.title}</h4>
                    <p className="text-sm text-[#D9D8D7]">All day</p>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: event.color }}
                  />
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <p className="text-[#D9D8D7]">No events scheduled for this day</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-[#D94625]/10 to-[#D94625]/5 rounded-2xl p-4 border-2 border-[#D94625]/20">
            <p className="text-[#D94625] text-sm mb-1">This Week</p>
            <p className="text-2xl text-[#D94625]">8 tasks</p>
          </div>
          <div className="bg-gradient-to-br from-[#A69B65]/10 to-[#A69B65]/5 rounded-2xl p-4 border-2 border-[#A69B65]/20">
            <p className="text-[#A69B65] text-sm mb-1">Completed</p>
            <p className="text-2xl text-[#A69B65]">5 tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
}