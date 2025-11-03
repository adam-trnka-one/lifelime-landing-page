import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, ChevronDown } from "lucide-react";

const languages = [
  { code: "cz", name: "Czech" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "German" },
  { code: "es", name: "Spanish" },
  { code: "pl", name: "Polish" },
];

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

const LanguageSwitcher = ({ variant = 'light' }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find(lang => lang.code === i18n.language)?.code.toUpperCase() || 'EN';

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const triggerClass = variant === 'light' 
    ? "text-white/90 hover:text-white hover:bg-white/10"
    : "text-gray-900 hover:text-primary";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-2 transition-all duration-300 font-medium outline-none px-4 py-2 rounded-lg ${triggerClass}`}>
        <Languages size={18} />
        {currentLanguage}
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white/95 backdrop-blur-sm">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={i18n.language === lang.code ? "bg-primary/10" : ""}
          >
            {lang.code.toUpperCase()} - {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
