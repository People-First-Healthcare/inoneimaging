"use client";

import { useEffect, useState } from "react";
import { Langs, changeLangauge } from "./GoogleTranslate";

const languages = [
  {
    icon: "",
    text: "English",
    value: Langs["English"],
  },
  {
    icon: "",
    text: "عربي",
    value: Langs["Arabic"],
  },
  {
    icon: "",
    text: "简体中文",
    value: Langs["Chinese (Simplified)"],
  },
];

export default function ChangeLanguage() {
  const [language, setLanguage] = useState<Langs | string>(Langs.English);

  useEffect(() => {
    const savedLanguage = document?.cookie?.split(";")[2]?.split("/")[2];
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <select
      className="text-black"
      value={language}
      onChange={(e) => {
        setLanguage(e.target.value as Langs);
        changeLangauge(e.target.value as Langs);
      }}
    >
      {languages.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        );
      })}
    </select>
  );
}
