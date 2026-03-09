import { useState, useEffect } from "react";

const TABS = [
  { id: "thesis", label: "The Thesis" },
  { id: "test", label: "How to Test It" },
  { id: "risks", label: "Risks + Why Sid" },
];

const C = {
  bg: "#0B0F0E", card: "#141A18", border: "#243029",
  green: "#00B37D", greenMuted: "#00B37D33", greenDim: "#1A4D3A",
  gusto: "#F4694C", gustoMuted: "#F4694C22", gustoDim: "#4D2218",
  amber: "#E8A849", amberMuted: "#E8A84922",
  text: "#E8ECE9", textMuted: "#C0CBC5", textDim: "#8A9B92",
};
const F = {
  display: "'Instrument Serif', 'Playfair Display', Georgia, serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
  body: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
};

const Pill = ({ children, color = C.green }) => (
  <span style={{ display:"inline-block", padding:"3px 10px", borderRadius:"4px", fontSize:"11px", fontFamily:F.mono, fontWeight:500, color, backgroundColor:`${color}18`, letterSpacing:"0.03em", textTransform:"uppercase" }}>{children}</span>
);
const SL = ({ children }) => (
  <div style={{ fontFamily:F.display, fontSize:"20px", color:C.text, marginBottom:"14px", marginTop:"40px", paddingTop:"8px", borderTop:`1px solid ${C.border}` }}>{children}</div>
);
const Card = ({ children, style = {}, hl }) => (
  <div style={{ backgroundColor:C.card, border:`1px solid ${hl ? `${hl}44` : C.border}`, borderRadius:"8px", padding:"24px", ...style }}>{children}</div>
);

// ── Email Demo ──
function EmailDemo() {
  const [s, setS] = useState(0);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!on) return;
    const t = [setTimeout(()=>setS(1),400),setTimeout(()=>setS(2),1200),setTimeout(()=>setS(3),2000),setTimeout(()=>setS(4),3000),setTimeout(()=>setS(5),3800)];
    return () => t.forEach(clearTimeout);
  }, [on]);
  const reset = () => { setS(0); setOn(false); };
  const fade = (min, dy = "8px", dur = "0.5s") => ({ opacity: s >= min ? 1 : 0, transform: s >= min ? "translateY(0)" : `translateY(${dy})`, transition: `all ${dur} ease` });

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
        <div style={{ fontFamily:F.mono, fontSize:"11px", color:C.green, textTransform:"uppercase", letterSpacing:"0.08em" }}>MVP Demo — The Proactive Alert</div>
        <button onClick={on ? reset : () => setOn(true)} style={{ fontFamily:F.mono, fontSize:"11px", padding:"6px 16px", backgroundColor:on?C.card:C.green, color:on?C.textMuted:C.bg, border:`1px solid ${on?C.border:C.green}`, borderRadius:"4px", cursor:"pointer" }}>{on ? "Reset" : "Play Demo"}</button>
      </div>
      <div style={{ backgroundColor:"#0D1210", borderRadius:"8px", border:`1px solid ${C.border}`, overflow:"hidden", opacity:on?1:0.5, transition:"opacity 0.4s" }}>
        {/* Header */}
        <div style={{ padding:"16px 20px", borderBottom:`1px solid ${C.border}`, ...fade(1, "-10px") }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ width:"32px", height:"32px", borderRadius:"50%", backgroundColor:C.greenDim, border:`1.5px solid ${C.green}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F.body, fontSize:"13px", fontWeight:700, color:C.green }}>G</div>
              <div>
                <div style={{ fontFamily:F.body, fontSize:"13px", fontWeight:600, color:C.text }}>Gusto Pulse</div>
                <div style={{ fontFamily:F.mono, fontSize:"10px", color:C.textDim }}>alerts@gusto.com</div>
              </div>
            </div>
            <div style={{ fontFamily:F.mono, fontSize:"10px", color:C.textDim }}>Just now</div>
          </div>
          <div style={{ fontFamily:F.body, fontSize:"14px", fontWeight:600, color:C.text, marginTop:"12px" }}>Heads up — May payroll may be tight</div>
        </div>
        {/* Body */}
        <div style={{ padding:"20px" }}>
          <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7, marginBottom:"16px", ...fade(2) }}>
            Hi Sarah — based on your payroll schedule, upcoming Q2 estimated taxes, and your last 14 months of cash flow patterns, we're seeing something worth flagging:
          </div>
          {/* Alert */}
          <div style={{ padding:"16px 20px", backgroundColor:C.amberMuted, borderRadius:"6px", border:`1px solid ${C.amber}33`, marginBottom:"16px", ...fade(3, "12px", "0.6s") }}>
            <div style={{ fontFamily:F.body, fontSize:"13px", fontWeight:600, color:C.amber, marginBottom:"6px" }}>You might not have enough to cover both payroll and taxes the week of May 12</div>
            <div style={{ fontFamily:F.body, fontSize:"12px", color:C.textMuted, lineHeight:1.6 }}>Your next payroll is about $34,200 (May 15). Quarterly estimated taxes are about $8,400 (due May 12). Based on how cash has flowed through your account over the last 14 months, you'll probably have around $47,000 at that point — enough, but tighter than usual. We wanted to flag it now so you have time to plan, not scramble.</div>
          </div>
          {/* Chart */}
          <div style={{ marginBottom:"16px", opacity:s>=3?1:0, transition:"opacity 0.5s ease 0.2s" }}>
            <div style={{ display:"flex", alignItems:"flex-end", gap:"3px", height:"50px", marginBottom:"8px" }}>
              {[62,58,65,48,55,52,50,54,44,38,42,48].map((h,i)=>(
                <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:"2px 2px 0 0", backgroundColor:i>=8?C.amber:C.green, opacity:i>=8?0.6:0.4+(i*0.04) }}/>
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", fontFamily:F.mono, fontSize:"9px", color:C.textDim }}>
              <span>Mar</span><span>Apr</span><span>May (projected)</span>
            </div>
          </div>
          {/* CTAs */}
          <div style={fade(4)}>
            <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, marginBottom:"14px" }}>You have options:</div>
            <div style={{ display:"flex", gap:"8px", marginBottom:"16px", flexWrap:"wrap" }}>
              <div style={{ padding:"8px 16px", backgroundColor:C.greenDim, border:`1px solid ${C.green}66`, borderRadius:"6px", fontFamily:F.body, fontSize:"12px", color:C.green, fontWeight:600 }}>Explore Payroll Bridge</div>
              <div style={{ padding:"8px 16px", backgroundColor:C.card, border:`1px solid ${C.border}`, borderRadius:"6px", fontFamily:F.body, fontSize:"12px", color:C.textMuted }}>Adjust pay timing</div>
              <div style={{ padding:"8px 16px", backgroundColor:C.card, border:`1px solid ${C.border}`, borderRadius:"6px", fontFamily:F.body, fontSize:"12px", color:C.textMuted }}>Dismiss</div>
            </div>
          </div>
          {/* Footer */}
          <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:"12px", opacity:s>=5?1:0, transition:"opacity 0.5s" }}>
            <div style={{ fontFamily:F.mono, fontSize:"10px", color:C.textDim, lineHeight:1.6 }}>This forecast is based on your payroll history, tax schedule, and typical cash flow patterns. It updates every time you run payroll. Not financial advice — just a heads up from the data you already generate.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Flywheel ──
function Flywheel() {
  const [a, setA] = useState(false);
  useEffect(() => { const t = setTimeout(() => setA(true), 300); return () => clearTimeout(t); }, []);
  const nodes = [
    { label: "Payroll Data\n(generated, not observed)", x: 50, y: 6, d: 0 },
    { label: "Cash Flow\nIntelligence", x: 90, y: 45, d: 0.2 },
    { label: "Financial Products\n(trust)", x: 50, y: 84, d: 0.4 },
    { label: "Deeper Adoption\n(lock-in)", x: 10, y: 45, d: 0.6 },
  ];
  return (
    <div style={{ position:"relative", width:"100%", height:"260px" }}>
      <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", textAlign:"center", opacity:a?1:0, transition:"opacity 0.8s ease 1.2s" }}>
        <div style={{ fontFamily:F.display, fontSize:"15px", color:C.green }}>Compounding</div>
        <div style={{ fontFamily:F.display, fontSize:"15px", color:C.green }}>Signal</div>
      </div>
      <svg style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", opacity:a?0.3:0, transition:"opacity 0.8s ease 0.8s" }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 50 12 C 80 12, 94 32, 94 50 C 94 68, 80 88, 50 88 C 20 88, 6 68, 6 50 C 6 32, 20 12, 50 12" fill="none" stroke={C.green} strokeWidth="0.3" strokeDasharray="2,2"/>
      </svg>
      {nodes.map((n, i) => (
        <div key={i} style={{ position:"absolute", left:`${n.x}%`, top:`${n.y}%`, transform:"translate(-50%,-50%)", textAlign:"center", opacity:a?1:0, transition:`all 0.6s ease ${n.d}s` }}>
          <div style={{ width:"46px", height:"46px", borderRadius:"50%", backgroundColor:C.greenDim, border:`1.5px solid ${C.green}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 6px", fontFamily:F.mono, fontSize:"12px", color:C.green, fontWeight:700 }}>{i+1}</div>
          <div style={{ fontFamily:F.mono, fontSize:"8px", color:C.text, textTransform:"uppercase", letterSpacing:"0.04em", maxWidth:"100px", lineHeight:1.4, whiteSpace:"pre-line" }}>{n.label}</div>
        </div>
      ))}
      {[{t:"Feeds →",x:74,y:20},{t:"← Enables",x:80,y:70},{t:"← Drives",x:24,y:72},{t:"Generates →",x:16,y:20}].map((a2,i) => (
        <div key={i} style={{ position:"absolute", left:`${a2.x}%`, top:`${a2.y}%`, transform:"translate(-50%,-50%)", fontFamily:F.mono, fontSize:"8px", color:C.textDim, textTransform:"uppercase", opacity:a?1:0, transition:`opacity 0.6s ease ${0.8+i*0.1}s` }}>{a2.t}</div>
      ))}
    </div>
  );
}

// ── TAB 1: THE THESIS ──
function ThesisTab() {
  return (
    <div>
      {/* Headline */}
      <h2 style={{ fontFamily:F.display, fontSize:"32px", color:C.text, lineHeight:1.25, margin:"0 0 16px", maxWidth:"640px" }}>
        Gusto doesn't observe your financial data. <span style={{ color:C.green }}>They generate it.</span>
      </h2>
      <p style={{ fontFamily:F.body, fontSize:"15px", color:C.textMuted, lineHeight:1.7, maxWidth:"640px", marginBottom:"28px" }}>
        Every payroll vendor is converging on the same product — payroll + benefits + hiring + time tracking. Porter's Five Forces on this market: rivalry is high and intensifying, while switching friction and compliance barriers provide only medium insulation. Rippling ships faster with modular architecture, ADP has decades of enterprise distribution, OnPay undercuts on price. Gusto can't win the feature war. But Gusto has something none of them can replicate: every time it processes payroll, it <em>creates</em> verified financial data — real money moving to real people at real amounts on a known schedule. Banks see 12-month-old tax returns. QuickBooks sees self-reported bookkeeping. Gusto sees ground truth, generated as a byproduct of the product itself.
      </p>

      {/* Gusto Money acknowledgment */}
      <Card hl={C.gusto} style={{ borderLeft:`3px solid ${C.gusto}`, marginBottom:"28px" }}>
        <div style={{ fontFamily:F.body, fontSize:"14px", color:C.text, lineHeight:1.7 }}>
          <strong style={{ color:C.gusto }}>Gusto already knows this.</strong> They launched Gusto Money in 2025 — Payroll Bridge (credit via Parafin), Bill Pay, Invoicing, Instant Pay. ARR grew 140%+ YoY. Their GM called Payroll Bridge "the first expression of a much broader vision." But today, every Gusto Money product is <strong>reactive</strong> — it helps when you're already in trouble. The strategic question is whether <strong>proactive intelligence</strong> changes behavior. That's what this artifact tests.
        </div>
      </Card>

      {/* Sarah context + Demo */}
      <SL>What this looks like for a business owner</SL>
      <Card style={{ marginBottom:"12px" }}>
        <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7, fontStyle:"italic" }}>
          Sarah runs a landscaping company with 12 employees. She's between a morning crew dispatch and a client call. She has 90 seconds of attention on her phone. She doesn't think in "payroll coverage ratios" — she thinks "can I make payroll this month?" She doesn't have a bookkeeper. Her "financial planning" is checking her bank app before bed. This email needs to earn those 90 seconds.
        </div>
      </Card>
      <Card style={{ marginBottom:"32px" }}>
        <EmailDemo />
      </Card>

      {/* Flywheel + Loops */}
      <SL>Why this compounds — and what limits it</SL>
      <Card>
        <Flywheel />
        <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7, marginTop:"12px", padding:"14px", backgroundColor:C.greenMuted, borderRadius:"6px" }}>
          <strong style={{ color:C.green }}>The reinforcing loop:</strong> Each payroll cycle generates dense, per-employee data (hours, compensation, deductions, taxes, benefits). ~26 biweekly cycles/year across 400K businesses. Better data → better predictions → more trust → more financial product adoption → deeper switching costs → more retention → more data. Through the B=MAT lens: Motivation to switch drops (you'd lose your financial memory), Ability drops (can't rebuild history elsewhere), and there's no Trigger (if Pulse is proactive, there's no frustration moment to prompt a search). A competitor starting today would need years of payroll history to match.
        </div>
        <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7, marginTop:"12px", padding:"14px", backgroundColor:C.amberMuted, borderRadius:"6px" }}>
          <strong style={{ color:C.amber }}>The balancing loops:</strong> No reinforcing loop runs forever. Three forces cap this flywheel: <strong style={{ color:C.text }}>(a) SMB mortality</strong> — small businesses die at a high rate, so Gusto constantly loses the businesses whose data is most mature. <strong style={{ color:C.text }}>(b) Trust ceiling</strong> — there's a psychological threshold beyond which owners won't let their payroll processor make financial recommendations. A payroll company suggesting a credit line feels different from a bank doing it. <strong style={{ color:C.text }}>(c) Regulatory drag</strong> — as Gusto moves from showing intelligence to acting on it, compliance costs increase non-linearly. These don't kill the thesis — but they define its ceiling.
        </div>
      </Card>
    </div>
  );
}

// ── TAB 2: HOW TO TEST IT ──
function TestTab() {
  return (
    <div>
      <h2 style={{ fontFamily:F.display, fontSize:"32px", color:C.text, lineHeight:1.25, margin:"0 0 16px", maxWidth:"640px" }}>
        The thesis is only worth testing if <span style={{ color:C.amber }}>SMB owners actually want foresight from their payroll provider.</span>
      </h2>
      <p style={{ fontFamily:F.body, fontSize:"14px", color:C.textMuted, lineHeight:1.7, maxWidth:"640px", marginBottom:"28px" }}>
        Gusto's brand is "payroll in a few clicks." If we propose "build Pulse" without testing demand, we're assuming the answer. Superhuman didn't build features first — they ran the Sean Ellis survey, found only 22% "very disappointed," segmented to find who loved the product, then built only for that segment. Same discipline applies here.
      </p>

      <div style={{ display:"flex", flexDirection:"column", gap:"16px", marginBottom:"32px" }}>
        {/* Phase 1 */}
        <Card>
          <div style={{ display:"flex", gap:"16px", alignItems:"flex-start" }}>
            <div style={{ minWidth:"44px", height:"44px", borderRadius:"50%", backgroundColor:C.greenDim, border:`1.5px solid ${C.green}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F.mono, fontSize:"16px", fontWeight:700, color:C.green, flexShrink:0 }}>1</div>
            <div>
              <div style={{ fontFamily:F.body, fontSize:"15px", fontWeight:700, color:C.text, marginBottom:"4px" }}>Segment — Find Who'd Care</div>
              <Pill>Problem Identification</Pill>
              <p style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7, marginTop:"10px", marginBottom:"10px" }}>
                Hypothesis: Pulse matters most for businesses with <strong style={{ color:C.text }}>10+ employees, seasonal revenue, or a history of cash crunches</strong> (late payrolls, Payroll Bridge usage, volatile headcount).
              </p>
              <p style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7, marginBottom:"10px" }}>
                But firmographics alone aren't enough. The missing dimension: <strong style={{ color:C.text }}>owners with no financial co-pilot</strong> — no accountant, no bookkeeper, no fractional CFO. A 5-person bakery owner doing their own books might want this desperately. A 50-person company with a fractional CFO might not care at all.
              </p>
              <div style={{ padding:"10px 14px", backgroundColor:C.bg, borderRadius:"6px", border:`1px solid ${C.border}`, fontFamily:F.mono, fontSize:"11px", color:C.textDim, lineHeight:1.6 }}>
                Output: ~5,000–10,000 target businesses. Segmentation filters for both demand and unit economics — if Pulse requires ML inference per business, it may only be CM-positive for higher-complexity businesses.
              </div>
            </div>
          </div>
        </Card>

        {/* Phase 2 */}
        <Card>
          <div style={{ display:"flex", gap:"16px", alignItems:"flex-start" }}>
            <div style={{ minWidth:"44px", height:"44px", borderRadius:"50%", backgroundColor:C.greenDim, border:`1.5px solid ${C.green}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F.mono, fontSize:"16px", fontWeight:700, color:C.green, flexShrink:0 }}>2</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:F.body, fontSize:"15px", fontWeight:700, color:C.text, marginBottom:"4px" }}>Survey — Adapted Sean Ellis Demand Test</div>
              <Pill>Solution Validation</Pill>
              <div style={{ marginTop:"12px", display:"flex", flexDirection:"column", gap:"8px" }}>
                {[
                  { q:"Q1", text:"\"Imagine Gusto could show you a 90-day cash flow forecast based on your payroll data. How would you feel if this didn't exist?\"", note:"Very disappointed / Somewhat / Not — the kill metric" },
                  { q:"Q2", text:"\"What type of business owner would benefit most from this?\"", note:"Validates segment self-selection" },
                  { q:"Q3", text:"\"What do you currently do to anticipate cash crunches before payroll?\"", note:"Reveals the current alternative" },
                  { q:"Q4", text:"\"What would make this not useful to you?\"", note:"Surfaces objections before you build" },
                ].map((item, i) => (
                  <div key={i} style={{ padding:"10px 14px", backgroundColor:C.bg, borderRadius:"6px", border:`1px solid ${C.border}` }}>
                    <div style={{ fontFamily:F.mono, fontSize:"11px", color:C.green, marginBottom:"3px" }}>{item.q}</div>
                    <div style={{ fontFamily:F.body, fontSize:"12px", color:C.text, lineHeight:1.5 }}>{item.text}</div>
                    <div style={{ fontFamily:F.mono, fontSize:"10px", color:C.textDim, marginTop:"3px" }}>{item.note}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:"14px", padding:"10px 14px", backgroundColor:C.amberMuted, borderRadius:"6px", border:`1px solid ${C.amber}33`, fontFamily:F.body, fontSize:"12px", color:C.textMuted, lineHeight:1.6 }}>
                <strong style={{ color:C.amber }}>Kill criteria:</strong> If &lt;40% of the target segment says "very disappointed," the thesis is wrong. Stay reactive. Don't build Pulse.
              </div>
            </div>
          </div>
        </Card>

        {/* Phase 3 */}
        <Card>
          <div style={{ display:"flex", gap:"16px", alignItems:"flex-start" }}>
            <div style={{ minWidth:"44px", height:"44px", borderRadius:"50%", backgroundColor:C.greenDim, border:`1.5px solid ${C.green}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F.mono, fontSize:"16px", fontWeight:700, color:C.green, flexShrink:0 }}>3</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:F.body, fontSize:"15px", fontWeight:700, color:C.text, marginBottom:"4px" }}>Minimum Viable Test — An Email, Not a Dashboard</div>
              <Pill>Testing</Pill>
              <p style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7, marginTop:"10px", marginBottom:"10px" }}>
                The smallest testable unit is a <strong style={{ color:C.text }}>proactive email alert</strong> sent 45 days before a predicted cash crunch. No new UI. Uses data Gusto already has. Tests the core question: does proactive intelligence change behavior?
              </p>
              <div style={{ padding:"10px 14px", backgroundColor:C.bg, borderRadius:"6px", border:`1px solid ${C.border}` }}>
                <div style={{ fontFamily:F.mono, fontSize:"11px", color:C.green, marginBottom:"6px" }}>Success Metrics</div>
                <div style={{ fontFamily:F.body, fontSize:"12px", color:C.textMuted, lineHeight:1.8 }}>
                  Open rate vs. standard Gusto emails (baseline comparison)<br/>
                  Click-through to Payroll Bridge (flywheel conversion signal)<br/>
                  On-time payroll rate: alerted vs. control group<br/>
                  Qualitative: 15–20 interviews with openers and non-openers
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── TAB 3: RISKS + WHY SID ──
function RisksTab() {
  const dc = (v) => v === "strong" ? C.green : v === "medium" ? C.amber : v === "weak" ? C.textMuted : C.textDim;
  const Dot = ({ v }) => <div style={{ width:"10px", height:"10px", borderRadius:"50%", backgroundColor:dc(v), margin:"0 auto" }}/>;
  const CR = ({ name, payroll, hr, finance, data, moat }) => (
    <tr>
      <td style={{ padding:"10px 8px", fontFamily:F.body, fontSize:"13px", color:C.text, fontWeight:600, borderBottom:`1px solid ${C.border}`, textAlign:"left" }}>{name}</td>
      {[payroll, hr, finance, data].map((v, i) => <td key={i} style={{ padding:"10px 8px", borderBottom:`1px solid ${C.border}`, textAlign:"center" }}><Dot v={v}/></td>)}
      <td style={{ padding:"10px 8px", fontFamily:F.mono, fontSize:"11px", color:C.textMuted, borderBottom:`1px solid ${C.border}`, textAlign:"left" }}>{moat}</td>
    </tr>
  );

  return (
    <div>
      <h2 style={{ fontFamily:F.display, fontSize:"32px", color:C.text, lineHeight:1.25, margin:"0 0 24px", maxWidth:"640px" }}>
        Every thesis has <span style={{ color:C.amber }}>load-bearing assumptions.</span>
      </h2>

      {/* Competitive table */}
      <SL>Competitive Positioning (Honest Version)</SL>
      <Card style={{ marginBottom:"24px", overflowX:"auto" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", minWidth:"540px" }}>
          <thead><tr>
            {["","Payroll","HR Breadth","Financial Intel","Data Depth","Primary Moat"].map((h,i) => (
              <th key={i} style={{ padding:"8px", fontFamily:F.mono, fontSize:"10px", color:C.textDim, textTransform:"uppercase", letterSpacing:"0.06em", borderBottom:`2px solid ${C.border}`, textAlign:i===0||i===5?"left":"center" }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>
            <CR name="Gusto" payroll="strong" hr="medium" finance="medium" data="strong" moat="Cornered resource (payroll data)"/>
            <CR name="Rippling" payroll="strong" hr="strong" finance="weak" data="medium" moat="Process power (modular arch)"/>
            <CR name="ADP" payroll="strong" hr="strong" finance="weak" data="medium" moat="Scale + distribution"/>
            <CR name="OnPay" payroll="medium" hr="weak" finance="none" data="weak" moat="Price leadership"/>
            <CR name="QuickBooks" payroll="medium" hr="weak" finance="medium" data="medium" moat="Accounting ecosystem"/>
          </tbody>
        </table>
        <div style={{ display:"flex", gap:"14px", marginTop:"10px", fontFamily:F.mono, fontSize:"10px", color:C.textDim }}>
          {[["Strong",C.green],["Medium",C.amber],["Weak",C.textMuted],["N/A",C.textDim]].map(([l,c],i) => (
            <span key={i}><span style={{ display:"inline-block", width:"8px", height:"8px", borderRadius:"50%", backgroundColor:c, marginRight:"4px" }}/>{l}</span>
          ))}
        </div>
      </Card>

      {/* Risks */}
      <SL>Where This Thesis Could Be Wrong</SL>
      <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"32px" }}>
        {[
          { title:"SMB owners may not want this from their payroll provider", detail:"The core risk. Gusto's median customer wants payroll to work, not a financial dashboard. The Phase 2 survey tests this directly. If <40% of the target segment wants it, stop.", sev:"The bet", col:C.amber },
          { title:"Rippling wins on HR breadth and modularity", detail:"If the competitive axis stays on HR features, Rippling wins regardless. This thesis only works if the axis shifts to financial intelligence.", sev:"Real threat", col:C.amber },
          { title:"Reporting is Gusto's weakest surface", detail:"Consistently flagged in reviews: limited customization, basic dashboards. Building predictions on top of a weak reporting UX is risky.", sev:"Must address", col:C.amber },
          { title:"QuickBooks owns the accounting relationship", detail:"Intuit has financial data from bookkeeping + tax prep. But their data is self-reported and observed — Gusto's is generated by moving real money. Still, 'good enough' data with an incumbent relationship can beat 'perfect data' that requires a platform switch.", sev:"Adjacent threat", col:C.amber },
          { title:"Misaligned incentives if Pulse drives lending", detail:"If Pulse surfaces worrying forecasts that drive Payroll Bridge adoption, Gusto is incentivized to predict problems. The intelligence layer must be calibrated for accuracy, not conversion.", sev:"Incentive risk", col:C.amber },
        ].map((r, i) => (
          <Card key={i}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"6px" }}>
              <div style={{ fontFamily:F.body, fontSize:"14px", fontWeight:600, color:C.text }}>{r.title}</div>
              <Pill color={r.col}>{r.sev}</Pill>
            </div>
            <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7 }}>{r.detail}</div>
          </Card>
        ))}
      </div>

      {/* Why Sid */}
      <SL>Why Sid — JD-to-Evidence Mapping</SL>
      <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"24px" }}>
        {[
          { req:"Customer & market research", ev:"Led customer research for B2B corporate training launch — interviewed learners, uncovered that forced participation kills engagement, repositioned the offering. At upGrad, validated curriculum redesign with 10+ experts in 3 days.", s:"strong" },
          { req:"Product requirements (why + what)", ev:"Defined specs for Growth PM course MVP — translated learner pain points into module-level objectives for 5+ SMEs. Shipped in 2 months, 4.8+/5 rating from 90% of learners.", s:"strong" },
          { req:"Metrics analysis & iteration", ev:"Identified AI course conversion bottleneck via sales call audits. Designed A/B test of video content for webinar registrants → 14% conversion lift.", s:"strong" },
          { req:"Cross-functional with Eng/Design", ev:"Coordinated with CEO, Operations, Sales, and SMEs — but in EdTech with small teams. Haven't worked in a product org with formal sprint rituals and eng squads.", s:"medium" },
          { req:"AI tools for product development", ev:"Built FilmFusion — AI-powered film camera prototyping tool — 100+ users in a month. This artifact uses AI as a thinking tool, not just a code generator.", s:"strong" },
          { req:"Agile, experimentation, analytics", ev:"Coursework in Growth PM (GLD, B=MAT, activation funnels, RICE). Ran A/B tests in EdTech. Haven't managed formal Agile sprints with engineering.", s:"medium" },
        ].map((item, i) => (
          <div key={i} style={{ display:"flex", gap:"12px", padding:"14px 16px", backgroundColor:C.card, borderRadius:"6px", border:`1px solid ${C.border}` }}>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:F.body, fontSize:"13px", fontWeight:600, color:C.text, marginBottom:"4px" }}>{item.req}</div>
              <div style={{ fontFamily:F.body, fontSize:"12px", color:C.textMuted, lineHeight:1.6 }}>{item.ev}</div>
            </div>
            <div style={{ flexShrink:0, paddingTop:"2px" }}>
              <Pill color={item.s === "strong" ? C.green : C.amber}>{item.s === "strong" ? "Strong" : "Partial"}</Pill>
            </div>
          </div>
        ))}
      </div>

      {/* Gaps */}
      <Card hl={C.amber} style={{ borderLeft:`3px solid ${C.amber}`, marginBottom:"24px" }}>
        <div style={{ fontFamily:F.body, fontSize:"14px", color:C.text, lineHeight:1.7 }}>
          <strong style={{ color:C.amber }}>Two gaps, stated upfront:</strong>
          <div style={{ marginTop:"8px" }}><strong>1.</strong> Haven't worked inside a software product team with dedicated eng/design. My cross-functional experience is real but comes from EdTech with smaller teams.</div>
          <div style={{ marginTop:"8px" }}><strong>2.</strong> No payroll, HR, or fintech domain experience. What transfers: B2B buyer dynamics, 0-to-1 launches, data-informed iteration. What doesn't: regulatory nuance and the trust dynamics of handling someone's paycheck.</div>
          <div style={{ marginTop:"8px", color:C.textMuted }}>I'd rather you know upfront than discover them in week 3.</div>
        </div>
      </Card>

      {/* CPT + Links */}
      <Card style={{ marginBottom:"24px" }}>
        <div style={{ fontFamily:F.body, fontSize:"13px", color:C.text, lineHeight:1.7 }}>
          <strong>Work authorization:</strong> I'm on CPT (Curricular Practical Training) through Purdue's MS in Engineering Management. CPT is US work authorization — requires a standard employer cooperation letter, no sponsorship needed. Disclosing upfront because the JD specifies it.
        </div>
      </Card>

      <div style={{ display:"flex", gap:"12px" }}>
        <Card style={{ flex:1 }}>
          <div style={{ fontFamily:F.mono, fontSize:"11px", color:C.gusto, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"8px" }}>Links</div>
          <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:2 }}>
            <div>Portfolio → <a href="https://sidharthsundaram.com" target="_blank" rel="noopener noreferrer" style={{ color:C.gusto, textDecoration:"none", borderBottom:`1px solid ${C.gustoDim}` }}>sidharthsundaram.com</a></div>
            <div>LinkedIn → <a href="https://linkedin.com/in/sidharthsundaram" target="_blank" rel="noopener noreferrer" style={{ color:C.gusto, textDecoration:"none", borderBottom:`1px solid ${C.gustoDim}` }}>linkedin.com/in/sidharthsundaram</a></div>
          </div>
        </Card>
        <Card style={{ flex:1 }}>
          <div style={{ fontFamily:F.mono, fontSize:"11px", color:C.gusto, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"8px" }}>This Artifact</div>
          <div style={{ fontFamily:F.body, fontSize:"13px", color:C.textMuted, lineHeight:1.7 }}>Built in React. Every claim grounded in public data. The competitive table includes dimensions where Gusto loses. That's intentional.</div>
        </Card>
      </div>
    </div>
  );
}

// ── MAIN ──
export default function GustoPulse() {
  const [tab, setTab] = useState("thesis");
  const content = { thesis: <ThesisTab />, test: <TestTab />, risks: <RisksTab /> };
  return (
    <div style={{ minHeight:"100vh", backgroundColor:C.bg, color:C.text, fontFamily:F.body }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:3px}`}</style>
      <div style={{ padding:"32px 40px 0", maxWidth:"880px", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"8px" }}>
          <div>
            <div style={{ fontFamily:F.mono, fontSize:"11px", color:C.gusto, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"6px" }}>Work Sample for Gusto · PM Internship Summer 2026</div>
            <h1 style={{ fontFamily:F.display, fontSize:"40px", fontWeight:400, color:C.text, lineHeight:1.15, margin:0 }}>
              The Flywheel Gusto<br/><span style={{ color:C.gusto }}>Already Owns</span>
            </h1>
          </div>
          <div style={{ fontFamily:F.mono, fontSize:"11px", color:C.textDim, textAlign:"right", lineHeight:1.8 }}>
            <div>by <span style={{ color:C.text }}>Sidharth Sundaram</span></div>
            <div>MS Engineering Management, Purdue</div>
          </div>
        </div>
        <p style={{ fontFamily:F.body, fontSize:"15px", color:C.textMuted, lineHeight:1.6, maxWidth:"600px", margin:"12px 0 28px" }}>
          Gusto is fighting a feature war it can't win. But it's sitting on the only real-time, verified financial signal in the SMB economy. This artifact maps the thesis, shows how to test it, and tells you where it breaks.
        </p>
        <div style={{ display:"flex", gap:"2px", borderBottom:`1px solid ${C.border}` }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              fontFamily:F.mono, fontSize:"11px", textTransform:"uppercase", letterSpacing:"0.08em",
              padding:"10px 20px", backgroundColor:tab===t.id?C.card:"transparent",
              color:tab===t.id?C.gusto:C.textDim, border:"none",
              borderBottom:tab===t.id?`2px solid ${C.gusto}`:"2px solid transparent",
              cursor:"pointer", transition:"all 0.2s",
            }}>{t.label}</button>
          ))}
        </div>
      </div>
      <div style={{ maxWidth:"880px", margin:"0 auto", padding:"32px 40px 80px" }}>
        {content[tab]}
      </div>
    </div>
  );
}
