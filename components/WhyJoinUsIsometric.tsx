"use client";

export default function WhyJoinUsIsometric() {
  return (
    <div className="why-join-us-isometric">
      <svg
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#f0f7ff" />
            <stop offset="100%" stopColor="#e8f2fe" />
          </linearGradient>
          <linearGradient id="blueMain" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="40%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="blueBright" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="blueSoft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.04)" />
          </linearGradient>
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#eef4ff" />
          </linearGradient>
          <linearGradient id="faceHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id="shadow" x="-40%" y="-20%" width="180%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#1e3a5f" floodOpacity="0.15" />
          </filter>
          <filter id="shadowSm" x="-30%" y="-15%" width="160%" height="130%">
            <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#1e3a5f" floodOpacity="0.1" />
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="520" height="420" rx="28" fill="url(#bgGrad)" />

        {/* Isometric floor with subtle grid */}
        <path
          d="M260 320 L520 400 L520 420 L0 420 L0 400 L260 320 Z"
          fill="url(#blueSoft)"
        />
        {/* Grid lines on floor */}
        <g stroke="rgba(59, 130, 246, 0.12)" strokeWidth="0.8">
          <path d="M65 360 L195 300 L325 360 L455 300" fill="none" />
          <path d="M130 380 L260 320 L390 380 L520 320" fill="none" />
          <path d="M0 400 L130 340 L260 400 L390 340 L520 400" fill="none" />
          <path d="M260 320 L260 420" fill="none" />
          <path d="M130 340 L390 340" fill="none" />
          <path d="M65 360 L455 360" fill="none" />
        </g>
        <path
          d="M140 355 L260 305 L380 355 L260 405 Z"
          fill="rgba(59, 130, 246, 0.06)"
          stroke="rgba(59, 130, 246, 0.14)"
          strokeWidth="1"
        />

        {/* Central building – main focal */}
        <g filter="url(#shadow)" className="iso-main-building">
          {/* Left face */}
          <path
            d="M160 240 L220 200 L220 330 L160 370 Z"
            fill="url(#blueMain)"
            stroke="rgba(29, 78, 216, 0.35)"
            strokeWidth="1.2"
          />
          <path
            d="M160 240 L220 200 L220 330 L160 370 Z"
            fill="url(#faceHighlight)"
            fillOpacity="0.5"
            stroke="none"
          />
          {/* Right face */}
          <path
            d="M220 200 L280 240 L280 370 L220 330 Z"
            fill="#eef6ff"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
          />
          <path
            d="M220 200 L280 240 L280 370 L220 330 Z"
            fill="url(#faceHighlight)"
            fillOpacity="0.6"
            stroke="none"
          />
          {/* Top face */}
          <path
            d="M160 240 L220 200 L280 240 L220 280 Z"
            fill="url(#roofGrad)"
            stroke="rgba(59, 130, 246, 0.18)"
            strokeWidth="1"
          />
          {/* Roof accent – small flag/antenna */}
          <path d="M220 200 L220 175 L225 182 L220 188 Z" fill="#3b82f6" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.8" />
          <line x1="220" y1="200" x2="220" y2="175" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          {/* Windows – left face */}
          <path d="M175 275 L198 262 L198 295 L175 308 Z" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
          <path d="M175 315 L198 302 L198 335 L175 348 Z" fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="186.5" y1="262" x2="186.5" y2="295" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="186.5" y1="302" x2="186.5" y2="335" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" />
          {/* Door – left face */}
          <path d="M175 355 L198 342 L198 368 L175 381 Z" fill="#1e40af" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <circle cx="193" cy="362" r="2" fill="rgba(255,255,255,0.6)" />
        </g>

        {/* Side blocks – left */}
        <g filter="url(#shadowSm)">
          <path d="M85 318 L125 290 L165 318 L125 346 Z" fill="#3b82f6" fillOpacity="0.45" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
          <path d="M125 290 L125 346 L125 402 L125 346 Z" fill="#2563eb" fillOpacity="0.3" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
          <path d="M125 290 L165 318 L165 374 L125 346 Z" fill="#60a5fa" fillOpacity="0.4" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="1" />
          <circle cx="145" cy="308" r="4" fill="rgba(255,255,255,0.4)" />
        </g>
        <g filter="url(#shadowSm)">
          <path d="M118 352 L148 332 L178 352 L148 372 Z" fill="#60a5fa" fillOpacity="0.45" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
          <path d="M148 332 L148 372 L148 412 L148 372 Z" fill="#3b82f6" fillOpacity="0.35" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
          <path d="M148 332 L178 352 L178 392 L148 372 Z" fill="#60a5fa" fillOpacity="0.4" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="1" />
        </g>

        {/* Side blocks – right */}
        <g filter="url(#shadowSm)">
          <path d="M338 328 L378 300 L418 328 L378 356 Z" fill="#3b82f6" fillOpacity="0.4" stroke="rgba(59, 130, 246, 0.48)" strokeWidth="1" />
          <path d="M378 300 L378 356 L378 412 L378 356 Z" fill="#2563eb" fillOpacity="0.28" stroke="rgba(59, 130, 246, 0.38)" strokeWidth="1" />
          <path d="M378 300 L418 328 L418 384 L378 356 Z" fill="#60a5fa" fillOpacity="0.35" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
        </g>
        <g filter="url(#shadowSm)">
          <path d="M318 358 L348 338 L378 358 L348 378 Z" fill="#3b82f6" fillOpacity="0.38" stroke="rgba(59, 130, 246, 0.45)" strokeWidth="1" />
          <path d="M348 338 L348 378 L348 418 L348 378 Z" fill="#2563eb" fillOpacity="0.28" stroke="rgba(59, 130, 246, 0.38)" strokeWidth="1" />
          <path d="M348 338 L378 358 L378 398 L348 378 Z" fill="#60a5fa" fillOpacity="0.33" stroke="rgba(59, 130, 246, 0.32)" strokeWidth="1" />
        </g>

        {/* Back tall block */}
        <g filter="url(#shadowSm)">
          <path d="M362 312 L394 292 L426 318 L394 338 Z" fill="#2563eb" fillOpacity="0.4" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
          <path d="M394 292 L394 338 L394 408 L394 338 Z" fill="#3b82f6" fillOpacity="0.3" stroke="rgba(59, 130, 246, 0.42)" strokeWidth="1" />
          <path d="M394 292 L426 318 L426 388 L394 338 Z" fill="#60a5fa" fillOpacity="0.35" stroke="rgba(59, 130, 246, 0.38)" strokeWidth="1" />
        </g>

        {/* Pyramids */}
        <g filter="url(#shadowSm)">
          <path d="M195 355 L235 328 L275 355 L235 382 Z" fill="#3b82f6" fillOpacity="0.22" stroke="rgba(59, 130, 246, 0.38)" strokeWidth="1" />
          <path d="M195 355 L235 382 L235 305 Z" fill="url(#blueMain)" fillOpacity="0.75" stroke="rgba(29, 78, 216, 0.5)" strokeWidth="1" />
          <path d="M235 328 L235 305 L275 355 Z" fill="#60a5fa" fillOpacity="0.55" stroke="rgba(59, 130, 246, 0.45)" strokeWidth="1" />
          <path d="M195 355 L235 305 L235 382 Z" fill="#2563eb" fillOpacity="0.55" stroke="rgba(37, 99, 235, 0.48)" strokeWidth="1" />
        </g>
        <g filter="url(#shadowSm)">
          <path d="M285 362 L315 346 L345 362 L315 378 Z" fill="#3b82f6" fillOpacity="0.18" stroke="rgba(59, 130, 246, 0.32)" strokeWidth="1" />
          <path d="M285 362 L315 378 L315 332 Z" fill="#3b82f6" fillOpacity="0.55" stroke="rgba(59, 130, 246, 0.42)" strokeWidth="1" />
          <path d="M315 346 L315 332 L345 362 Z" fill="#60a5fa" fillOpacity="0.5" stroke="rgba(59, 130, 246, 0.38)" strokeWidth="1" />
          <path d="M285 362 L315 332 L315 378 Z" fill="#2563eb" fillOpacity="0.45" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1" />
        </g>

        {/* Floating triangles */}
        <path d="M72 195 L112 238 L32 238 Z" fill="#3b82f6" fillOpacity="0.22" stroke="rgba(59, 130, 246, 0.38)" strokeWidth="1" />
        <path d="M448 218 L488 262 L408 262 Z" fill="#60a5fa" fillOpacity="0.2" stroke="rgba(59, 130, 246, 0.32)" strokeWidth="1" />
        <path d="M260 52 L288 92 L232 92 Z" fill="url(#blueMain)" fillOpacity="0.55" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />

        {/* Growth / launch arrow with rocket tip */}
        <g className="iso-arrow">
          <path
            d="M260 355 Q212 268 232 178 Q252 108 272 62"
            stroke="url(#blueBright)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.92"
          />
          <path
            d="M272 62 L272 90 L296 72"
            fill="url(#blueBright)"
            stroke="rgba(59, 130, 246, 0.6)"
            strokeWidth="0.8"
          />
          {/* Small rocket at tip */}
          <path d="M268 48 L276 48 L280 58 L276 68 L268 68 L264 58 Z" fill="url(#blueMain)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
          <path d="M270 44 L274 44 L274 48 L270 48 Z" fill="#60a5fa" />
          <path d="M272 68 L274 72 L278 72 L276 68 Z" fill="#93c5fd" fillOpacity="0.8" />
        </g>

        {/* Figures – community */}
        <g transform="translate(178, 282)" className="iso-figure">
          <ellipse cx="26" cy="56" rx="20" ry="11" fill="url(#blueMain)" opacity="0.92" />
          <path d="M26 44 Q8 22 26 30 Q44 22 26 44" fill="#374151" />
          <circle cx="26" cy="18" r="11" fill="#4b5563" />
        </g>
        <g transform="translate(292, 292)" className="iso-figure">
          <ellipse cx="26" cy="54" rx="20" ry="11" fill="url(#blueMain)" opacity="0.92" />
          <path d="M26 42 Q8 20 26 28 Q44 20 26 42" fill="#374151" />
          <circle cx="26" cy="16" r="11" fill="#4b5563" />
        </g>
        {/* Connection line between figures */}
        <path
          d="M218 310 Q260 298 302 310"
          stroke="rgba(59, 130, 246, 0.35)"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Decorative orbs */}
        <circle cx="108" cy="148" r="22" fill="#3b82f6" fillOpacity="0.14" />
        <circle cx="412" cy="168" r="18" fill="#3b82f6" fillOpacity="0.12" />
        <circle cx="260" cy="98" r="10" fill="#60a5fa" fillOpacity="0.45" />
      </svg>
    </div>
  );
}
