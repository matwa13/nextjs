import classnames from 'classnames';

type Props = {
    size?: 'sm' | 'md' | 'lg';
    type?: 'dots' | 'spinner';
    className?: string;
};

export const Loader = ({ size = 'md', type = 'spinner', className }: Props) => {
    return (
        <span
            className={classnames(
                'loading',
                {
                    'loading-dots': type === 'dots',
                    'loading-spinner': type === 'spinner',
                },
                {
                    'loading-sm': size === 'sm',
                    'loading-md': size === 'md',
                    'loading-lg': size === 'lg',
                },
                className,
            )}
        />
    );
};
