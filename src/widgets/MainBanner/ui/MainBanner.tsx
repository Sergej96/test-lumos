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
        <div className={styles.banner} id="main">
            <Typography variant="xxl" className={styles.title}>
                Access <span className={styles.mark}>everything securely</span>{' '}
                with <br />
                VPN
            </Typography>
            <div className={styles['image-container']}>
                <Image
                    src={mainBanner}
                    alt="main-banner"
                    className={styles.image}
                />
            </div>
            <a href="/#select-plan">
                <Button className={styles.button}>Get VPN</Button>
            </a>
            <CountUsers />
            <CardInfo />
            <Typography
                variant="base"
                className="mt-[24px] w-full text-center text-gray">
                VPN-your <span className={styles.mark}>ultimate</span> solution
                for a private and secure online experience!
            </Typography>
        </div>
    );
};
