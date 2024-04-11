import { Card, cards } from './ui';

export default function SandboxPage() {
    return (
        <div className="grid auto-rows-fr gap-2 sm:grid-cols-2 xl:grid-cols-3 xl:gap-4">
            {cards.map((card, index) => (
                <Card key={card.route} {...card} />
            ))}
        </div>
    );
}
