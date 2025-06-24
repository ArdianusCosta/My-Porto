import { useState } from "react";

export default function LanguageSwitcher({ lang, setLang }) {
  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <li>
      <select
        value={lang}
        onChange={handleChange}
        className="sm:text-lg text-base font-medium bg-transparent border-none outline-none"
      >
        <option value="id">🇮🇩</option>
        <option value="en">🇬🇧</option>
      </select>
    </li>
  );
}
