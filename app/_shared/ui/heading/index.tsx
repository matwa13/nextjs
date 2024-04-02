import classnames from 'classnames';
import { ReactElement } from 'react';

type Props = {
    children: ReactElement | string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
};

const classNames = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
};

export const Heading = ({
    children,
    tag = 'h1',
    className,
}: Props): ReactElement => {
    const classList = classnames(classNames[tag], className);

    const Element = tag;
    return <Element className={classList}>{children}</Element>;
};
