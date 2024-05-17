import { ControllerProps } from 'react-hook-form';
import {
    ChangeEvent,
    forwardRef,
    useEffect,
    useState,
    KeyboardEvent,
    PropsWithoutRef,
} from 'react';
import { notification } from '@/_entities/notifications';
import { TFormValues } from '@/_entities/projects';
import { Button, Icons, Input } from '@/_shared/ui';

type Props = Parameters<
    ControllerProps<TFormValues, 'techStack'>['render']
>[0]['field'];

const TechStackInput = forwardRef<HTMLInputElement, PropsWithoutRef<Props>>(
    ({ value: fieldValue, onChange, disabled, ...props }, ref) => {
        const [value, setValue] = useState<string>('');
        const [selectedItems, setSelectedItems] =
            useState<string[]>(fieldValue);

        useEffect(() => {
            setSelectedItems(fieldValue);
        }, [fieldValue]);

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        };

        const handleAdd = () => {
            const newValue = value
                .split(',')
                .map((v) => v.trim())
                .filter(Boolean);
            if (!newValue.length) {
                notification.error('Please enter a value');
                return;
            }
            let newValues: string[] = [];
            let existingValues: string[] = [];
            newValue.forEach((v) => {
                if (selectedItems.includes(v)) {
                    existingValues.push(v);
                } else if (!newValues.includes(v)) {
                    newValues.push(v);
                }
            });
            if (existingValues.length) {
                notification.error(
                    `The following values are already added: ${existingValues.join(
                        ', ',
                    )}`,
                );
            }
            onChange([...selectedItems, ...newValues]);
            setValue('');
        };

        const handleDelete = (item: string) => () => {
            const newItems = fieldValue.filter((i) => i !== item);
            onChange(newItems);
        };

        const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleAdd();
            }
        };

        const renderItems = () => {
            if (!selectedItems.length) {
                return null;
            }

            return (
                <div className="mt-2 flex flex-wrap gap-2">
                    {selectedItems.map((item, index) => (
                        <div
                            className="badge badge-primary gap-2 py-4"
                            key={item}
                        >
                            {item}
                            <Icons.Delete
                                className="h-6 w-6 cursor-pointer"
                                onClick={handleDelete(item)}
                            />
                        </div>
                    ))}
                </div>
            );
        };

        return (
            <div>
                <div className="join w-full">
                    <Input
                        ref={ref}
                        value={value}
                        placeholder="Enter a value or values separated by comma and press Enter or Add button"
                        className="join-item"
                        onChange={handleChange}
                        disabled={disabled}
                        onKeyDown={handleKeyDown}
                        {...props}
                    />
                    <Button
                        type="button"
                        className="join-item basis-1/6"
                        onClick={handleAdd}
                        disabled={disabled}
                    >
                        Add
                    </Button>
                </div>
                {renderItems()}
            </div>
        );
    },
);

TechStackInput.displayName = 'TechStackInput';

export { TechStackInput };
