import { ArrowUpRight, ArrowDown } from "lucide-react";
import { HERO_CONTENT, HERO_CONTENT2, HERO_CONTENT3 } from "../constants";
import cortez from "../assets/DrCortez.webp";
import hipolito from "../assets/docHipolito1.webp";
import raymundo from "../assets/DraRaymundo.webp";
export default function Hero() {
  return <section id="home" className="relative overflow-hidden bg-slate-50 pt-24"><div className="page-width grid items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
    <div className="relative z-10"><p className="eyebrow">Surgical Oncology Team</p><h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">Surgical excellence.<br/><span className="text-sky-700">Lifesaving results.</span></h1><p className="mt-8 max-w-xl text-base leading-8 text-slate-600">{HERO_CONTENT} <strong className="font-medium text-slate-900">{HERO_CONTENT2}</strong>{HERO_CONTENT3}</p><div className="mt-9 flex flex-wrap gap-4"><a href="#contact" className="button-primary">Book a consultation <ArrowUpRight size={18}/></a><a href="#doctors" className="button-secondary">Meet our team <ArrowDown size={17}/></a></div></div>
    <div className="overflow-hidden rounded-[1.75rem] border border-sky-100 bg-white shadow-2xl shadow-sky-950/10">
      <div className="flex items-center justify-between gap-4 px-6 pb-6 pt-7 sm:px-8">
        <div><p className="eyebrow">Your care team</p><p className="mt-2 text-xl font-semibold tracking-tight text-slate-900">Expertise. With a human touch.</p></div>
        <span aria-hidden="true" className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700 sm:flex"><ArrowUpRight size={22}/></span>
      </div>
      <div className="grid grid-cols-3 gap-2 px-4 sm:gap-3 sm:px-6">
        {[[cortez,"Dr. Cortez"],[hipolito,"Dr. Hipolito"],[raymundo,"Dr. Raymundo"]].map(([image,name], index) => <div key={name} className={index === 1 ? "pt-6" : "pb-6"}>
          <div className="overflow-hidden rounded-t-[5rem] rounded-b-xl bg-gradient-to-b from-sky-100 to-slate-50 pt-4"><img src={image} alt={name} className="aspect-[3/5] w-full object-cover object-top sm:aspect-[3/5]"/></div>
          <p className="mt-3 text-center text-[10px] font-semibold text-slate-600 sm:text-xs">{name}</p>
        </div>)}
      </div>
      <div className="mt-6 border-t border-sky-100 bg-sky-900 px-6 py-6 sm:px-8">
        <p className="text-lg font-medium leading-snug text-white">Advanced training.<br/>Collaborative care.</p>
        <p className="mt-3 text-sm leading-6 text-sky-100">A personalized approach to surgical cancer treatment.</p>
      </div>
    </div>  </div></section>;
}
