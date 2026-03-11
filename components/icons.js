import React from 'react';

function IconBase({ children, size = 24, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const createIcon = (children) => function Icon(props) {
  return <IconBase {...props}>{children}</IconBase>;
};

export const ArrowLeft = createIcon(<path d="m15 18-6-6 6-6" />);
export const ArrowRight = createIcon(<path d="m9 18 6-6-6-6" />);
export const Home = createIcon(<><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></>);
export const CheckCircle = createIcon(<><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></>);
export const Target = createIcon(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>);
export const AlertTriangle = createIcon(<><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 9v5" /><path d="M12 17h.01" /></>);
export const BookOpen = createIcon(<><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H11v16H5.5A2.5 2.5 0 0 0 3 22Z" /><path d="M21 6.5A2.5 2.5 0 0 0 18.5 4H13v16h5.5A2.5 2.5 0 0 1 21 22Z" /></>);
export const Users = createIcon(<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2" /><path d="M15 20a5 5 0 0 1 6 0" /></>);
export const ShieldCheck = createIcon(<><path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>);
export const Gavel = createIcon(<><path d="m14 6 4 4" /><path d="m10 10 4 4" /><path d="m3 21 7-7" /><rect x="11" y="3" width="6" height="4" rx="1" transform="rotate(45 14 5)" /></>);
export const FileText = createIcon(<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /><path d="M9 13h6" /><path d="M9 17h6" /><path d="M9 9h2" /></>);
export const Handshake = createIcon(<><path d="M7 12 3 8l3-3 4 4" /><path d="m17 12 4-4-3-3-4 4" /><path d="m8 13 3 3a2 2 0 0 0 3 0l2-2" /><path d="M6 10h2l4-4h4" /></>);
export const Scale = createIcon(<><path d="M12 3v18" /><path d="M5 7h14" /><path d="m7 7-3 6h6l-3-6Z" /><path d="m17 7-3 6h6l-3-6Z" /><path d="M8 21h8" /></>);
export const Briefcase = createIcon(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></>);
export const HeartHandshake = createIcon(<><path d="M12 20c-4-2.5-7-5-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4-3 6.5-7 9Z" /><path d="m9.5 13 1.5 1.5L14.5 11" /></>);
export const X = createIcon(<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>);
