import { ArrowUpRight, ArrowDown } from "lucide-react";
import { HERO_CONTENT, HERO_CONTENT2, HERO_CONTENT3 } from "../constants";
import cortez from "../assets/DrCortez.webp";
import hipolito from "../assets/docHipolito1.webp";
import raymundo from "../assets/DraRaymundo.webp";
export default function Hero() {
  return <section id="home" className="relative overflow-hidden bg-slate-50 pt-24"><div className="page-width grid items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
    <div className="relative z-10"><p className="eyebrow">Surgical Oncology Team</p><h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">Surgical excellence.<br/><span className="text-sky-700">Lifesaving results.</span></h1><p className="mt-8 max-w-xl text-base leading-8 text-slate-600">{HERO_CONTENT} <strong className="font-medium text-slate-900">{HERO_CONTENT2}</strong>{HERO_CONTENT3}</p><div className="mt-9 flex flex-wrap gap-4"><a href="#contact" className="button-primary">Book a consultation <ArrowUpRight size={18}/></a><a href="#doctors" className="button-secondary">Meet our team <ArrowDown size={17}/></a></div></div>
    <div className="relative"><div className="overflow-hidden rounded-[2rem] bg-sky-100"><div className="grid h-[340px] grid-cols-3 items-end gap-1 px-3 pt-10 md:h-[460px]">{[[cortez,"Dr. Cortez"],[hipolito,"Dr. Hipolito"],[raymundo,"Dr. Raymundo"]].map(([image,name]) => <img key={name} src={image} alt={name} className="h-full w-full object-contain object-bottom"/>)}</div></div><div className="relative -mt-12 ml-6 mr-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5"><p className="eyebrow">Our approach</p><p className="mt-2 text-xl font-medium text-slate-900">Advanced training. Collaborative care.</p><p className="mt-2 text-sm leading-6 text-slate-500">A personalized approach to surgical cancer treatment.</p></div></div>
  </div></section>;
}
