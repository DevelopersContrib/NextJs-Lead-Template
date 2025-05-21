"use client";

// Note:: Install Framer motion for animation and Tailwindcss for styling.

import { AnimatePresence, motion } from "framer-motion";
import { CheckCheck, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fetchRssData } from "@/lib/hooks/fetchRss";
// const notifications = [
//   {
//     id: 1,
//     message: "An honest marketer subscribed to",
//     highlight: "Business",
//     timestamp: "about 2 hours ago",
//     image: "https://randomuser.me/api/portraits/men/30.jpg"
//   },
//   {
//     id: 2,
//     message: "A new user joined",
//     highlight: "Premium Plan",
//     timestamp: "about 10 minutes ago",
//     image: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     id: 3,
//     message: "Someone upgraded to",
//     highlight: "Enterprise",
//     timestamp: "just now",
//     image: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 4,
//     message: "A visitor from Berlin signed up for",
//     highlight: "Newsletter",
//     timestamp: "about 1 hour ago",
//     image: "https://randomuser.me/api/portraits/men/39.jpg"
//   }
// ];

const Notification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [remaining, setRemaining] = useState(5000);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadRss = async () => {
      const data = await fetchRssData();
      setNotifications(data.slice(0, 5)); // Show latest 5 transactions
    };

    loadRss();
    const interval = setInterval(loadRss, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isHovered && isVisible) {
      startTimeRef.current = Date.now();
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
          setIsVisible(true);
          setRemaining(5000);
        }, 5000);
      }, remaining);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isHovered, isVisible, currentIndex, remaining, notifications.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (startTimeRef.current) {
      const elapsed = Date.now() - startTimeRef.current;
      setRemaining((prev) => Math.max(0, prev - elapsed));
    }
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && notifications.length > 0 && (
        <motion.div
          key={notifications[currentIndex]?.id}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="tw-fixed tw-bottom-6 tw-left-2 sm:tw-right-2 sm:tw-bottom-2 tw-z-[999] tw-w-full sm:tw-max-w-[95vw] sm:tw-w-[340px] lg:tw-w-[420px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="tw-relative tw-bg-white tw-shadow-md tw-rounded-2xl tw-px-5 tw-py-4 tw-flex tw-flex-col tw-gap-2">
            <span className="tw-absolute -tw-top-5 tw-right-4 tw-text-[0.65rem] tw-text-indigo-500 tw-font-medium tw-flex tw-items-center tw-gap-1 sm:-tw-top-4 sm:tw-right-3">
              Powered by AgentDao
              <CheckCheck className="tw-w-4 tw-h-4 tw-text-indigo-400" />
            </span>

            <div className="tw-text-xs tw-font-mono tw-text-gray-500 tw-break-words">
              {notifications[currentIndex]?.title.replace("Transaction Hash:", "").trim()}
            </div>

            <div className="tw-text-sm tw-text-orange-600 tw-font-medium tw-flex tw-flex-wrap tw-gap-x-1">
              <span className="tw-underline tw-underline-offset-2">
                {notifications[currentIndex]?.description}
              </span>
            </div>

            <div className="tw-text-[0.7rem] tw-text-gray-400 tw-mt-1">
              {notifications[currentIndex]?.pubDate}
            </div>

            <button
              onClick={handleClose}
              className={`tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-p-1 tw-rounded-full tw-transition-colors tw-text-gray-400 ${
                isHovered ? "tw-inline-flex" : "tw-hidden"
              } sm:tw-right-2`}
              aria-label="Close notification"
            >
              <X className="tw-w-5 tw-h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
