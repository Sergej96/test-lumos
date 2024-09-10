'use client';
import { Typography } from '@/shared/ui/Typography';
import styles from './SelectPlans.module.css';
import { FC, useEffect, useState } from 'react';
import { RadioGroup } from '@/shared/ui/RadioGroup';
import { DialogPlan } from '@/features/DialogPlan';

interface SelectPlansProps {}

export const SelectPlans: FC<SelectPlansProps> = ({}) => {
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState<string>('');

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((res) => res.json())
            .then((data) => {
                setUsers(
                    data.results.map((user: any, index: number) => ({
                        name: `${user.name.first} ${user.name.last}`,
                        value: index,
                    })),
                );
            });
    }, []);

    return (
        <div className={styles.root} id="select-plan">
            <Typography variant="xl" className="mb-4 uppercase">
                Choose{' '}
                <span className="uppercase text-secondary">your NAme</span>
            </Typography>
            <RadioGroup
                options={users}
                onChange={(value) => setSelectedUser(value.name)}
            />
            <DialogPlan userName={selectedUser} />
        </div>
    );
};
