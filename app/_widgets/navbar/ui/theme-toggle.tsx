'use client';

import cx from 'classnames';
import { ChangeEvent } from 'react';
import { Icons } from '@/_shared/ui';
import { useTheme } from '@/_entities/theme';

type Props = {
    className?: string;
};

export const ThemeToggle = ({ className }: Props) => {
    const { setTheme, isDark } = useTheme();
    const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setTheme(checked);
    };

    return (
        <label className={cx('swap swap-rotate', className)}>
            <input
                type="checkbox"
                className="theme-controller"
                value="dracula"
                checked={isDark}
                onChange={handleThemeChange}
            />
            <Icons.Sun className="swap-off h-8 w-8 fill-current" />
            <Icons.Moon className="swap-on h-8 w-8 fill-current" />
        </label>
    );
};
