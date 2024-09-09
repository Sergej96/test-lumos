'use client';
import styles from './RadioGroup.module.css';
import { Radio, RadioGroup as UIRadioGroup } from '@headlessui/react';
import { FC, useEffect, useState } from 'react';
import CheckCircleIcon from '@/shared/assets/icons/check-cirle.svg';
import Image from 'next/image';
import { Typography } from '../../Typography';
import { classnames } from '@/shared/lib/classnames';
import { Loader } from './Loader';

type Option = { name: string; value: string };

interface RadioGroupProps {
    value?: string;
    onChange?: (option: Option) => void;
    options: Option[];
}

export const RadioGroup: FC<RadioGroupProps> = ({
    value = '',
    onChange,
    options,
}) => {
    const [selected, setSelected] = useState(() => {
        const currentOption = options.find((option) => option.value === value);
        return currentOption ? currentOption : options[0];
    });

    const onChangeHandler = ({ value }: Option) => {
        const currentOption = options.find((option) => option.value === value);

        if (currentOption) {
            setSelected(currentOption);
            onChange?.(currentOption);
        }
    };

    useEffect(() => {
        const currentOption = options.find((option) => option.value === value);
        setSelected(currentOption ? currentOption : options[0]);
    }, [options, value]);

    if (!options.length) return <Loader />;
    return (
        <UIRadioGroup
            value={selected}
            onChange={onChangeHandler}
            className="space-y-4">
            {options.map((option) => (
                <Radio
                    key={option.value}
                    value={option}
                    className={styles.radio}>
                    {({ checked }) => (
                        <div className={styles['radio-content']}>
                            <div
                                className={classnames(styles['radio-icon'], {
                                    [styles['active']]: checked,
                                })}>
                                <Image
                                    src={CheckCircleIcon}
                                    alt="check-circle"
                                    className={classnames(
                                        styles['radio-check'],
                                        {
                                            [styles['active']]: checked,
                                        },
                                    )}
                                />
                            </div>
                            <Typography variant="md">{option.name}</Typography>
                        </div>
                    )}
                </Radio>
            ))}
        </UIRadioGroup>
    );
};
