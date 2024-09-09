'use client';
import { Button } from '@/shared/ui/Button';
import { FC, useCallback, useState } from 'react';
import styles from './DialogPlan.module.css';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { Input } from '@/shared/ui/Input';
import lock from '@/shared/assets/icons/lock-gray.svg';
import Image from 'next/image';

interface DialogPlanProps {
    userName?: string;
}

export const DialogPlan: FC<DialogPlanProps> = ({
    userName
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsOpen(false);
        console.log(email);
    };

    return (
        <>
            <Button className={styles.button} onClick={() => setIsOpen(true)}>
                Get VPN
            </Button>
            <Modal
                isOpen={isOpen}
                close={() => setIsOpen(false)}
                title="Your name">
                <form onSubmit={onSubmit}>
                    <Typography className="mb-4 border-b border-[#F8F8F8] pb-4">
                        {userName}
                    </Typography>
                    <Input
                        className=""
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                    />
                    <Typography className="mt-4 flex gap-2 text-[#8C8C8C]">
                        <Image src={lock} alt="lock" />
                        Your information is 100% secure. We don’t share your
                        personal information.
                    </Typography>
                    <Button type="submit" className="mt-10 w-full">
                        Continue
                    </Button>
                </form>
            </Modal>
        </>
    );
};
