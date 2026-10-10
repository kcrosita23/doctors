import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const names = {"/":"Surgical Oncology Team", "/dr-hipolito":"Dr. Cecilio D.S. Hipolito Jr.", "/dr-cortez":"Dr. Edgardo R. Cortez", "/dr-raymundo":"Dr. Grace Dianne Gonzalez Raymundo"};
export default function PageMeta() {
 const {pathname} = useLocation();
 useEffect(() => {const title = names[pathname] ? `${names[pathname]} | Surgical Oncology` : "Page not found | Surgical Oncology"; document.title = title; document.querySelector('meta[property="og:title"]')?.setAttribute("content",title); document.querySelector('link[rel="canonical"]')?.setAttribute("href",`https://surgicaloncology.vercel.app${pathname}`);}, [pathname]);
 return null;
}
