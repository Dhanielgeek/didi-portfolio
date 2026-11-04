/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";


type Stat = {
  label: string
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  before?: string
  change?: string
}

type Group = {
  client: string
  title: string
  period: string
  stats: Stat[]
}

const groups: Group[] = [
  {
    client: 'Loford Properties',
    title: 'Instagram Growth',
    period: 'Before vs After (30 days)',
    stats: [
      { label: 'Views', value: 1414, before: '196', change: '+621%' },
      { label: 'Profile Activity', value: 61, before: '32', change: '+306.7%' },
      { label: 'Profile Visits', value: 57, before: '32', change: '+307.1%' },
      { label: 'External Link Taps', value: 4, before: '0', change: '+300%' },
    ],
  },
  {
    client: 'Yago Cakes',
    title: 'Instagram Statistics',
    period: 'August → September',
    stats: [
      { label: 'Views', value: 77.8, decimals: 1, suffix: 'K', before: '3.7K' },
      { label: 'Interactions', value: 2, suffix: 'K', before: '102' },
      { label: 'Follows', value: 90, before: '49' },
      { label: 'Messages', value: 85, before: '14', change: '78% response rate' },
      { label: 'Reach', value: 21, suffix: 'K', before: '419', change: '+4.9K%' },
    ],
  },
  {
    client: 'Yago Cakes',
    title: 'TikTok Statistics',
    period: 'August → September',
    stats: [
      { label: 'Profile Views', value: 145, before: '21', change: '+590.5%' },
      { label: 'Likes', value: 1.1, decimals: 1, suffix: 'K', before: '44', change: '+2481.8%' },
      { label: 'Net Followers', value: 45, before: '17', change: '+164.7%' },
      { label: 'Comments', value: 63, before: '8', change: '+687.5%' },
      { label: 'Reach', value: 8.5, decimals: 1, suffix: 'K', before: '541', change: '+1472.1%' },
    ],
  },
]


/* ---------- count-up hook ---------- */
const useCountUp = (target: number, decimals = 0, start: boolean, duration = 1800) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(target);
      return;
    }

    let raf = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      setCount(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/* ---------- single stat ---------- */
const StatCard = ({ stat, start }: { stat: Stat; start: boolean }) => {
  const display = useCountUp(stat.value, stat.decimals ?? 0, start);

  return (
    <div className="stat-card">
      <span className="stat-label">{stat.label}</span>
      <strong className="stat-number">
        {stat.prefix}
        {display}
        {stat.suffix}
      </strong>
      {stat.before && <span className="stat-before">from {stat.before}</span>}
      {stat.change && <span className="stat-change">{stat.change}</span>}
    </div>
  );
};

/* ---------- section ---------- */
const ClientsAnalytics = () => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect(); // count only once
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="results" className="section section-dark" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-kicker">Client Results</span>
            <h2>Numbers that moved.</h2>
          </div>
          <p className="section-intro">
            Real analytics from real client accounts: before and after.
          </p>
        </div>

        {groups.map((group) => (
          <div className="stat-group" key={group.title}>
            <div className="stat-group-head">
               <div>
    <span className="stat-client">{group.client}</span>
    <h3>{group.title}</h3>
  </div>
            
              <span>{group.period}</span>
            </div>

            <div className="stat-grid">
              {group.stats.map((s) => (
                <StatCard key={s.label} stat={s} start={inView} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsAnalytics;