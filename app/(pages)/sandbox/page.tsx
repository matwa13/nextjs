import { Card, cards } from './ui';

export default function SandboxPage() {
    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
            {cards.map((card, index) => (
                <Card key={card.route.path} {...card} />
            ))}
        </div>
    );
}
