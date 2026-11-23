import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="w-20 h-20 relative mx-auto mb-5 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/logo.png"
            alt="TradeLink Logo"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-extrabold text-[#0B236E] mb-2">TradeLink</h1>
        <p className="text-slate-500 text-sm mb-6">
          Your campus. Your marketplace. One connected community.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 text-left mb-6">
          <p className="font-semibold mb-1">Mobile First Development Phase</p>
          <p>
            The student mobile app (React Native + Expo) is the priority release target. The web marketplace and role-protected admin console share the same NestJS backend contracts.
          </p>
        </div>
        <div className="text-xs text-slate-400">
          Serving University of Cebu: Main • Banilad • LM • METC • Pardo-Talisay
        </div>
      </div>
    </main>
  );
}
