"use client";

// Note:: Install Framer motion for animation and Tailwindcss for styling.

import { AnimatePresence, motion } from "framer-motion";
import { CheckCheck, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const notifications = [
  {
    id: 1,
    message: "An honest marketer subscribed to",
    highlight: "Business",
    timestamp: "about 2 hours ago",
    image: "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    id: 2,
    message: "A new user joined",
    highlight: "Premium Plan",
    timestamp: "about 10 minutes ago",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    message: "Someone upgraded to",
    highlight: "Enterprise",
    timestamp: "just now",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    message: "A visitor from Berlin signed up for",
    highlight: "Newsletter",
    timestamp: "about 1 hour ago",
    image: "https://randomuser.me/api/portraits/men/39.jpg"
  }
];

const Notification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [remaining, setRemaining] = useState(5000);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isHovered && isVisible) {
      startTimeRef.current = Date.now();
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
          setIsVisible(true);
          setRemaining(20000);
        }, 5000);
      }, remaining);
    }
    return () => clearTimeout(timerRef.current);
  }, [isHovered, isVisible, currentIndex, remaining]);

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
      {isVisible && (
        <motion.div
          key={notifications[currentIndex].id}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="tw-fixed tw-bottom-6 tw-z-50 z-[999] 
          tw-left-2 sm:tw-right-2 sm:tw-bottom-2 -tw-translate-x-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="tw-relative tw-flex tw-items-center tw-bg-white tw-rounded-full tw-shadow-[2px_2px_10px_2px_hsla(0,0%,60%,.2)] lg:tw-px-6 lg:tw-py-4 lg:tw-w-[420px] sm:tw-w-[340px] tw-w-full sm:tw-max-w-[95vw] tw-px-3 tw-py-2 tw-gap-[1rem]">
            {/* Badge */}
            <span className="tw-absolute tw-top-[-1.5rem] tw-right-4 tw-text-xs tw-text-indigo-400 tw-flex tw-items-center tw-gap-1 tw-font-medium sm:tw-top-[-1.2rem] sm:tw-right-2">
              Powered by AgentDao
              <CheckCheck className="tw-w-4 tw-h-4 tw-text-indigo-400" />
            </span>
            {/* Image */}
            <div className="lg:tw-w-16 lg:tw-h-16 md:tw-w-12 md:tw-h-12 sm:tw-w-10 sm:tw-h-10 tw-rounded-full tw-overflow-hidden tw-flex-shrink-0 tw-border tw-border-gray-200">
              <Image
                src={notifications[currentIndex].image}
                alt="Map"
                width={64}
                height={64}
                className="tw-object-cover"
              />
            </div>
            {/* Content */}
            <div className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-mr-8 sm:tw-mr-6">
              <span className="lg:tw-text-base md:tw-text-sm sm:tw-text-xs tw-font-medium tw-text-[#3a3a7c]">
                {notifications[currentIndex].message}{" "}
                <span className="tw-text-orange-500 tw-font-semibold tw-underline underline-offset-2">
                  {notifications[currentIndex].highlight}
                </span>
              </span>
              <span className="tw-text-xs tw-text-[#7b7bb0] tw-mt-1">
                {notifications[currentIndex].timestamp}
              </span>
            </div>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className={`tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-p-1 tw-rounded-full tw-bg-transparent hover:tw-bg-gray-100 tw-transition-colors tw-text-gray-400 tw-border-none ${
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
