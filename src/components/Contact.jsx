import PropTypes from "prop-types";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import clinics from "../clinics.json";
import Footer from "./Footer";
export default function Contact({ doctor }) {
  const groups = doctor ? clinics.filter(group => group.doctor === doctor) : clinics;
  return <><section id="contact" className="section-shell scroll-mt-24 bg-slate-900 text-white">
    <div className="page-width"><p className="eyebrow text-sky-300">Appointments & locations</p><h2 className="section-title text-white">Let’s find your next step.</h2><p className="mt-4 max-w-xl text-slate-300">Contact your doctor’s secretary to arrange a consultation. You can also message the listed numbers on Viber.</p>
      <div className={`mt-12 grid gap-6 ${doctor ? "" : "lg:grid-cols-3"}`}>
        {groups.map(group => <div key={group.doctor} className="rounded-2xl border border-white/15 bg-white/5 p-6"><h3 className="mb-6 text-xl font-semibold">Dr. {group.doctor}<span className="mt-1 block text-sm font-normal text-slate-400">Clinic contacts</span></h3>
          {group.clinics.map(clinic => <article key={clinic.location} className="clinic-record"><a href={clinic.map} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 font-medium text-sky-200 hover:text-white"><MapPin size={18} className="mt-1 shrink-0"/>{clinic.location}<ArrowUpRight size={16} className="shrink-0"/></a><p className="my-3 text-sm leading-7 text-slate-300">{clinic.schedule}</p><p className="text-sm text-slate-400">{clinic.secretary}</p><a className="mt-2 inline-flex items-center gap-2 rounded-lg py-2 font-medium" href={`tel:${clinic.phone.replace(/ /g, "")}`}><Phone size={16}/>{clinic.phone}</a></article>)}
        </div>)}
      </div>
    </div></section><Footer/></>;
}
Contact.propTypes = { doctor: PropTypes.string };
