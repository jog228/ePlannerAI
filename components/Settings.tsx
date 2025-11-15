import { Bell, Calendar, BookOpen, Upload, User, Moon, Globe, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';

export function Settings() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  const handleInstallClick = () => {
    // Clear the dismissed state to show the prompt again
    localStorage.removeItem('addToHomeScreenDismissed');
    // Reload to trigger the prompt
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#F5F4F2] pb-24">
      {/* Header */}
      <div className="bg-white px-5 py-8 border-b border-[#D9D8D7] shadow-sm">
        <h1 className="text-[#A69B65] mb-2">Settings</h1>
        <p className="text-[#D9D8D7] text-sm">Customize your experience</p>
      </div>

      <div className="px-5 pt-6">
        {/* Profile Section */}
        <div className="bg-white rounded-3xl p-5 shadow-md mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A69B65] to-[#BF8984] flex items-center justify-center">
              <User className="text-white" size={28} />
            </div>
            <div className="flex-1">
              <h2 className="text-[#A69B65] mb-1">Alex Johnson</h2>
              <p className="text-sm text-[#D9D8D7]">alex.j@university.edu</p>
            </div>
            <button className="text-[#A69B65]">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* App Installation */}
        <div className="mb-6">
          <h3 className="text-[#A69B65] mb-3 px-1">App</h3>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <button 
              onClick={handleInstallClick}
              className="w-full flex items-center gap-4 p-4 border-b border-[#D9D8D7] active:bg-[#F5F4F2] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#A69B65]/10 flex items-center justify-center">
                <Download className="text-[#A69B65]" size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[#A69B65] mb-0.5">Install App</h4>
                <p className="text-sm text-[#D9D8D7]">Add to home screen</p>
              </div>
              <ChevronRight className="text-[#D9D8D7]" size={20} />
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-6">
          <h3 className="text-[#A69B65] mb-3 px-1">Preferences</h3>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 border-b border-[#D9D8D7] active:bg-[#F5F4F2] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#D94625]/10 flex items-center justify-center">
                <Bell className="text-[#D94625]" size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[#A69B65] mb-0.5">Notifications</h4>
                <p className="text-sm text-[#D9D8D7]">Manage alerts and reminders</p>
              </div>
              <ChevronRight className="text-[#D9D8D7]" size={20} />
            </button>

            <button className="w-full flex items-center gap-4 p-4 border-b border-[#D9D8D7] active:bg-[#F5F4F2] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#A69B65]/10 flex items-center justify-center">
                <Moon className="text-[#A69B65]" size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[#A69B65] mb-0.5">Dark Mode</h4>
                <p className="text-sm text-[#D9D8D7]">Switch to dark theme</p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-[#D9D8D7] rounded-full peer-checked:bg-[#A69B65] transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6" />
                </div>
              </label>
            </button>

            <button className="w-full flex items-center gap-4 p-4 active:bg-[#F5F4F2] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#BF8984]/10 flex items-center justify-center">
                <Globe className="text-[#BF8984]" size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[#A69B65] mb-0.5">Language</h4>
                <p className="text-sm text-[#D9D8D7]">English (US)</p>
              </div>
              <ChevronRight className="text-[#D9D8D7]" size={20} />
            </button>
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-6">
          <h3 className="text-[#A69B65] mb-3 px-1">Integrations</h3>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 border-b border-[#D9D8D7] active:bg-[#F5F4F2] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#D9A282]/10 flex items-center justify-center">
                <Calendar className="text-[#D9A282]" size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[#A69B65] mb-0.5">Sync Calendars</h4>
                <p className="text-sm text-[#D9D8D7]">Google, Apple, Outlook</p>
              </div>
              <ChevronRight className="text-[#D9D8D7]" size={20} />
            </button>

            <button className="w-full flex items-center gap-4 p-4 border-b border-[#D9D8D7] active:bg-[#F5F4F2] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#A69B65]/10 flex items-center justify-center">
                <BookOpen className="text-[#A69B65]" size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[#A69B65] mb-0.5">Connect Classes</h4>
                <p className="text-sm text-[#D9D8D7]">Import from LMS</p>
              </div>
              <ChevronRight className="text-[#D9D8D7]" size={20} />
            </button>

            <button className="w-full flex items-center gap-4 p-4 active:bg-[#F5F4F2] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#D94625]/10 flex items-center justify-center">
                <Upload className="text-[#D94625]" size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[#A69B65] mb-0.5">Manage Syllabi</h4>
                <p className="text-sm text-[#D9D8D7]">Upload course documents</p>
              </div>
              <ChevronRight className="text-[#D9D8D7]" size={20} />
            </button>
          </div>
        </div>

        {/* About */}
        <div className="bg-gradient-to-br from-[#A69B65]/10 to-[#BF8984]/10 rounded-3xl p-5 border-2 border-[#A69B65]/20">
          <h3 className="text-[#A69B65] mb-3">About ePlannerAI</h3>
          <p className="text-sm text-[#A69B65]/80 leading-relaxed mb-3">
            Your AI-powered companion for student productivity, sustainability, and well-being. Version 1.0.0
          </p>
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-[#A69B65] py-2 rounded-xl text-sm active:scale-95 transition-transform">
              Privacy Policy
            </button>
            <button className="flex-1 bg-white text-[#A69B65] py-2 rounded-xl text-sm active:scale-95 transition-transform">
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}