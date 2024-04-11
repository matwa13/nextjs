import * as React from 'react';
import { FormItemContext } from '../../lib';

const FormItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const id = React.useId();

    return (
        <FormItemContext.Provider value={{ id }}>
            <div ref={ref} className={className} {...props} />
        </FormItemContext.Provider>
    );
});

FormItem.displayName = 'FormItem';

export { FormItem };
