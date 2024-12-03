import * as React from "react";
import { LanguageSelector } from "./LanguageSelector";

export function Navbar() {
  return (
    <gridLayout columns="*, auto" className="bg-blue-500 p-4">
      {/* <label
        col="0"
        className="text-xl font-bold text-white"
        text={t('appName')}
      /> */}
      <LanguageSelector />
    </gridLayout>
  );
}