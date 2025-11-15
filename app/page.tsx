"use client";

import { useState } from "react";

import { HomeDashboard }from "../components/HomeDashboard";
import { TaskCreation } from "../components/TaskCreation";
import {CalendarView} from "../components/CalendarView";
import {AIStudyPlan} from "../components/AIStudyPlan";
import {SustainabilityDashboard} from "../components/SustainabilityDashboard";
import {Settings} from "../components/Settings";
import {AddToHomeScreen} from "../components/AddToHomeScreen";

import { Home, Calendar, Lightbulb, Leaf, Settings as SettingsIcon } from "lucide-react";

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState<
    "home" | "calendar" | "study" | "sustainability" | "settings"
  >("home");

  const [showTaskCreation, setShowTaskCreation] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F4F2]">

      {/* Add to Home Screen prompt */}
      <AddToHomeScreen />

      {/* Main content area */}
      <div className="pb-20">
        {showTaskCreation ? (
          <TaskCreation onClose={() => setShowTaskCreation(false)} />
        ) : (
          <>
            {currentScreen === "home" && (
              <HomeDashboard onCreateTask={() => setShowTaskCreation(true)} />
            )}
            {currentScreen === "calendar" && <CalendarView />}
            {currentScreen === "study" && <AIStudyPlan />}
            {currentScreen === "sustainability" && <SustainabilityDashboard />}
            {currentScreen === "settings" && <Settings />}
          </>
        )}
      </div>

      {/* Fixed bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around">
        <button onClick={() => setCurrentScreen("home")} className="flex flex-col items-center">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </button>

        <button onClick={() => setCurrentScreen("calendar")} className="flex flex-col items-center">
          <Calendar size={22} />
          <span className="text-xs">Calendar</span>
        </button>

        <button onClick={() => setCurrentScreen("study")} className="flex flex-col items-center">
          <Lightbulb size={22} />
          <span className="text-xs">Study</span>
        </button>

        <button onClick={() => setCurrentScreen("sustainability")} className="flex flex-col items-center">
          <Leaf size={22} />
          <span className="text-xs">Eco</span>
        </button>

        <button onClick={() => setCurrentScreen("settings")} className="flex flex-col items-center">
          <SettingsIcon size={22} />
          <span className="text-xs">Settings</span>
        </button>
      </nav>
    </div>
  );
}