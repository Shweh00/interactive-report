"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from "recharts";

// ---------- 示例数据，替换成你的 ----------
const kpis = [
  { year: 2020, revenue: 32, margin: 54 },
  { year: 2021, revenue: 49, margin: 57 },
  { year: 2022, revenue: 46, margin: 58 },
  { year: 2023, revenue: 72, margin: 61 },
  { year: 2024, revenue: 95, margin: 60 },
  { year: 2025, revenue: 108, margin: 63 },
];

const timeline = [
  { t: "2015–2019", title: "奠基期", desc: "艺术家创作与风格确立，为商业化铺路。" },
  { t: "2024-04", title: "引爆点", desc: "顶流偶像曝光，社媒热度飙升。" },
  { t: "2024-06", title: "官方背书", desc: "官方机构与名人背书，成为文化符号。" },
  { t: "2024-12~2025", title: "全球蔓延", desc: "多国排队抢购，品牌影响力外溢。" },
];

// ---------- 小组件 ----------
function Section({
  id, title, kicker, children
}: { id: string; title: string; kicker?: string; children: React.ReactNode; }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4">
        {kicker && (
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
            {kicker}
          </p>
        )}
        <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-6">
          {title}
        </h2>
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}

function StickyToc() {
  const links = [
    { href: "#intro", label: "概览" },
    { href: "#biz", label: "商业模式" },
    { href: "#finance", label: "财务健康" },
    { href: "#case", label: "案例研究" },
    { href: "#rumors", label: "传闻调查" },
    { href: "#risks", label: "风险警示" },
  ];
  return (
    <nav className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 space-y-2">
        <p className="text-xs uppercase tracking-widest text-slate-500">目录</p>
        <ul className="mt-2 space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-100 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function KpiCard({ value, label, hint }: { value: string; label: string; hint?: string; }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-slate-600 mt-1">{label}</div>
      {hint && <div className="text-slate-400 text-sm mt-2">{hint}</div>}
    </div>
  );
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

// ---------- 页面 ----------
export default function Page() {
  const progress = useScrollProgress();

  return (
    <div className="min-h-screen bg-white">
      {/* 顶栏 */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-slate-900 inline-block" />
            <span className="font-semibold">交互式报告 · 模板</span>
          </div>
          <div className="text-xs text-slate-500">
            滚动进度 {progress.toFixed(0)}%
          </div>
        </div>
      </header>

      {/* 布局 */}
      <main className="max-w-6xl mx-auto px-4 flex gap-8">
        <StickyToc />
        <div className="flex-1">
          {/* 概览 */}
          <Section id="intro" title="解构一个潮流帝国" kicker="概览">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              这是一个“交互式深度报告”的示例：左侧目录、滚动动效、KPI 卡片与图表。将文案与数据替换为你的内容即可快速上线。
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <KpiCard value="107.6%" label="净利润同比增速" hint="示例数据" />
              <KpiCard value="61.3%" label="毛利率" hint="示例数据" />
              <KpiCard value="-23天" label="库存周转优化" hint="示例数据" />
            </div>
          </Section>

          {/* 商业模式 */}
          <Section id="biz" title="商业模式：四大增长引擎">
            <ul>
              <li><b>IP 引擎</b>：签约与孵化多元 IP，形成组合拳。</li>
              <li><b>销售引擎</b>：盲盒机制 + 线下门店 + 线上小程序，制造稀缺与复购。</li>
              <li><b>多元化引擎</b>：从玩具向生活方式扩展（毛绒、高端系列、饰品等）。</li>
              <li><b>全球化引擎</b>：海外门店、电商与联名合作拉动增长。</li>
            </ul>
          </Section>

          {/* 财务图表 */}
          <Section id="finance" title="财务健康：V 型反转" kicker="可视化演示">
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={kpis} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tickMargin={8} />
                    <YAxis yAxisId="left" tickMargin={8} />
                    <YAxis yAxisId="right" orientation="right" tickMargin={8} />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="revenue" dot={false} />
                    <Line yAxisId="right" type="monotone" dataKey="margin" strokeDasharray="5 5" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-500 mt-3">
                折线演示：收入（左轴）与毛利率（右轴）。把数组替换成你的 JSON/CSV 数据即可。
              </p>
            </div>
          </Section>

          {/* 案例研究 */}
          <Section id="case" title="案例研究：从引爆到外溢">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timeline.map((d) => (
                <motion.div
                  key={d.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-slate-500">{d.t}</p>
                  <p className="font-semibold text-lg mt-1">{d.title}</p>
                  <p className="text-slate-600 mt-1">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 传闻调查 */}
          <Section id="rumors" title="传闻调查：指控与证据">
            <details className="rounded-2xl border border-slate-200 p-4 mb-3">
              <summary className="cursor-pointer font-medium">传闻一：是否存在价格操纵？</summary>
              <p className="mt-2">用事实时间线与补货记录进行反证，区分“制造稀缺”的商业策略与非法操纵。</p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-medium">传闻二：是否秘密高价回购？</summary>
              <p className="mt-2">追溯文件来源与个案性质，澄清误读与真实公司政策。</p>
            </details>
          </Section>

          {/* 风险 */}
          <Section id="risks" title="风险警示：光环下的阴影">
            <ul>
              <li>IP 依赖与炒作周期的脆弱性</li>
              <li>品控、黄牛与仿冒带来的口碑侵蚀</li>
              <li>内部人减持等公司治理信号</li>
            </ul>
            <div className="rounded-2xl border border-slate-200 p-4 mt-4 text-sm text-slate-500">
              <p>免责声明：以上为演示文案，不构成投资建议。请以你自己的研究与数据为准。</p>
            </div>
          </Section>

          <footer className="py-12">
            <p className="text-center text-sm text-slate-400">
              © {new Date().getFullYear()} 交互式报告模板 · React + Tailwind + Recharts · 可部署至 Netlify
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
