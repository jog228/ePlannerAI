import { Leaf, TrendingUp, Droplet, Footprints, Award } from 'lucide-react';

export function SustainabilityDashboard() {
  const weekData = [
    { day: 'Mon', walked: 1.5, drove: 0.5 },
    { day: 'Tue', walked: 2.0, drove: 0 },
    { day: 'Wed', walked: 1.2, drove: 1.0 },
    { day: 'Thu', walked: 1.8, drove: 0.3 },
    { day: 'Fri', walked: 2.2, drove: 0 },
    { day: 'Sat', walked: 1.2, drove: 0 },
    { day: 'Sun', walked: 0, drove: 0 },
  ];

  const maxValue = Math.max(...weekData.map(d => d.walked + d.drove));

  return (
    <div className="min-h-screen bg-[#F5F4F2] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#A69B65] to-[#BF8984] px-5 py-8">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Leaf className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h1 className="text-white mb-1">Eco Dashboard</h1>
            <p className="text-white/90 text-sm">Your sustainability impact</p>
          </div>
        </div>
      </div>

      <div className="px-5 pt-6">
        {/* Eco Score */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6 border-2 border-[#A69B65]/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-[#A69B65] mb-1">Weekly Eco Score</h2>
              <p className="text-sm text-[#D9D8D7]">Keep up the great work!</p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A69B65] to-[#BF8984] flex items-center justify-center">
              <Award className="text-white" size={32} />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl text-[#A69B65]">85</span>
            <span className="text-xl text-[#D9D8D7] mb-1">/100</span>
          </div>
          <div className="mt-3 w-full h-3 bg-[#D9D8D7]/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#A69B65] to-[#BF8984] rounded-full"
              style={{ width: '85%' }}
            />
          </div>
        </div>

        {/* Travel Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-br from-[#D9A282]/20 to-[#D9A282]/10 rounded-2xl p-4 border-2 border-[#D9A282]/30">
            <div className="flex items-center gap-2 mb-2">
              <Footprints className="text-[#D9A282]" size={20} />
              <span className="text-sm text-[#D9A282]">Walking</span>
            </div>
            <p className="text-2xl text-[#D9A282]">9.9 mi</p>
            <p className="text-xs text-[#D9A282]/70 mt-1">This week</p>
          </div>

          <div className="bg-gradient-to-br from-[#BF8984]/20 to-[#BF8984]/10 rounded-2xl p-4 border-2 border-[#BF8984]/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-[#BF8984]" size={20} />
              <span className="text-sm text-[#BF8984]">CO₂ Saved</span>
            </div>
            <p className="text-2xl text-[#BF8984]">4.2 kg</p>
            <p className="text-xs text-[#BF8984]/70 mt-1">This week</p>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="bg-white rounded-3xl p-5 shadow-md mb-6">
          <h3 className="text-[#A69B65] mb-4">Weekly Activity</h3>
          <div className="flex items-end justify-between gap-2 h-40">
            {weekData.map((data, index) => {
              const totalHeight = ((data.walked + data.drove) / maxValue) * 100;
              const walkedHeight = (data.walked / (data.walked + data.drove || 1)) * totalHeight;

              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex-1 w-full flex flex-col justify-end">
                    {(data.walked > 0 || data.drove > 0) && (
                      <div className="w-full rounded-t-lg overflow-hidden" style={{ height: `${totalHeight}%` }}>
                        {data.walked > 0 && (
                          <div
                            className="w-full bg-[#A69B65]"
                            style={{ height: `${walkedHeight}%` }}
                          />
                        )}
                        {data.drove > 0 && (
                          <div
                            className="w-full bg-[#D9D8D7]"
                            style={{ height: `${100 - walkedHeight}%` }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-[#D9D8D7]">{data.day}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#D9D8D7]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#A69B65]" />
              <span className="text-sm text-[#D9D8D7]">Walking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#D9D8D7]" />
              <span className="text-sm text-[#D9D8D7]">Driving</span>
            </div>
          </div>
        </div>

        {/* Sustainability Reminders */}
        <div className="bg-gradient-to-br from-[#D94625]/10 to-[#D94625]/5 rounded-2xl p-4 mb-6 border-2 border-[#D94625]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D94625]/20 rounded-xl flex items-center justify-center">
              <Droplet className="text-[#D94625]" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-[#D94625] mb-1">Refill Reminder</h3>
              <p className="text-sm text-[#D94625]/70">Time to refill your water bottle!</p>
            </div>
            <button className="px-3 py-1 bg-[#D94625] text-white rounded-lg text-sm active:scale-95 transition-transform">
              Done
            </button>
          </div>
        </div>

        {/* AI Tips */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <h3 className="text-[#A69B65] mb-3">🌱 AI Sustainability Tips</h3>
          <div className="space-y-3">
            <div className="bg-[#F5F4F2] rounded-2xl p-4">
              <p className="text-[#A69B65] text-sm leading-relaxed">
                <span className="font-medium">Walk to your next class!</span> It's only 0.3 miles away and you'll save 0.15 kg of CO₂ while getting some fresh air.
              </p>
            </div>
            <div className="bg-[#F5F4F2] rounded-2xl p-4">
              <p className="text-[#A69B65] text-sm leading-relaxed">
                <span className="font-medium">Bring your reusable mug</span> to the coffee shop tomorrow. You're on track to save 12 disposable cups this month!
              </p>
            </div>
            <div className="bg-[#F5F4F2] rounded-2xl p-4">
              <p className="text-[#A69B65] text-sm leading-relaxed">
                <span className="font-medium">Study near a window</span> during the day to reduce energy usage from artificial lighting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
