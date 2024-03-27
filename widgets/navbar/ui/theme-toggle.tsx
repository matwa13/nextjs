'use client';
import { MoonIcon, SunIcon } from '@/shared/ui';
import cx from 'classnames';
import { ChangeEvent, useState } from 'react';

type Props = {
    className?: string;
};

export const ThemeToggle = ({ className }: Props) => {
    const savedTheme = localStorage.getItem('theme');
    const isDark =
        savedTheme === 'dark' ||
        (!savedTheme &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);

    const [isDarkMode, setIsDarkMode] = useState(isDark);

    const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setIsDarkMode(checked);
        localStorage.setItem('theme', checked ? 'dark' : 'light');
    };

    return (
        <label className={cx('swap swap-rotate', className)}>
            <input
                type="checkbox"
                className="theme-controller"
                value="dracula"
                checked={isDarkMode}
                onChange={handleThemeChange}
            />
            <SunIcon className="swap-off h-10 w-10 fill-current" />
            <MoonIcon className="swap-on h-10 w-10 fill-current" />
        </label>
    );
};
