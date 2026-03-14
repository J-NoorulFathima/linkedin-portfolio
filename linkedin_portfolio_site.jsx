import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Video, Image, Sparkles, BarChart3, Briefcase, Play } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0f1f] to-black text-white scroll-smooth">

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 mt-10"
        >
          <Button className="rounded-2xl text-lg px-8 py-6 bg-blue-600 hover:bg-blue-500 transition">View My Work</Button>
          <Button variant="outline" className="rounded-2xl text-lg px-8 py-6 border-blue-500 text-blue-400 hover:bg-blue-500/10">Hire Me</Button>
        </motion.div>
      </section>

      {/* RESULTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">Results Clients Care About</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Card className="bg-neutral-900/80 backdrop-blur border border-blue-500/20 rounded-2xl text-center hover:border-blue-500/40 transition">
            <CardContent className="p-10">
              <BarChart3 className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-4xl font-bold text-blue-300">3x</h3>
              <p className="text-gray-400 mt-2">Profile Visibility Growth</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/80 backdrop-blur border border-blue-500/20 rounded-2xl text-center hover:border-blue-500/40 transition">
            <CardContent className="p-10">
              <Sparkles className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-4xl font-bold text-purple-300">High</h3>
              <p className="text-gray-400 mt-2">Content Engagement</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/80 backdrop-blur border border-blue-500/20 rounded-2xl text-center hover:border-blue-500/40 transition">
            <CardContent className="p-10">
              <Briefcase className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-4xl font-bold text-blue-300">More</h3>
              <p className="text-gray-400 mt-2">Client Opportunities</p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* LINKEDIN STRATEGY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold mb-14 text-center">LinkedIn Growth Strategy</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Card className="bg-neutral-900/80 backdrop-blur border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl mb-3 text-blue-300">Profile Positioning</h3>
              <p className="text-gray-400">Optimizing headline, banner, about section and profile layout to attract ideal clients.</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/80 backdrop-blur border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl mb-3 text-purple-300">Content Strategy</h3>
              <p className="text-gray-400">Designing engaging LinkedIn content including posters and storytelling visuals.</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/80 backdrop-blur border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl mb-3 text-blue-300">Growth System</h3>
              <p className="text-gray-400">Consistent content and optimized profile positioning to increase visibility and authority.</p>
            </CardContent>
          </Card>

        </div>

      </section>

      {/* BEFORE AFTER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-14">LinkedIn Profile Transformation</h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-neutral-900/80 border border-red-500/20 rounded-2xl p-6">
            <p className="text-red-300 mb-4">Before Optimization</p>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-gray-500">
              Before Profile
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-green-500/20 rounded-2xl p-6">
            <p className="text-green-300 mb-4">After Optimization</p>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-gray-500">
              After Profile
            </div>
          </div>

        </div>

      </section>

      {/* SCROLLING POSTER PORTFOLIO */}
      <section className="py-24">

        <h2 className="text-3xl font-bold text-center mb-14">Poster Portfolio</h2>

        <div className="flex gap-6 overflow-x-auto px-6">

          {[1,2,3,4,5].map((item)=> (
            <div key={item} className="min-w-[260px] h-[320px] bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/20 rounded-2xl flex items-center justify-center text-gray-300">
              Poster
            </div>
          ))}

        </div>

      </section>

      {/* AI VIDEO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold mb-12">AI Video Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[1,2,3].map((item)=> (
            <div key={item} className="relative group">
              <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/20 rounded-2xl"></div>
              <Play className="absolute inset-0 m-auto text-blue-300 opacity-80 group-hover:scale-110 transition" />
            </div>
          ))}

        </div>

      </section>

      {/* VIDEO EDITING */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold mb-12">Video Editing Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[1,2].map((item)=> (
            <div key={item} className="relative group">
              <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/20 rounded-2xl"></div>
              <Play className="absolute inset-0 m-auto text-blue-300 opacity-80 group-hover:scale-110 transition" />
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">

        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">Let's Grow Your LinkedIn Presence</h2>

        <p className="text-gray-300 mb-10">
          If you're looking for LinkedIn optimization, engaging content,
          AI videos or professional editing — let's work together.
        </p>

        <div className="flex justify-center gap-6">

          <Button className="rounded-2xl flex gap-2 text-lg px-8 py-6 bg-blue-600 hover:bg-blue-500">
            <Mail size={18}/> Contact Me
          </Button>

          <Button variant="outline" className="rounded-2xl flex gap-2 text-lg px-8 py-6 border-blue-500 text-blue-400 hover:bg-blue-500/10">
            <Linkedin size={18}/> LinkedIn
          </Button>

        </div>

      </section>

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} Portfolio
      </footer>

    </div>
  );
}
