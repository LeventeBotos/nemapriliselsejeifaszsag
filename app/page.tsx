"use client";
import { useState, useEffect } from "react";

const AprilPun = () => {
  const [ipInfo, setIpInfo] = useState<any>(null);
  const [pun, setPun] = useState("");

  useEffect(() => {
    const fetchIpInfo = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipResponse.json();
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();
        setIpInfo(locationData);
      } catch (error) {
        console.error("Error fetching IP information:", error);
      }
    };

    fetchIpInfo();
  }, []);

  useEffect(() => {
    generatePun();
  }, []);

  const generatePun = () => {
    const puns = [
      "Miért mondják az autószerelők április elsején, hogy 'Megvan a kulcs'? Mert becsapódott!",
      "Miért hajigálja a postás április elsején a leveleket? Mert viccpostán van!",
      "Miért nem lehet összetörni az áprilisi hidegben elhagyott teáskanalat? Mert fagyos humorral van töltve!",
      "Miért hívnak április elsején mindig egyetlen gombóc fagylaltra? Mert egyetértően bólint!",
      "Miért mondják az ápolónők április elsején, hogy 'Nyugodtan vegye be a gyógyszert'? Mert ez a nap úgyis hamis!",
      "Miért mondja a postás április elsején, hogy 'Nem vagyunk otthon'? Mert ez a legnagyobb levél!",
      "Miért mondják a fodrászok április elsején, hogy 'Egyenesen vágjunk'? Mert nekik is jár egy kis tréfa!",
      "Miért állítja a szakács április elsején, hogy 'Fűszeres az élet'? Mert fűszerrel fűszerezve!",
      "Miért számol a matematikatanár április elsején? Mert fél órás matekóra lesz öt percből!",
      "Miért mondja az állatorvos április elsején, hogy 'Nem bánt semmit a kis kedvence'? Mert csak tréfál!",
      "Miért mondják a bankárok április elsején, hogy 'Nem jöhet a pénz'? Mert számlájuk nem nyereséges!",
      "Miért nem lehet megölni a viccet április elsején? Mert túl nevetéskeltő!",
      "Miért kér egy süteményt az informatikus április elsején? Mert nagyon szereti a cookie-kat!",
      "Miért kér ajándékot az angol tanár április elsején? Mert mindig nagyon jó a közönsége!",
      "Miért mondja a futár április elsején, hogy 'Nincs hová rohanni'? Mert az idő túl gyorsan telik!",
      "Miért mondja a borbély április elsején, hogy 'Mindenre kész'? Mert a hajvágás egy szikra humor!",
      "Miért mondja a meteorológus április elsején, hogy 'Napsütés várható'? Mert felhős az előrejelzés!",
      "Miért mondja a művész április elsején, hogy 'Művészet minden'? Mert az ecset egy szabadalom!",
      "Miért mondja a pincér április elsején, hogy 'Vacsora szolgálatban'? Mert a főzés a főzésben rejlik!",
      "Miért mondja a rendőr április elsején, hogy 'Nyugodtan mehet tovább'? Mert a bűn nem bűn!",
    ];

    const randomIndex = Math.floor(Math.random() * puns.length);
    setPun(puns[randomIndex]);
  };

  return (
    <div className="min-h-screen flex-col gap-3 bg-[#f5f5f5] text-black flex justify-center items-center">
      <h1>Köszi az adatokat :)!</h1>
      <div className="max-w-lg w-full bg-white p-8 rounded shadow-md">
        {ipInfo && (
          <div>
            <p>IP Cím: {ipInfo.ip}</p>
            <p>
              Földrajzi Szélesség: {ipInfo.latitude}, Földrajzi Hosszúság:{" "}
              {ipInfo.longitude}
            </p>
            <p>
              Helyzet: {ipInfo.city}, {ipInfo.region}, {ipInfo.country_name}
            </p>
          </div>
        )}
      </div>
      <h1>Ezért megérdemelsz egy csodás viccet:</h1>
      <div className="max-w-lg w-full bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">{pun}</h1>
      </div>
      <button
        onClick={generatePun}
        className="max-w-lg w-full bg-white border-black border-solid border-2 p-4 rounded shadow-md"
      >
        Másikat kérek
      </button>
      <div className="w-full h-10" />
      <p className="">Made w ❤️ By Levi</p>
    </div>
  );
};

export default AprilPun;
