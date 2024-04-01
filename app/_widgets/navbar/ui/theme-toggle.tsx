'use client';
import cx from 'classnames';
import { ChangeEvent, useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@/_shared/ui';

type Props = {
    className?: string;
};

export const ThemeToggle = ({ className }: Props) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const savedTheme = window.localStorage.getItem('theme');
        const isDark =
            savedTheme === 'dark' ||
            (!savedTheme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDarkMode(isDark);
    }, []);

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
