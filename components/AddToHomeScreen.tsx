import { useState, useEffect } from 'react';
import { X, Download, Share } from 'lucide-react';
import logoImage from 'figma:asset/213b25174b29fb59fd97aae264ae0349c0ca4692.png';

export function AddToHomeScreen() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as installed PWA
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone 
      || document.referrer.includes('android-app://');
    
    setIsStandalone(isInStandaloneMode);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if already dismissed
    const dismissed = localStorage.getItem('addToHomeScreenDismissed');
    
    if (!isInStandaloneMode && !dismissed) {
      // Show prompt after a short delay
      setTimeout(() => setShowPrompt(true), 2000);
    }

    // Listen for beforeinstallprompt event (for Chrome/Edge)
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('addToHomeScreenDismissed', 'true');
  };

  if (isStandalone || !showPrompt) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl animate-in slide-in-from-bottom">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F5F4F2] flex items-center justify-center"
        >
          <X className="text-[#A69B65]" size={18} />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <img src={logoImage} alt="ePlannerAI" className="w-20 h-20 rounded-3xl mb-4 shadow-lg" />
          <h2 className="text-[#A69B65] mb-2">Install ePlannerAI</h2>
          <p className="text-[#D9D8D7] text-sm leading-relaxed">
            Add this app to your home screen for quick access and a native app experience!
          </p>
        </div>

        {isIOS ? (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#A69B65]/10 to-[#BF8984]/10 rounded-2xl p-4 border-2 border-[#A69B65]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#A69B65]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-[#A69B65] text-sm">
                    Tap the <Share size={16} className="inline" /> <strong>Share</strong> button in your browser
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#A69B65]/10 to-[#BF8984]/10 rounded-2xl p-4 border-2 border-[#A69B65]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#A69B65]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-[#A69B65] text-sm">
                    Scroll and tap <strong>"Add to Home Screen"</strong>
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="w-full bg-[#D9D8D7] text-[#A69B65] rounded-2xl py-3 active:scale-95 transition-transform"
            >
              Got it!
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <button
              onClick={handleInstall}
              className="w-full bg-gradient-to-r from-[#A69B65] to-[#BF8984] text-white rounded-2xl py-3 flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
            >
              <Download size={20} />
              <span>Add to Home Screen</span>
            </button>
            <button
              onClick={handleDismiss}
              className="w-full bg-[#F5F4F2] text-[#A69B65] rounded-2xl py-3 active:scale-95 transition-transform"
            >
              Maybe Later
            </button>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-[#D9D8D7]">
          <div className="flex items-center justify-center gap-4 text-xs text-[#D9D8D7]">
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Works offline</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Fast loading</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Native feel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}