'use client';

import { useTokens } from '@/_entities/tokens';
import classnames from 'classnames';

export const TokensCounter = () => {
    const { tokens } = useTokens();
    if (tokens === null) {
        return null;
    }
    return (
        <div className="mr-4 flex items-center gap-4 rounded-full border border-primary p-2">
            <div className="font-bold">Tokens Left:</div>
            <div
                className={classnames('badge', {
                    'badge-success text-success-content': tokens > 5,
                    'badge-warning text-warning-content':
                        tokens <= 100 && tokens > 0,
                    'badge-error text-error-content': tokens === 0,
                })}
            >
                {tokens}
            </div>
        </div>
    );
};
