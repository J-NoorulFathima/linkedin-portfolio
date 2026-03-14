"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Play, BarChart3, Sparkles, Briefcase } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0f1f] to-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text"
        >
          LinkedIn Growth Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          LinkedIn Account Optimization • Poster Design • AI Videos • Video Editing
        </motion.p>

        <div className="flex justify-center gap-6 mt-10">
          <button className="rounded-xl text-lg px-8 py-4 bg-blue-600 hover:bg-blue-500 transition">
            View My Work
          </button>

          <button className="rounded-xl text-lg px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10">
            Hire Me
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-14">
          Results Clients Care About
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-neutral-900 border border-blue-500/20 rounded-2xl p-10 text-center">
            <BarChart3 className="mx-auto mb-4 text-blue-400"/>
            <h3 className="text-4xl font-bold text-blue-300">3x</h3>
            <p className="text-gray-400 mt-2">Profile Visibility Growth</p>
          </div>

          <div className="bg-neutral-900 border border-purple-500/20 rounded-2xl p-10 text-center">
            <Sparkles className="mx-auto mb-4 text-purple-400"/>
            <h3 className="text-4xl font-bold text-purple-300">High</h3>
            <p className="text-gray-400 mt-2">Content Engagement</p>
          </div>

          <div className="bg-neutral-900 border border-blue-500/20 rounded-2xl p-10 text-center">
            <Briefcase className="mx-auto mb-4 text-blue-400"/>
            <h3 className="text-4xl font-bold text-blue-300">More</h3>
            <p className="text-gray-400 mt-2">Client Opportunities</p>
          </div>

        </div>
      </section>

      {/* LINKEDIN STRATEGY */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-14">
          LinkedIn Growth Strategy
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-neutral-900 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">
              Profile Optimization
            </h3>
            <p className="text-gray-400">
              Optimizing headline, banner, about section and profile layout
              to attract ideal clients.
            </p>
          </div>

          <div className="bg-neutral-900 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              Content Strategy
            </h3>
            <p className="text-gray-400">
              Designing engaging LinkedIn content including posters
              and storytelling visuals.
            </p>
          </div>

          <div className="bg-neutral-900 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">
              Growth System
            </h3>
            <p className="text-gray-400">
              Consistent content and optimized positioning to increase
              visibility and authority.
            </p>
          </div>

        </div>

      </section>

      {/* POSTERS */}
      <section className="py-24">

        <h2 className="text-3xl font-bold text-center mb-14">
          Poster Portfolio
        </h2>

        <div className="flex gap-6 overflow-x-auto px-6">

          {[1,2,3,4,5].map((item)=>(
            <div
              key={item}
              className="min-w-[260px] h-[320px] bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/20 rounded-2xl flex items-center justify-center"
            >
              Poster
            </div>
          ))}

        </div>

      </section>

      {/* AI VIDEOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold mb-12">
          AI Video Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[1,2,3].map((item)=>(
            <div key={item} className="relative group">

              <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/20 rounded-2xl"></div>

              <Play className="absolute inset-0 m-auto text-blue-300 group-hover:scale-110 transition"/>

            </div>
          ))}

        </div>

      </section>

      {/* VIDEO EDITING */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold mb-12">
          Video Editing Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[1,2].map((item)=>(
            <div key={item} className="relative group">

              <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/20 rounded-2xl"></div>

              <Play className="absolute inset-0 m-auto text-blue-300 group-hover:scale-110 transition"/>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">

        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
          Let's Grow Your LinkedIn Presence
        </h2>

        <p className="text-gray-300 mb-10">
          If you're looking for LinkedIn optimization, engaging content,
          AI videos or professional editing — let's work together.
        </p>

        <div className="flex justify-center gap-6">

          <button className="flex gap-2 items-center rounded-xl px-8 py-4 bg-blue-600 hover:bg-blue-500">
            <Mail size={18}/> Contact Me
          </button>

          <button className="flex gap-2 items-center rounded-xl px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10">
            <Linkedin size={18}/> LinkedIn
          </button>

        </div>

      </section>

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} Portfolio
      </footer>

    </div>
  );
}
