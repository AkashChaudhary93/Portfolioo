import React from 'react';

const SpiderSticker = () => {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 spider-swing select-none pointer-events-none">
      <div className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-28 w-0 border-l-2 border-black"></div>
        <div className="mt-28 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-md p-3 rotate-[-6deg] spider-pulse">
          <div className="relative w-36 h-36 md:w-44 md:h-44 hover-pop hover-tilt">
            <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" aria-hidden="true">
              <g transform="translate(130 128) rotate(-18) translate(-130 -128)">
                {/* body */}
                <path d="M118 92 C128 86 138 86 147 92 C165 104 174 123 174 145 C174 168 165 187 150 201 C141 209 130 214 118 214 C106 214 95 209 86 201 C71 187 62 168 62 145 C62 123 71 104 89 92 C98 86 108 86 118 92 Z" fill="#d62828" stroke="#000" strokeWidth="8"/>
                <path d="M118 92 C128 86 138 86 147 92 C154 96 160 102 165 109 C149 116 135 124 118 136 C101 124 87 116 71 109 C76 102 82 96 89 92 C98 86 108 86 118 92 Z" fill="#20457c" stroke="#000" strokeWidth="8"/>
                <path d="M88 111 C100 118 110 125 118 136 C126 125 136 118 148 111" fill="none" stroke="#000" strokeWidth="4"/>
                <path d="M81 130 C94 136 106 144 118 156 C130 144 142 136 155 130" fill="none" stroke="#000" strokeWidth="4"/>
                <path d="M79 150 C92 156 104 165 118 178 C132 165 144 156 157 150" fill="none" stroke="#000" strokeWidth="4"/>
                <path d="M86 172 C97 179 107 187 118 198 C129 187 139 179 150 172" fill="none" stroke="#000" strokeWidth="4"/>

                {/* head */}
                <path d="M118 26 C151 26 177 51 177 84 C177 110 163 128 142 140 C134 145 126 147 118 147 C110 147 102 145 94 140 C73 128 59 110 59 84 C59 51 85 26 118 26 Z" fill="#d62828" stroke="#000" strokeWidth="8"/>
                <path d="M78 61 C92 51 105 45 118 45 C131 45 144 51 158 61" fill="none" stroke="#000" strokeWidth="5"/>
                <path d="M70 82 C86 71 101 65 118 65 C135 65 150 71 166 82" fill="none" stroke="#000" strokeWidth="5"/>
                <path d="M67 102 C84 92 100 88 118 88 C136 88 152 92 169 102" fill="none" stroke="#000" strokeWidth="5"/>
                <path d="M70 123 C87 114 101 109 118 109 C135 109 149 114 166 123" fill="none" stroke="#000" strokeWidth="5"/>
                <path d="M118 28 C118 48 118 67 118 89" fill="none" stroke="#000" strokeWidth="5"/>
                <path d="M96 31 C104 48 110 65 118 89" fill="none" stroke="#000" strokeWidth="4"/>
                <path d="M140 31 C132 48 126 65 118 89" fill="none" stroke="#000" strokeWidth="4"/>

                {/* mask eyes */}
                <ellipse cx="98" cy="88" rx="26" ry="22" fill="#fff" stroke="#000" strokeWidth="7" transform="rotate(-10 98 88)"/>
                <ellipse cx="138" cy="88" rx="26" ry="22" fill="#fff" stroke="#000" strokeWidth="7" transform="rotate(10 138 88)"/>

                {/* arms */}
                <path d="M87 145 C62 164 43 182 28 208" fill="none" stroke="#000" strokeWidth="16" strokeLinecap="round"/>
                <path d="M86 145 C63 161 49 178 35 202" fill="none" stroke="#20457c" strokeWidth="10" strokeLinecap="round"/>
                <path d="M145 146 C167 129 182 111 193 84" fill="none" stroke="#000" strokeWidth="16" strokeLinecap="round"/>
                <path d="M145 146 C166 131 180 114 191 87" fill="none" stroke="#20457c" strokeWidth="10" strokeLinecap="round"/>

                {/* legs */}
                <path d="M92 196 C78 214 67 224 47 233" fill="none" stroke="#000" strokeWidth="16" strokeLinecap="round"/>
                <path d="M92 196 C79 212 68 223 50 230" fill="none" stroke="#20457c" strokeWidth="10" strokeLinecap="round"/>
                <path d="M147 196 C165 205 180 216 198 235" fill="none" stroke="#000" strokeWidth="16" strokeLinecap="round"/>
                <path d="M147 196 C165 206 179 217 196 232" fill="none" stroke="#20457c" strokeWidth="10" strokeLinecap="round"/>

                {/* hand web shoot */}
                <path d="M24 206 C16 200 12 193 10 186" fill="none" stroke="#000" strokeWidth="10" strokeLinecap="round"/>
                <path d="M191 84 C202 72 209 58 213 41" fill="none" stroke="#000" strokeWidth="10" strokeLinecap="round"/>
              </g>
            </svg>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-lime-green border-4 border-black px-3 py-1 font-black uppercase text-[10px] tracking-[0.3em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              Spider Mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiderSticker;
