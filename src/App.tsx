/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap,
  LayoutTemplate,
  Rocket,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  MonitorPlay,
  Briefcase,
  Infinity,
  Award
} from 'lucide-react';

const gradients = {
  primary: "bg-gradient-to-r from-purple-600 to-emerald-600",
  text: "bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent",
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 border-x-4 border-slate-900 shadow-2xl font-sans selection:bg-purple-900/50 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 pb-2 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <img src="/img/logo.png" alt="ORCA LAB Logo" className="w-10 h-10 rounded-lg shadow-lg shadow-purple-500/20 object-cover" />
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-white leading-none mt-1">ORCA LAB</h1>
                <p className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase mt-0.5 hidden sm:block">System Architecture & AI Creative</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-white transition-colors">選ばれる理由</a>
              <a href="#workflow" className="text-sm font-medium hover:text-white transition-colors">フロー</a>
              <a href="#services" className="text-sm font-medium hover:text-white transition-colors">サービス</a>
              <a href="#about" className="text-sm font-medium hover:text-white transition-colors">代表略歴</a>
              <a href="#contact" className={`px-6 py-2.5 rounded-full text-white text-sm font-bold shadow-lg shadow-emerald-900/20 hover:scale-105 transition-transform ${gradients.primary}`}>
                無料相談・スケジュール確認
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="p-3 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none touch-manipulation">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 absolute w-full left-0">
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl">
              <a href="#features" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:text-white hover:bg-slate-800 touch-manipulation">選ばれる理由</a>
              <a href="#workflow" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:text-white hover:bg-slate-800 touch-manipulation">フロー・防衛線</a>
              <a href="#services" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:text-white hover:bg-slate-800 touch-manipulation">実績・サービス</a>
              <a href="#about" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:text-white hover:bg-slate-800 touch-manipulation">代表プロフィール</a>
              <a href="#contact" onClick={toggleMenu} className={`mt-4 block text-center px-4 py-4 rounded-xl text-white font-bold touch-manipulation ${gradients.primary}`}>
                無料相談・スケジュール確認
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-32 lg:pb-40 bg-slate-900/50 border-b border-slate-800 shadow-inner">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="flex-1 text-center lg:text-left pt-6"
              >
                <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 mb-8 backdrop-blur-sm shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Active: Slot Availability Limited</span>
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="font-black text-white leading-[1.4] sm:leading-[1.2] mb-6 tracking-tight flex flex-col gap-2 sm:gap-4"
                >
                  <span className="whitespace-nowrap text-[min(6.5vw,2rem)] sm:text-5xl lg:text-[3.5rem] text-white">
                    プロトタイプまで<span className={`${gradients.text}`}>最短即日。</span>
                  </span>
                  <span className="whitespace-nowrap text-[min(5.8vw,1.75rem)] sm:text-4xl lg:text-[3rem] text-slate-200">
                    SE歴26年のアジャイル思考が、
                  </span>
                  <span className="whitespace-nowrap text-[min(5vw,1.5rem)] sm:text-4xl lg:text-[3rem] text-slate-200">
                    あなたのビジネスを<span className={`${gradients.text}`}>爆速で形にする。</span>
                  </span>
                </motion.h1>
                
                <motion.p variants={fadeIn} className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0">
                  Web、動画、デザインをすべて一人で完結。システムを止めない現役SEが提供する、やり直し・妥協ゼロの共創型クリエイティブ。単発の外注ではなく、ビジネスを共に前進させる強力なDXパートナーとして機能します。
                </motion.p>
                
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#contact" className={`w-full sm:w-auto px-8 py-5 rounded-xl text-white font-bold text-center text-lg sm:text-xl shadow-lg shadow-purple-900/30 hover:scale-[1.02] transition-transform ${gradients.primary} flex items-center justify-center gap-2 group touch-manipulation`}>
                    無料相談・スケジュール確認
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0 lg:order-last order-first"
              >
                {/* Hero Image */}
                <div className="aspect-[4/3] rounded-3xl bg-slate-900 border border-slate-800 p-2 relative overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-emerald-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 rounded-3xl pointer-events-none"></div>
                  <img 
                    src="/img/hero.png" 
                    alt="ORCA LAB Hero Image" 
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Why Choose ORCA LAB */}
        <section id="features" className="py-20 lg:py-24 bg-slate-800/30 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col sm:flex-row sm:items-center gap-2 mb-10 sm:mb-12"
            >
              <div className="hidden sm:block w-1.5 h-8 bg-emerald-500"></div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-1 font-mono">Why Choose ORCA LAB</h2>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">選ばれる3つの理由</p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {/* Feature 1 */}
              <motion.div variants={fadeIn} className="p-6 bg-slate-800/40 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-purple-400 font-black text-3xl font-mono">01</div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Infinity className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">One-Stop<br/><span className="text-xs text-purple-400 font-medium">全媒体の世界観を統一</span></h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  AI×マルチモーダルなアプローチで、Webサイト・動画・紙媒体に至る世界観を一人で一貫してディレクション・制作。ブランドのブレをなくします。
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={fadeIn} className="p-6 bg-slate-800/40 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-emerald-400 font-black text-3xl font-mono">02</div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Rocket className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Agile-Speed<br/><span className="text-xs text-emerald-400 font-medium">超高速プロトタイピング</span></h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  「出来上がるまで全貌が見えない」不安を払拭。最初から完成形に近いプロトタイプを爆速で即日提示することで、無駄な会議を消滅させます。
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={fadeIn} className="p-6 bg-slate-800/40 rounded-xl border border-slate-800 hover:border-slate-500/50 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-slate-400 font-black text-3xl font-mono">03</div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">SE-Quality<br/><span className="text-xs text-blue-400 font-medium">堅牢なプロジェクト進行</span></h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  26年間、数々のミッションクリティカルなプロジェクトを完遂してきたキャリア。法人基準の厳格な進行管理とリスクヘッジで安全着陸をお約束します。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. Workflow & Rules */}
        <section id="workflow" className="py-20 lg:py-24 relative overflow-hidden bg-slate-900 border-b border-slate-800 shadow-inner">
          <div className="absolute -left-40 top-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 mb-10 sm:mb-12"
            >
              <div className="hidden sm:block w-1.5 h-8 bg-purple-500"></div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-1 font-mono">Workflow & Rules</h2>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none text-center sm:text-left">アジャイル制作フローと防衛線</p>
              </div>
            </motion.div>

            {/* Workflow Steps */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-6 sm:space-y-4 mb-16 relative before:absolute before:inset-y-0 before:left-[30px] md:before:left-[50%] before:-ml-[1px] md:before:ml-0 before:w-[2px] before:bg-slate-700/50"
            >
              {[
                { step: "01", title: "ヒアリング", desc: "目的と課題を明確に定義し、不要なものを削ぎ落とします。" },
                { step: "02", title: "即日プロトタイプ提示", desc: "長期間待たせることなく、AIを活用し全体の「枠組みと世界観」を可視化します。", align: "right" },
                { step: "03", title: "共創アジャイル修正", desc: "実機で動く形を見ながら、ブラッシュアップのイテレーションを回します。" },
                { step: "04", title: "ローンチ・運用", desc: "公開後の反響に応じ、素早く改善を施す伴走体制へ移行します。", align: "right" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeIn} className={`relative flex items-center md:items-stretch md:justify-between ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Circle number */}
                  <div className="absolute left-[8px] md:left-1/2 -ml-0 md:-ml-6 w-11 h-11 md:w-12 md:h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center font-bold text-emerald-400 z-10 font-mono text-sm shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                    {item.step}
                  </div>
                  
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 bg-slate-800/80 backdrop-blur-sm p-5 md:p-6 border border-slate-700 rounded-2xl`}>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 防衛線 (Rules) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-1 h-5 bg-purple-500"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-tight font-mono">Agile Rules</h3>
                <span className="text-xs text-slate-400 ml-2">ご契約に関するお約束</span>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 flex-row">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 hidden sm:block" />
                  <div>
                    <h5 className="font-bold text-white bg-slate-800 inline-block px-3 py-1 rounded text-sm mb-2 sm:mt-0 sm:-ml-2 sm:pl-3">1. 修正回数の制限（スプリント）</h5>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      プロトタイプ提示後の大幅な修正・方針変更は、<span className="text-emerald-300 font-bold border-b border-emerald-300/50 pb-0.5 px-0.5 bg-emerald-400/10">基本2回まで</span>基本料金に含みます。<br className="hidden sm:block"/>
                      <span className="text-xs sm:text-sm text-slate-400 mt-1 block">（テキストの微修正など、軽微な調整事項は適宜柔軟に対応いたします）</span>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 flex-row pt-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 hidden sm:block" />
                  <div>
                    <h5 className="font-bold text-white bg-slate-800 inline-block px-3 py-1 rounded text-sm mb-2 sm:mt-0 sm:-ml-2 sm:pl-3">2. 継続的なサポートについて</h5>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      大幅な作り直し設計変更、システム要件の追加、納品後の運用・DX改善サポートは、「単発制作」ではなく<strong className="text-purple-300 font-bold bg-purple-400/10 px-1 rounded mx-0.5">『月額伴走プラン（顧問契約）』</strong>にて責任を持って承ります。
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 4. Service & Case Study */}
        <section id="services" className="py-20 lg:py-24 bg-slate-800/30 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col sm:flex-row sm:items-center gap-2 mb-10 sm:mb-12"
            >
              <div className="hidden sm:block w-1.5 h-8 bg-emerald-500"></div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-1 font-mono">Service & Case Study</h2>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">サービスと実績</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Case Study */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">成功事例：ネイルコンテスト</h3>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-6 sm:p-8 border-b border-slate-800">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold">Web制作</span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold">動画PV制作</span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold">DTP(ポスター)</span>
                    </div>
                    <h4 className="text-white text-xl sm:text-2xl font-black mb-4">Web・ポスター・PVの世界観を完全統一</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      通常であれば「Web制作会社」「映像制作会社」「デザイナー」に分散発注し、コミュニケーションコストとブランドの乖離が起きるプロジェクト。
                      ORCA LABではコンセプト設計からすべてのクリエイティブを一気通貫で担当し、圧倒的なスピードで形にします。
                    </p>
                    <div className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-bold flex gap-3">
                        <span className="text-emerald-400 shrink-0 uppercase text-xs tracking-wider mt-0.5">Success Story:</span>
                        <span>クライアントの絶大な信頼を獲得し、現在は<span className="text-white border-b border-purple-400/50">「月額顧問」</span>として長期伴走中。</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Media Gallery */}
                  <div className="bg-slate-950/50 p-6 sm:p-8">
                    <h5 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                       <MonitorPlay className="w-5 h-5 text-emerald-400"/>
                       クリエイティブ・ポートフォリオ
                    </h5>
                    <div className="flex flex-col gap-8">
                      {/* Video PV */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg w-full flex flex-col pt-4">
                         <iframe
                           className="w-full max-w-[326px] mx-auto h-[480px] rounded-lg bg-slate-800"
                           src="https://www.instagram.com/p/DXo1yV6y9cY/embed"
                           frameBorder={0}
                           scrolling="no"
                           allowTransparency={true}
                         ></iframe>
                         <div className="mt-4 p-3 text-center bg-slate-800/50 border-t border-slate-800">
                           <span className="text-xs font-bold text-slate-400">PV動画（Instagram Reels）</span>
                         </div>
                      </div>

                      {/* Poster image */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg relative h-[520px] group">
                         <img 
                            src="/img/poster.png" 
                            alt="ポスター制作事例" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600&h=800'; }}
                         />
                         <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                           <div className="flex items-center gap-2">
                             <div className="p-1.5 bg-slate-800/80 rounded backdrop-blur-sm border border-slate-700 text-white group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                               <LayoutTemplate className="w-4 h-4" />
                             </div>
                             <span className="text-sm font-bold text-white">ポスター・DTP制作</span>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Packages */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="flex flex-col gap-6"
              >
                 <div className="mb-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">ご提供パッケージ</h3>
                </div>

                {/* Package 1 */}
                <motion.div variants={fadeIn} className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-bl-full transition-transform group-hover:scale-110"></div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 relative z-10">イベント特化フルスタック制作</h4>
                  <p className="text-slate-400 font-bold text-xs sm:text-sm mb-4 relative z-10 font-mono">Webサイト ＋ LP ＋ PR動画 ＋ 広告バナー</p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                    イベントや事業立ち上げに必要な制作物を、統一ディレクションで一括制作。バラバラの外注を一本化し、圧倒的なスピードで市場に投入します。
                  </p>
                </motion.div>

                {/* Package 2 - Highlighted */}
                <motion.div variants={fadeIn} className={`rounded-2xl p-[2px] ${gradients.primary} shadow-[0_0_30px_rgba(168,85,247,0.15)]`}>
                  <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 h-full relative">
                    <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-lg">
                      Recommended
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 mt-2">月額DX顧問・クリエイティブ伴走</h4>
                    <p className="text-purple-300 font-bold text-xs sm:text-sm mb-4 font-mono">御社の「AI・Web・システム戦略」を丸投げ</p>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                      単発制作で終わらせず、中長期的なサイト改善、新規LPの継続制作、社内業務のAI/DX化提案まで。あなたの右腕となる「システムを理解したディレクター」を社内に置く超強力なプランです。
                    </p>
                    <a href="#contact" className={`w-full flex items-center justify-center text-center px-6 py-4 sm:py-5 rounded-xl text-white font-bold text-sm sm:text-base ${gradients.primary} hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg touch-manipulation`}>
                      顧問プランの空き状況を確認する
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. About Me */}
        <section id="about" className="py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 mb-10 sm:mb-12">
              <div className="hidden sm:block w-1.5 h-8 bg-purple-500"></div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-1 font-mono">About The Director</h2>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none text-center sm:text-left">代表プロフィール</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-10 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 0H0V60H60V0Z" fill="url(#paint0_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A855F7"/>
                      <stop offset="1" stopColor="#34D399"/>
                    </linearGradient>
                  </defs>
                  <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                    <path d="M0 60V0H60V60H0ZM2 58H58V2H2V58Z" fill="white"/>
                    <path d="M10 50V10H50V50H10ZM12 48H48V12H12V48Z" fill="white"/>
                    <path d="M20 40V20H40V40H20ZM22 38H38V22H22V38Z" fill="white"/>
                  </mask>
                  <rect x="0" y="0" width="60" height="60" fill="currentColor" mask="url(#mask0)"/>
                </svg>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-emerald-500 rounded-[2rem] transform -rotate-6 scale-105 opacity-50 blur-lg"></div>
                  <div className="w-full h-full rounded-[2rem] bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-700 relative z-10">
                    <img 
                      src="/img/profile.png" 
                      alt="Shachinori" 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
                    />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 text-center md:text-left"
                >
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">シャチノリ</h3>
                  <p className="inline-block px-3 py-1 bg-slate-800 rounded-md text-emerald-400 font-bold mb-6 text-sm tracking-wide">
                    AIクリエイティブ・ディレクター / フルスタックSE
                  </p>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                    <p>
                      システム開発の最前線で<strong className="text-white font-bold bg-slate-800 px-1 rounded">26年間、数々のミッションクリティカルなプロジェクトを完遂してきた</strong>現役のシステムエンジニア。
                    </p>
                    <p>
                      徹底したリスク管理と堅牢なプロジェクト推進力をベースに、AIを駆使したクリエイティブ制作を展開。自身の現場にAIを導入し<strong className="text-white font-bold bg-slate-800 px-1 rounded">工数を90%削減したノウハウ</strong>を持ち、デザイン・動画・Web開発を一人で統合的にコントロールする。
                    </p>
                    <p>
                      <strong className="text-white font-bold bg-slate-800 px-1 rounded">「喋れるエンジニア」</strong>として、ナレーション提供実績80件超、YouTube登録者数2100人を超える発信力を併せ持つほか、元ダンサーとしてTV番組や全国大会に出場した異色の経歴も。<strong className="text-white font-bold bg-slate-800 px-1 rounded">「技術力」と「表現力・人間力」の両輪</strong>で、クライアントの事業成長を多角的に牽引します。
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    {['システムエスカレーション対応 26年', 'AIワークフロー構築', 'UI/UXデザイン', '動画制作・ナレーション', 'YouTube 2100+', '元ダンサー（TV・全国大会出場）'].map((tag, i) => {
                      const colorVariants = [
                        "bg-purple-500/10 text-purple-400 border-purple-500/30",
                        "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                        "bg-blue-500/10 text-blue-400 border-blue-500/30",
                        "bg-slate-800 text-slate-400 border-slate-700",
                        "bg-slate-800 text-slate-400 border-slate-700",
                        "bg-rose-500/10 text-rose-400 border-rose-500/30"
                      ];
                      return (
                        <span key={i} className={`px-2 py-1 rounded border text-[10px] sm:text-xs font-bold uppercase ${colorVariants[i]}`}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact / Schedule Notice */}
        <section id="contact" className="py-20 lg:py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
           {/* Cyber Grid Background */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#34D399 1px, transparent 1px), linear-gradient(90deg, #34D399 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-bold text-purple-400 tracking-widest uppercase shadow-lg">
                Availability Notice
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight mt-2">現在の稼働状況とご依頼</h2>
              
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto space-y-6">
                <p className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                  現在、複数の企業様と<strong className="text-white">月額顧問契約（リテーナー）</strong>を進行中のため、同時に伴走できるプロジェクト数を厳格に管理しております。
                </p>
                <p>
                  クオリティとスピードを絶対に落とさないため、新規のご依頼につきましては、事前にスケジュールをすり合わせの上、最適な着手日をご提案させていただきます。
                </p>
                <div className="inline-flex items-start gap-2 bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl text-left">
                  <AlertTriangle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-emerald-100/90 text-sm">
                    「事業を本気で前進させたい」「形にならない議論を終わらせたい」と考える経営者様からのご連絡をお待ちしております。
                  </p>
                </div>
              </div>

              <a 
                href="#contact" 
                className={`flex items-center justify-center gap-3 w-full sm:w-auto sm:inline-flex px-8 py-5 sm:py-6 rounded-2xl text-white font-black text-lg sm:text-xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all ${gradients.primary} group touch-manipulation`}
              >
                無料相談・スケジュール確認
                <div className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-500 font-mono gap-4">
            <p>&copy; {new Date().getFullYear()} ORCA LAB BY SHACHINORI. BUILT WITH AI & AGILE SPIRIT.</p>
            <div className="flex gap-4 sm:gap-6 uppercase">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <span className="text-purple-400 font-bold hidden sm:inline">v2.4.1 [LATEST]</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
