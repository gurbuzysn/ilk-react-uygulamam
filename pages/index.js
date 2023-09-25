import Head from "next/head";
import stiller from "@/styles/Home.module.css";
import Baslik from "@/pages/Baslik";
import Image from "next/image";
import OzluSoz from "./OzluSoz";
import { useState } from "react";

export default function Home() {
  const [english, setEnglish] = useState(true);

  const insan = {
    ad: "Ahmet",
    soyad: "Yılmaz",
  };

  const degisti = function (e) {
    alert("yeni değer: " + e.target.checked);
  };

  return (
    <>
      <Head>
        <title>İlk Next.js Uygulamam</title>
      </Head>
      <div>
        <Image
          className={stiller.sagResim}
          src="/resim.jpg"
          alt="Resim"
          width={160}
          height={217}
        />
        <Baslik />
        <p className={stiller.vurgulu}>İlk React Uygulamam</p>
        <p>Saat: {new Date().toLocaleTimeString()}</p>
        <h2>İnsan</h2>
        <p>Adı: {insan.Ad}</p>
        <p>Soyad:{insan.soyad}</p>
        <input type="checkbox" onChange={degisti} /> İngilizce Mi?
        <OzluSoz ingilizceMi={english} />
      </div>
    </>
  );
}
