import { Application, EventData, View } from "@nativescript/core";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../i18n";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLanguageChange = (langCode: string, args: EventData) => {
    const obj = args.object as View;

    if (obj.ios) {
      (obj.ios as any).setNeedsLayout();
    }

    if (obj.android) {
      (obj.android as any).requestLayout();
    }

    i18n.changeLanguage(langCode).then(() => {
      const rootView = Application.getRootView();
      rootView.requestLayout();

      const currentPage = rootView.page;
      if (currentPage) {
        currentPage.requestLayout();
      }

      setIsOpen(false);
    }).catch((error) => {
      console.error('Failed to change language:', error);
    });
  };

  return (
    <absoluteLayout>
      <button
        aria-label='Change language'
        className="w-10 h-10 rounded-full bg-transparent"
        text="🌐"
        onTap={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <stackLayout
          className="bg-white rounded-lg shadow-lg p-2 absolute"
          style={{ top: 30, left: 50, width: 150, }}
        >
          {LANGUAGES.map((lang) => (
            <button
              aria-label={`Change language to ${lang.name}`}
              key={lang.code}
              className={`p-2 text-left rounded-lg ${i18n.language === lang.code
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700'
                }`}
              text={lang.name}
              onTap={(args) => handleLanguageChange(lang.code, args)}
            />
          ))}
        </stackLayout>
      )}
    </absoluteLayout>
  );
}