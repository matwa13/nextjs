import { ReactNode } from 'react';

export default function TodoListLayout({ children }: { children: ReactNode }) {
    return <div className="mx-auto max-w-md">{children}</div>;
}
