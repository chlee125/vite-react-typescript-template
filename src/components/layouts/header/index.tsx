import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Moon, Sun } from 'lucide-react';
import Menu from '@/components/layouts/header/menu';
import MobileMenu from '@/components/layouts/header/mobileMenu';
import useLanguage from '@/stores/language';
import { Button } from '@/components/ui/button';
import SignIn from '@/components/SignIn';
import { useDarkMode } from '@/lib/dark-mode';

function Header() {
  const { t } = useTranslation();
  const { isDarkMode, toggle } = useDarkMode();
  const { toggleLang } = useLanguage();

  const menuItems = [
    { path: '/example', name: t('menu.example') },
  ];
  return (
    <header className="z-50 flex w-full flex-wrap justify-start py-4 text-sm fixed top-0 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-4">
        <div className="sm:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
        <Link to="/" className="text-xl font-semibold text-left">
          {t('project.title')}
        </Link>
        <div className="hidden grow basis-full sm:block">
          <Menu menuItems={menuItems} />
        </div>
        <div className="flex items-center justify-end sm:px-10">
          <SignIn />
          <Sun className="cursor-pointer ml-2 hidden dark:block" onClick={toggle} />
          <Moon className="cursor-pointer ml-2 dark:hidden" onClick={toggle} />
          <Globe className="cursor-pointer ml-2" onClick={toggleLang} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
