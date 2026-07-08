import { useEffect, useRef } from "react";

const SKILLS = [
  { name: "HTML5", kind: "Markup", lvl: 95, glow: "var(--c-html)", glowSoft: "rgba(255,106,61,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z" stroke="#ff6a3d" stroke-width="1.4" stroke-linejoin="round"/><path d="M7 7h10l-.4 4.2H8.9l.2 2.3 2.9.9 2.9-.9.2-2" stroke="#ff6a3d" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { name: "CSS", kind: "Style", lvl: 90, glow: "var(--c-css)", glowSoft: "rgba(59,158,255,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z" stroke="#3b9eff" stroke-width="1.4" stroke-linejoin="round"/><path d="M16.5 7H7l.3 3h8.4l-.5 5.2-3.2 1-3.2-1-.2-2" stroke="#3b9eff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { name: "Bootstrap 5.3", kind: "Framework", lvl: 85, glow: "var(--c-boot)", glowSoft: "rgba(148,87,255,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="4" stroke="#9457ff" stroke-width="1.4"/><path d="M9.5 8h3.6a2.1 2.1 0 0 1 0 4.2H9.5V8Zm0 4.2h4a2.1 2.1 0 0 1 0 4.2H9.5v-4.2Z" stroke="#9457ff" stroke-width="1.4" stroke-linejoin="round"/></svg>` },
  { name: "JavaScript", kind: "Language", lvl: 90, glow: "var(--c-js)", glowSoft: "rgba(242,203,59,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#f2cb3b" stroke-width="1.4"/><path d="M10.6 8v6.2c0 1.4-.6 1.9-1.6 1.9-.7 0-1.2-.3-1.6-.8" stroke="#f2cb3b" stroke-width="1.4" stroke-linecap="round"/><path d="M13.6 13.9c.4.6 1 1.1 1.9 1.1 1 0 1.6-.5 1.6-1.2 0-.9-.6-1.2-1.7-1.6-1.2-.4-2-.9-2-2.1 0-1.1.9-1.9 2.2-1.9.9 0 1.6.3 2 .9" stroke="#f2cb3b" stroke-width="1.4" stroke-linecap="round"/></svg>` },
  { name: "React", kind: "Library", lvl: 88, glow: "var(--c-react)", glowSoft: "rgba(53,208,224,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1.9" fill="#35d0e0"/><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#35d0e0" stroke-width="1.3"/><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#35d0e0" stroke-width="1.3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#35d0e0" stroke-width="1.3" transform="rotate(120 12 12)"/></svg>` },
  { name: "Tailwind CSS", kind: "Style", lvl: 92, glow: "var(--c-tw)", glowSoft: "rgba(56,212,196,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 10.5c.7-2.8 2.3-4.2 4.7-4.2 3.1 0 3.6 2.5 5.3 2.9 1.3.3 2.4-.2 3-1.7-.7 2.8-2.3 4.2-4.7 4.2-3.1 0-3.6-2.5-5.3-2.9-1.3-.3-2.4.2-3 1.7Z" stroke="#38d4c4" stroke-width="1.3" stroke-linejoin="round"/><path d="M3 15.8c.7-2.8 2.3-4.2 4.7-4.2 3.1 0 3.6 2.5 5.3 2.9 1.3.3 2.4-.2 3-1.7-.7 2.8-2.3 4.2-4.7 4.2-3.1 0-3.6-2.5-5.3-2.9-1.3-.3-2.4.2-3 1.7Z" stroke="#38d4c4" stroke-width="1.3" stroke-linejoin="round"/></svg>` },
  { name: "GitHub", kind: "Tool", lvl: 85, glow: "var(--c-git)", glowSoft: "rgba(255,255,255,.28)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" fill="#ffffff"/></svg>` },
  { name: "Next JS", kind: "Framework", lvl: 80, glow: "var(--c-next)", glowSoft: "rgba(185,191,202,.32)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.3" stroke="#b9bfca" stroke-width="1.3"/><path d="M9 8v8" stroke="#b9bfca" stroke-width="1.4" stroke-linecap="round"/><path d="M9 8l6.2 8" stroke="#b9bfca" stroke-width="1.4" stroke-linecap="round"/><path d="M15.2 8v6" stroke="#b9bfca" stroke-width="1.4" stroke-linecap="round"/></svg>` },
  { name: "TypeScript", kind: "Language", lvl: 82, glow: "var(--c-ts)", glowSoft: "rgba(59,130,246,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#3b82f6" stroke-width="1.4"/><path d="M13 9h5M15.5 9v7" stroke="#3b82f6" stroke-width="1.4" stroke-linecap="round"/><path d="M11 12.3c0-.9-.7-1.3-1.6-1.3-1 0-1.6.5-1.6 1.2 0 1.9 3.4 1 3.4 3 0 .8-.7 1.4-1.8 1.4-1 0-1.7-.4-2-1.1" stroke="#3b82f6" stroke-width="1.4" stroke-linecap="round"/></svg>` },
  { name: "Redux", kind: "State Mgmt", lvl: 78, glow: "var(--c-redux)", glowSoft: "rgba(118,74,188,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1.8" fill="#a78bfa"/><path d="M15.5 13.2c1.6-.3 2.7-1 2.6-2.1-.1-1.5-2.4-2.4-5.2-2.1" stroke="#a78bfa" stroke-width="1.3" stroke-linecap="round"/><path d="M8.7 8.6C6 9.7 4.3 11.3 5 12.6c.7 1.3 3.4 1.5 6.2.6" stroke="#a78bfa" stroke-width="1.3" stroke-linecap="round"/><path d="M13.6 17.4c1 2.4 2.3 3.9 3.5 3.4 1.4-.6 1.6-3.3.4-6" stroke="#a78bfa" stroke-width="1.3" stroke-linecap="round"/><circle cx="18" cy="10.6" r="1.2" fill="#a78bfa"/><circle cx="5.4" cy="13" r="1.2" fill="#a78bfa"/><circle cx="16.8" cy="20" r="1.2" fill="#a78bfa"/></svg>` },
  { name: "Sass / SCSS", kind: "Style", lvl: 84, glow: "var(--c-sass)", glowSoft: "rgba(236,102,140,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M14.4 4.2c1.6.4 2.4 1.7 2 3.4-.2.9-.7 1.6-1.3 2.3.8.2 1.4.6 1.7 1.3.6 1.4-.3 3-2 4.1-1.9 1.2-4.2 1.5-5.1.6-.5-.5-.4-1.2.2-1.9.9.4 2.3.4 3.4-.2.9-.5 1.3-1.2 1-1.8-.3-.6-1.2-.7-2.4-.5-1.8.4-3.5-.1-3.9-1.5-.5-1.7 1-3.6 3.4-4.5.9-.3 1.9-.5 3-.3Z" stroke="#ec668c" stroke-width="1.3" stroke-linejoin="round"/></svg>` },
  { name: "Figma", kind: "Design", lvl: 75, glow: "var(--c-figma)", glowSoft: "rgba(45,212,148,.3)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 3h3v4.5H9a2.25 2.25 0 0 1 0-4.5Z" fill="#f24e1e"/><path d="M12 3h3a2.25 2.25 0 0 1 0 4.5h-3V3Z" fill="#ff7262"/><path d="M9 7.5h3V12H9a2.25 2.25 0 0 1 0-4.5Z" fill="#a259ff"/><path d="M9 12h3v4.5H9A2.25 2.25 0 0 1 9 12Z" fill="#1abcfe"/><circle cx="13.25" cy="14.25" r="2.25" fill="#0acf83"/></svg>` },
  { name: "Framer Motion", kind: "Animation", lvl: 76, glow: "var(--c-framer)", glowSoft: "rgba(5,150,255,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 3h12v6h-6l6 6H6V9h6L6 3Z" fill="#0af"/><path d="M6 15h6v6l-6-6Z" fill="#0af" opacity=".7"/></svg>` },
  { name: "Firebase", kind: "Backend", lvl: 79, glow: "var(--c-firebase)", glowSoft: "rgba(255,202,40,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M6.5 17.5 8.2 4.3c.1-.7 1-.8 1.3-.2l1.7 3.3-4.7 10.1Z" fill="#ffa000"/><path d="M6.5 17.5 8.2 4.3l3.7 6.9-1.7 2.3-3.7 4Z" fill="#ff8f00" opacity=".85"/><path d="M6.5 17.5 12 14.5l3.5-6.5c.3-.6 1.2-.5 1.3.2l1.7 9.3-9.5 4.5-2.5-5Z" fill="#ffca28"/><path d="M6.5 17.5 12 14.5l6.5 3.5-6.5 4-5.5-4.5Z" fill="#ffa000"/></svg>` },
  { name: "REST API", kind: "Integration", lvl: 87, glow: "var(--c-rest)", glowSoft: "rgba(34,197,94,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="7" height="7" rx="1.5" stroke="#22c55e" stroke-width="1.4"/><rect x="14" y="4" width="7" height="7" rx="1.5" stroke="#22c55e" stroke-width="1.4"/><rect x="8.5" y="14" width="7" height="7" rx="1.5" stroke="#22c55e" stroke-width="1.4"/><path d="M6.5 11v3M17.5 11v3M9.5 14l-3-3M14.5 14l3-3" stroke="#22c55e" stroke-width="1.3" stroke-linecap="round"/></svg>` },
  { name: "Context API", kind: "State Mgmt", lvl: 83, glow: "var(--c-ctx)", glowSoft: "rgba(97,218,251,.35)",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="6" height="6" rx="1.2" stroke="#61dafb" stroke-width="1.4"/><circle cx="5" cy="6" r="1.6" stroke="#61dafb" stroke-width="1.3"/><circle cx="19" cy="6" r="1.6" stroke="#61dafb" stroke-width="1.3"/><circle cx="5" cy="18" r="1.6" stroke="#61dafb" stroke-width="1.3"/><circle cx="19" cy="18" r="1.6" stroke="#61dafb" stroke-width="1.3"/><path d="M6.2 7.2 9.3 10M17.8 7.2 14.7 10M6.2 16.8 9.3 14M17.8 16.8 14.7 14" stroke="#61dafb" stroke-width="1.2" stroke-linecap="round"/></svg>` },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

  .myskills-root{
    --line: rgba(255,255,255,0.07);
    --text: #eceff4;
    --muted: #838ea3;
    --card: rgba(255,255,255,0.025);
    --c-html:#ff6a3d; --c-css:#3b9eff; --c-boot:#9457ff; --c-js:#f2cb3b;
    --c-react:#35d0e0; --c-tw:#38d4c4; --c-git:#ffffff; --c-next:#b9bfca;
    --c-ts:#3b82f6; --c-redux:#a78bfa; --c-sass:#ec668c; --c-figma:#a259ff;
    --c-framer:#0af; --c-firebase:#ffca28; --c-rest:#22c55e; --c-ctx:#61dafb;

    min-height:100vh;
    width:100%;
    margin:0;
    background:
      radial-gradient(60% 50% at 50% -10%, rgba(91,140,255,0.10), transparent 60%),
      radial-gradient(50% 40% at 90% 100%, rgba(168,85,247,0.08), transparent 60%),
      var(--bg);
    color:var(--text);
    font-family:'Inter', sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  .myskills-root *{ box-sizing:border-box; }

  .ms-stage{ max-width:1080px; margin:0 auto; padding:100px 32px 120px; }

  .ms-eyebrow{
    display:flex; align-items:center; gap:10px; justify-content:center;
    font-family:'JetBrains Mono', monospace; font-size:12.5px; letter-spacing:.14em;
    color:var(--muted); margin-bottom:18px; opacity:0;
    animation: msRiseIn .7s cubic-bezier(.2,.8,.2,1) forwards;
  }
  .ms-eyebrow .dot{
    width:6px; height:6px; border-radius:50%;
    background:linear-gradient(135deg,var(--c-react),var(--c-boot));
    box-shadow:0 0 12px rgba(168,85,247,.8);
  }

  .ms-title{
    text-align:center; font-family:'Space Grotesk', sans-serif; font-weight:700;
    font-size:clamp(34px,5vw,52px); letter-spacing:-0.02em; margin:0 0 12px;
    opacity:0; animation: msRiseIn .7s cubic-bezier(.2,.8,.2,1) .08s forwards;
  }
  .ms-title .accent{
    background:linear-gradient(120deg, var(--c-react), var(--c-boot) 60%, var(--c-tw));
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }

  .ms-subtitle{
    text-align:center; color:var(--muted); font-size:15px; max-width:460px;
    margin:0 auto 56px; line-height:1.6; opacity:0;
    animation: msRiseIn .7s cubic-bezier(.2,.8,.2,1) .16s forwards;
  }

  @keyframes msRiseIn{ from{opacity:0; transform:translateY(14px);} to{opacity:1; transform:translateY(0);} }

  .ms-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
  @media (max-width:900px){ .ms-grid{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:480px){ .ms-grid{ grid-template-columns:1fr 1fr; gap:12px; } }

  .ms-card{
    position:relative; background:var(--card); border:1px solid var(--line);
    border-radius:18px; padding:20px 20px 22px; overflow:hidden; cursor:default;
    opacity:0; transform:translateY(22px);
    animation: msCardIn .6s cubic-bezier(.2,.8,.2,1) forwards;
    transition: border-color .35s ease, transform .12s ease;
    transform-style:preserve-3d; will-change:transform;
  }
  @keyframes msCardIn{ to{ opacity:1; transform:translateY(0); } }

  .ms-card::before{
    content:""; position:absolute; inset:0; border-radius:18px; padding:1px;
    background:radial-gradient(160px circle at var(--mx,50%) var(--my,50%), var(--glow), transparent 70%);
    -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    opacity:0; transition:opacity .35s ease; pointer-events:none;
  }
  .ms-card::after{
    content:""; position:absolute; inset:0; border-radius:18px;
    background:radial-gradient(220px circle at var(--mx,50%) var(--my,50%), var(--glow-soft), transparent 65%);
    opacity:0; transition:opacity .35s ease; pointer-events:none;
  }
  .ms-card:hover::before, .ms-card:hover::after{ opacity:1; }
  .ms-card:hover{ border-color:transparent; }

  .ms-badge{
    width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
    background:linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015));
    border:1px solid var(--line); margin-bottom:18px; position:relative; z-index:1;
    transition:transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease;
  }
  .ms-card:hover .ms-badge{ transform:translateY(-3px) rotate(-4deg); box-shadow:0 8px 24px -8px var(--glow); }
  .ms-badge svg{ width:26px; height:26px; }

  .ms-name{ font-family:'Space Grotesk', sans-serif; font-weight:600; font-size:16.5px; letter-spacing:-.01em; margin:0 0 3px; position:relative; z-index:1; }
  .ms-kind{ font-family:'JetBrains Mono', monospace; font-size:10.5px; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); margin:0 0 16px; position:relative; z-index:1; }

  .ms-meter{ height:3px; border-radius:3px; background:rgba(255,255,255,0.06); overflow:hidden; position:relative; z-index:1; }
  .ms-meter span{ display:block; height:100%; width:0%; border-radius:3px; background:linear-gradient(90deg, var(--glow), var(--glow-soft)); transition:width 1.1s cubic-bezier(.2,.8,.2,1); }
  .ms-card.in-view .ms-meter span{ width:var(--lvl); }

  .ms-lvl-label{ display:flex; justify-content:space-between; font-family:'JetBrains Mono', monospace; font-size:10px; color:var(--muted); margin-top:7px; position:relative; z-index:1; }

  .ms-footer{ text-align:center; margin-top:60px; color:var(--muted); font-size:12.5px; font-family:'JetBrains Mono', monospace; letter-spacing:.05em; opacity:0; animation: msRiseIn .7s ease .5s forwards; }

  @media (prefers-reduced-motion: reduce){ .myskills-root *{ animation-duration:.01ms !important; transition-duration:.01ms !important; } }
`;

function SkillCard({ skill, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.animationDelay = `${0.18 + index * 0.06}s`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
    const rx = ((y / r.height) - 0.5) * -6;
    const ry = ((x / r.width) - 0.5) * 6;
    e.currentTarget.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      className="ms-card"
      style={{ "--glow": skill.glow, "--glow-soft": skill.glowSoft, "--lvl": `${skill.lvl}%` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ms-badge" dangerouslySetInnerHTML={{ __html: skill.icon }} />
      <p className="ms-name">{skill.name}</p>
      <p className="ms-kind">{skill.kind}</p>
      <div className="ms-meter"><span /></div>
      <div className="ms-lvl-label">
        <span>Proficiency</span>
        <span>{skill.lvl}%</span>
      </div>
    </div>
  );
}

export default function MySkills() {
  return (
    <div className="myskills-root">
        <h2 className='text-center lg:text-[30px] text-[22px] text-white font-bold font-main lg:border-b-4 border-b-2 border-amber-300 w-fit mx-auto '> My Skills</h2>
      <style>{CSS}</style>
      <div className="ms-stage">

        <div className="ms-grid">
          {SKILLS.map((s, i) => (
            <SkillCard skill={s} index={i} key={s.name} />
          ))}
        </div>
        
      </div>
    </div>
  );
}