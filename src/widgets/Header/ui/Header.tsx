'use client';
import styles from './Header.module.css';
import { FC, MouseEvent, useCallback } from 'react';
import logo from '@/shared/assets/icons/logo.svg';
import Image from 'next/image';
import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
    const scrollToTop = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <a href="/#main" onClick={scrollToTop}>
                    <Image src={logo} alt="logo" />
                    <Typography variant="md">VPN</Typography>
                </a>
            </div>
            <div>
                <a href="/#select-plan">
                    <Button theme="secondary" rounded>
                        Get VPN
                    </Button>
                </a>
            </div>
        </header>
    );
};
