"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  // 简单烟花点击特效
  useEffect(() => {
    const createFirework = (x: number, y: number) => {
      const particles = 20;
      for (let i = 0; i < particles; i++) {
        const el = document.createElement("div");
        el.className = "pointer-events-none fixed w-2 h-2 rounded-full bg-pink-400";
        document.body.appendChild(el);

        const angle = (i / particles) * Math.PI * 2;
        const dx = Math.cos(angle) * (Math.random() * 80);
        const dy = Math.sin(angle) * (Math.random() * 80);

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.opacity = "1";
        el.style.transform = `translate(0,0)`;

        requestAnimationFrame(() => {
          el.style.transition = "all 600ms ease-out";
          el.style.transform = `translate(${dx}px, ${dy}px)`;
          el.style.opacity = "0";
        });

        setTimeout(() => el.remove(), 800);
      }
    };

    const handleClick = (e: MouseEvent) => {
      createFirework(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white font-sans">
      {/* 顶部标题 */}
      <div className="py-12 md:py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 to-red-500"
        >
          双双 · 柒柒 · 六道
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 md:mt-6 text-base md:text-lg text-slate-300"
        >
          —— 一场中二的冒险，正在展开……
        </motion.p>
      </div>

      {/* 故事内容 */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10 md:space-y-12 pb-16 md:pb-24">
        {/* 第一幕 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-2xl p-4 md:p-6 shadow-lg backdrop-blur border border-white/10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-pink-300">
            第一幕 · 双双的火焰之眼 🔥
          </h2>
          <p className="mt-2 md:mt-3 leading-relaxed text-sm md:text-base">
            双双本是一个普通少女，却在某个雷雨夜觉醒了「火焰之眼」。
            她能看见隐藏在世界缝隙里的黑暗生物，并以炽烈火焰将它们驱逐。
          </p>
        </motion.div>

        {/* 第二幕 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-600/40 to-cyan-600/40 rounded-2xl p-4 md:p-6 shadow-lg backdrop-blur border border-white/10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-cyan-300">
            第二幕 · 柒柒的时空羽翼 ⏳
          </h2>
          <p className="mt-2 md:mt-3 leading-relaxed text-sm md:text-base">
            柒柒背生一对「时空羽翼」，能穿越未来与过去。
            但她必须消耗寿命才能展开双翼，每次振翅都是与命运的豪赌。
          </p>
        </motion.div>

        {/* 第三幕 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600/40 to-yellow-600/40 rounded-2xl p-4 md:p-6 shadow-lg backdrop-blur border border-white/10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-yellow-300">
            第三幕 · 六道的混沌锁链 ⚔️
          </h2>
          <p className="mt-2 md:mt-3 leading-relaxed text-sm md:text-base">
            六道手持一条「混沌锁链」，能束缚万物，但一旦失控，也会反噬自身。
            他是三人中最危险，也是最可靠的伙伴。
          </p>
        </motion.div>

        {/* 结尾 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 drop-shadow-lg">
            三人的命运交织在一起，踏上了一段既中二、又绚烂的冒险！
          </p>
          <p className="mt-3 md:mt-4 text-slate-400 text-sm md:text-base">
            （未完待续…… 点击屏幕释放烟花 ✨）
          </p>
        </motion.div>
      </div>
    </main>
  );
}
