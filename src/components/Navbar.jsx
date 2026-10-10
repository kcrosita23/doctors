import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import logo from "../assets/oncology_logo.webp";
const links = [["Home", "home"], ["Our team", "doctors"], ["About us", "about"], ["Our expertise", "interventions"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location]);
  return <><a href="#main-content" className="skip-link">Skip to content</a><header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl"><nav aria-label="Main navigation" className="page-width flex h-24 items-center justify-between gap-6 px-6">
    <HashLink to="/#home" aria-label="Surgical Oncology home" className="shrink-0 rounded-lg bg-sky-800 px-3 py-2"><img src={logo} alt="Surgical Oncology Team" className="w-44 md:w-52"/></HashLink>
    <div className="hidden items-center gap-8 lg:flex">{links.map(([label,id]) => <HashLink key={id} smooth to={`/#${id}`} className="text-sm font-medium text-slate-600 hover:text-sky-700">{label}</HashLink>)}<HashLink smooth to="/#contact" className="button-primary">Book a consultation</HashLink></div>
    <button className="rounded-lg p-3 text-slate-900 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} onKeyDown={event => {if(event.key === "Escape") setOpen(false);}}>{open ? <X/> : <Menu/>}</button>
  </nav>{open && <div id="mobile-navigation" className="border-t border-slate-100 bg-white px-6 pb-6 lg:hidden">{links.map(([label,id]) => <HashLink key={id} smooth to={`/#${id}`} onClick={() => setOpen(false)} className="block py-4 text-slate-700">{label}</HashLink>)}<HashLink smooth to="/#contact" onClick={() => setOpen(false)} className="button-primary">Book a consultation</HashLink></div>}</header></>;
}
