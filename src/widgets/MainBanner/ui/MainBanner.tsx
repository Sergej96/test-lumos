import styles from './MainBanner.module.css';
import { Typography } from '@/shared/ui/Typography';
import { FC } from 'react';
import Image from 'next/image';
import mainBanner from '@/shared/assets/images/main-banner.png';
import { Button } from '@/shared/ui/Button';
import { CountUsers } from '@/features/CountUsers';
import { CardInfo } from '@/features/CardInfo';

interface MainBannerProps {}

export const MainBanner: FC<MainBannerProps> = ({}) => {
    return (
        <div className={styles.banner}>
            <Typography variant="xxl" className={styles.title}>
                Access <span className={styles.mark}>everything securely</span>{' '}
                with <br />
                VPN
            </Typography>
            <Image
                src={mainBanner}
                alt="main-banner"
                className={styles.image}
            />
            <Button className={styles.button}>Get VPN</Button>
            <CountUsers />
            <CardInfo />
        </div>
    );
};
