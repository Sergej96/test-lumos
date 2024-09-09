import Image from 'next/image';
import styles from './CardInfo.module.css';
import { FC } from 'react';
import location from '@/shared/assets/icons/location.svg';
import hierarchySquare from '@/shared/assets/icons/hierarchy-square.svg';
import { Typography } from '@/shared/ui/Typography';

interface CardInfoProps {}

export const CardInfo: FC<CardInfoProps> = ({}) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles['content-item']}>
                    <Image src={location} alt="location" />
                    <div>
                        <Typography variant="lg">50+</Typography>
                        <Typography variant="sm" className="text-gray">
                            Locations
                        </Typography>
                    </div>
                </div>
                <div className={styles.line} />
                <div className={styles['content-item']}>
                    <Image src={hierarchySquare} alt="hierarchy-square" />
                    <div>
                        <Typography variant="lg">1000+</Typography>
                        <Typography variant="sm" className="text-gray">
                            Servers
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};
