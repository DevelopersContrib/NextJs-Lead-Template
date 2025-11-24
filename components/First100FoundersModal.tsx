import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  Rocket,
  Crown,
  Zap,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";

export interface First100FoundersModalProps {
  /**
   * URL path to navigate to when CTA button is clicked
   * @default '/first100founders'
   */
  targetUrl?: string;

  /**
   * Delay in milliseconds before showing the modal
   * @default 15000 (15 seconds)
   */
  delay?: number;

  /**
   * Array of path prefixes to exclude the modal from showing
   * @default ['/first100founders', '/admin']
   */
  excludedPaths?: string[];

  /**
   * Custom session storage key for tracking if modal was shown
   * @default 'first100founders_modal_shown'
   */
  sessionKey?: string;

  /**
   * Custom navigation handler function (for Next.js router.push, etc.)
   * If not provided, will use window.location.href
   */
  onNavigate?: (url: string) => void;

  /**
   * Custom function to get current pathname
   * If not provided, will use window.location.pathname
   */
  getCurrentPath?: () => string;

  /**
   * Custom content overrides
   */
  content?: {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    dismissText?: string;
    footerText?: string;
  };

  /**
   * Custom benefits list
   */
  benefits?: Array<{
    icon: React.ReactNode;
    text: string;
    color?: string;
    bg?: string;
  }>;

  /**
   * Pricing information
   */
  pricing?: {
    startingPrice?: string;
    freePlanText?: string;
    plans?: Array<{
      name: string;
      price: string;
    }>;
    limitedSlots?: string;
    expiryDate?: string;
  };

  /**
   * Z-index for the modal
   * @default 9999
   */
  zIndex?: number;

  /**
   * Whether to show the modal (controlled mode)
   * If provided, component becomes controlled
   */
  isOpen?: boolean;

  /**
   * Callback when modal is closed
   */
  onClose?: () => void;

  /**
   * Callback when CTA is clicked
   */
  onCTAClick?: () => void;

  /**
   * Test mode - shows immediately and ignores sessionStorage
   * @default false
   */
  testMode?: boolean;
}

export const First100FoundersModal: React.FC<First100FoundersModalProps> = ({
  targetUrl = "https://www.ventureos.com/first100founders",
  delay = 15000,
  excludedPaths = ["/first100founders", "/admin"],
  sessionKey = "first100founders_modal_shown",
  onNavigate,
  getCurrentPath,
  content,
  benefits,
  pricing,
  zIndex = 9999,
  isOpen: controlledIsOpen,
  onClose,
  onCTAClick,
  testMode = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const isControlled = controlledIsOpen !== undefined;

  // Get current pathname
  const getPathname = () => {
    if (getCurrentPath) {
      return getCurrentPath();
    }
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "";
  };

  useEffect(() => {
    // Check if current date is after December 31, 2025
    const cutoffDate = new Date("2026-01-01T00:00:00");
    const currentDate = new Date();
    if (currentDate >= cutoffDate) {
      console.log(
        "[First100FoundersModal] Modal expired after December 31, 2025"
      );
      setIsVisible(false);
      return;
    }

    // If controlled, use controlled state (but still respect date cutoff)
    if (isControlled) {
      setIsVisible(controlledIsOpen || false);
      return;
    }

    // Check if path is excluded FIRST (before test mode or anything else)
    const currentPath = getPathname();
    console.log(
      "[First100FoundersModal] Current path:",
      currentPath,
      "Excluded paths:",
      excludedPaths
    );
    const isExcluded = excludedPaths.some((path) =>
      currentPath.startsWith(path)
    );

    if (isExcluded) {
      console.log("[First100FoundersModal] Path excluded:", currentPath);
      return;
    }

    console.log("[First100FoundersModal] Path NOT excluded, continuing...");

    // Test mode - show immediately (only if not excluded)
    if (testMode) {
      console.log("[First100FoundersModal] Test mode - showing immediately");
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }

    // Check if user has already dismissed this modal in this session
    if (typeof window !== "undefined") {
      // Allow clearing via URL parameter for testing: ?clearModal=true
      const urlParams = new URLSearchParams(window.location.search);
      const clearModal = urlParams.get("clearModal") === "true";

      if (clearModal) {
        console.log(
          "[First100FoundersModal] Clearing sessionStorage due to ?clearModal=true parameter"
        );
        sessionStorage.removeItem(sessionKey);
      }

      const wasShown = sessionStorage.getItem(sessionKey);

      if (wasShown && !testMode && !clearModal) {
        console.log("[First100FoundersModal] Already shown in this session.");
        console.log(
          '[First100FoundersModal] To test again, add ?clearModal=true to URL or run: sessionStorage.removeItem("' +
            sessionKey +
            '")'
        );
        setHasShown(true);
        return;
      }

      console.log(
        "[First100FoundersModal] Will show after",
        delay,
        "ms on path:",
        currentPath
      );

      // Show modal after delay
      const timer = setTimeout(() => {
        // Double-check path hasn't changed
        const finalPath = getPathname();
        const stillExcluded = excludedPaths.some((path) =>
          finalPath.startsWith(path)
        );

        if (stillExcluded) {
          console.log(
            "[First100FoundersModal] Path became excluded, not showing:",
            finalPath
          );
          return;
        }

        console.log(
          "[First100FoundersModal] Showing modal now on path:",
          finalPath
        );
        setIsVisible(true);
        if (!testMode) {
          sessionStorage.setItem(sessionKey, "true");
        }
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    delay,
    excludedPaths,
    sessionKey,
    isControlled,
    controlledIsOpen,
    testMode,
  ]);

  const handleClose = () => {
    setIsVisible(false);
    setHasShown(true);
    if (onClose) {
      onClose();
    }
  };

  const handleNavigate = () => {
    if (onCTAClick) onCTAClick();
    if (typeof window !== "undefined") {
      window.open("https://www.ventureos.com/first100founders", "_blank");
    }
  };

  // Default benefits
  const defaultBenefits = benefits || [
    {
      icon: <Rocket className="w-8 h-8" />,
      text: "Full platform access on January 15, 2026",
      color: "text-white",
      bg: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      text: "Auto-built contractor website with ALL AI agents",
      color: "text-white",
      bg: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Crown className="w-8 h-8" />,
      text: "Early access to DomainFund Secret Auction",
      color: "text-white",
      bg: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      text: "Founders Badge & exclusive community access",
      color: "text-white",
      bg: "from-pink-500/20 to-red-500/20",
    },
  ];

  // Default pricing
  const defaultPricing = pricing || {
    startingPrice: "$99",
    freePlanText: "1-month free Starter Plan included",
    plans: [
      { name: "Professional Plan", price: "$299/month" },
      { name: "Enterprise Plan", price: "$999/month" },
    ],
    limitedSlots: "Only 100 available",
    expiryDate: "December 31, 2025",
  };

  // Prevent body scroll when modal is visible
  useEffect(() => {
    if (isVisible) {
      // Prevent body scroll
      const originalOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        // Restore scroll on cleanup
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isVisible]);

  // Debug logging
  useEffect(() => {
    const currentPath = getPathname();
    const isExcluded = excludedPaths.some((path) =>
      currentPath.startsWith(path)
    );

    console.log("[First100FoundersModal] Component mounted", {
      isVisible,
      hasShown,
      isControlled,
      testMode,
      currentPath,
      isExcluded,
      delay,
      excludedPaths,
    });

    if (isVisible) {
      console.log(
        "[First100FoundersModal] Modal is visible - should render now"
      );
    }
  }, [isVisible, hasShown, isControlled, testMode, excludedPaths, delay]);

  // Check if current date is after December 31, 2025
  const cutoffDate = new Date("2026-01-01T00:00:00");
  const currentDate = new Date();
  if (currentDate >= cutoffDate) {
    return null;
  }

  // Early return if path is excluded (even before checking visibility)
  const currentPath = getPathname();
  const isExcluded = excludedPaths.some((path) => currentPath.startsWith(path));
  if (isExcluded) {
    return null;
  }

  if (!isVisible || hasShown) {
    console.log("[First100FoundersModal] Not rendering:", {
      isVisible,
      hasShown,
    });
    return null;
  }

  console.log("[First100FoundersModal] RENDERING MODAL NOW");

  return (
    <div
      className="tw-fixed tw-inset-0 tw-w-full tw-h-full tw-overflow-y-auto tw-animate-fade-in-scale"
      style={{
        zIndex: zIndex || 99999,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        position: "fixed",
      }}
      data-testid="first100founders-modal"
    >
      {/* Full-screen animated background - fully opaque */}
      <div
        className="tw-absolute tw-inset-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          background:
            "linear-gradient(to bottom right, #581c87, #1e3a8a, #312e81)",
          zIndex: 0,
        }}
      >
        {/* Animated gradient overlays */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-yellow-500/20 tw-via-purple-500/20 tw-to-blue-500/20 tw-animate-pulse"></div>
        {/* Large decorative blobs */}
        <div className="tw-absolute tw-top-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-gradient-to-br tw-from-yellow-400/30 tw-to-orange-500/30 tw-rounded-full tw-blur-3xl tw-animate-blob"></div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-96 tw-h-96 tw-bg-gradient-to-br tw-from-purple-500/30 tw-to-blue-500/30 tw-rounded-full tw-blur-3xl tw-animate-blob tw-animation-delay-2000"></div>
        <div className="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-w-96 tw-h-96 tw-bg-gradient-to-br tw-from-pink-500/20 tw-to-red-500/20 tw-rounded-full tw-blur-3xl tw-animate-blob tw-animation-delay-4000"></div>
      </div>

      {/* Content Container */}
      <div
        className="tw-relative tw-z-10 tw-min-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 md:tw-p-8 lg:tw-p-12"
        style={{
          minHeight: "100vh",
          width: "100%",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="tw-absolute tw-top-6 tw-right-6 tw-z-20 tw-p-3 tw-rounded-full tw-bg-white/10 tw-backdrop-blur-md hover:tw-bg-white/20 tw-transition-all tw-duration-300 tw-border tw-border-white/20"
          aria-label="Close"
        >
          <X className="tw-w-6 tw-h-6 tw-text-white" />
        </button>

        {/* Main Content */}
        <div className="tw-max-w-6xl tw-w-full tw-space-y-8 md:tw-space-y-12">
          {/* Header Section */}
          <div className="tw-text-center tw-space-y-6">
            <div className="tw-inline-flex tw-items-center tw-space-x-2 tw-bg-gradient-to-r tw-from-yellow-400 tw-to-orange-500 tw-rounded-full tw-px-8 tw-py-3 tw-shadow-2xl tw-mb-4">
              <Sparkles className="tw-w-6 tw-h-6 tw-text-white tw-animate-pulse" />
              <span className="tw-text-white tw-font-bold tw-text-base tw-uppercase tw-tracking-wider">
                {content?.title || "Limited Time Offer"}
              </span>
            </div>

            <h1
              className="tw-text-5xl md:tw-text-7xl lg:tw-text-8xl tw-font-extrabold tw-mb-6 tw-leading-tight"
              style={{
                background:
                  "linear-gradient(to right, rgb(253, 224, 71), rgb(255, 255, 255), rgb(147, 197, 253))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              🎉 Be One of the
              <br />
              {content?.subtitle || "First 100 Founders!"}
            </h1>

            <p className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-text-white/90 tw-font-semibold tw-mb-4">
              {content?.description || "Don't wait for the public launch!"}
            </p>
            <p className="tw-text-xl md:tw-text-2xl tw-text-white/70 tw-max-w-3xl tw-mx-auto">
              Secure your spot now and get exclusive access to VentureOS
              platform with incredible benefits.
            </p>
          </div>

          {/* Benefits Grid - Larger for full screen */}
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 md:tw-gap-8">
            {defaultBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`tw-relative tw-p-8 tw-bg-white/30 tw-backdrop-blur-lg tw-rounded-2xl tw-border tw-border-white/30 tw-shadow-xl tw-flex tw-items-center tw-gap-6 hover:tw-scale-105 tw-transition-all tw-duration-300 ${
                  benefit.bg
                    ? "tw-bg-gradient-to-br tw-" +
                      benefit.bg.replace(/ /g, " tw-")
                    : "tw-bg-gradient-to-br tw-from-gray-500/20 tw-to-gray-600/20"
                }`}
              >
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <div
                    className={`tw-flex-shrink-0 ${
                      benefit.color ? "tw-" + benefit.color : "tw-text-white"
                    } tw-p-3 tw-bg-white/10 tw-rounded-xl`}
                  >
                    {benefit.icon}
                  </div>
                  <span className="tw-text-white tw-text-lg md:tw-text-xl tw-font-semibold tw-leading-relaxed">
                    {benefit.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Larger and more prominent */}
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-6">
            <button
              onClick={handleNavigate}
              className="tw-group tw-px-12 tw-py-6 tw-text-white tw-font-bold tw-text-xl md:tw-text-2xl tw-rounded-2xl tw-transition-all tw-duration-300 tw-shadow-2xl tw-transform hover:tw-scale-110 tw-flex tw-items-center tw-space-x-3 tw-w-full sm:tw-w-auto tw-justify-center"
              style={{
                background:
                  "linear-gradient(to right, rgb(126, 34, 206), rgb(29, 78, 216), rgb(67, 56, 202))",
                border: "none",
              }}
            >
              <span>{content?.ctaText || "Reserve My Founder Spot"}</span>
              <ArrowRight className="tw-w-6 tw-h-6 tw-group-hover:tw-translate-x-2 tw-transition-transform" />
            </button>
            <button
              onClick={handleClose}
              className="tw-px-10 tw-py-6 tw-bg-white/10 tw-backdrop-blur-md tw-text-white tw-font-semibold tw-text-lg tw-rounded-2xl hover:tw-bg-white/20 tw-border tw-border-white/30 tw-transition-all tw-w-full sm:tw-w-auto"
            >
              {content?.dismissText || "Maybe Later"}
            </button>
          </div>

          {/* Footer Note */}
          <p className="tw-text-center tw-text-white/60 tw-text-lg md:tw-text-xl tw-mt-8">
            {content?.footerText ||
              "🔥 Only 100 slots available • Act fast before they're gone!"}
          </p>
        </div>
      </div>
    </div>
  );
};

// Export default for easier imports
export default First100FoundersModal;
