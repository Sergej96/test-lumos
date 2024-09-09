import styles from './Benefits.module.css';
import { FC } from 'react';
import eyeIcon from '@/shared/assets/icons/eye.svg';
import rocketIcon from '@/shared/assets/icons/rocket.svg';
import locationRoundIcon from '@/shared/assets/icons/location-round.svg';
import lockOpenIcon from '@/shared/assets/icons/lock-open.svg';
import Image from 'next/image';
import { Typography } from '@/shared/ui/Typography';

const items: {
    icon: string;
    title: string;
    subTitle: string;
    description: string;
}[] = [
    {
        icon: eyeIcon,
        title: 'Unlimited',
        subTitle: 'access to content',
        description:
            "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
    },
    {
        icon: rocketIcon,
        title: 'Flashing',
        subTitle: 'connecting speed',
        description:
            'VPN Lumos offers unlimited bandwidth for faster loading and no buffering!',
    },
    {
        icon: locationRoundIcon,
        title: 'Hide ',
        subTitle: 'your location',
        description:
            'Get your own unique IP for added security and access to restricted sites, apps, and services!',
    },
    {
        icon: lockOpenIcon,
        title: 'Bypass',
        subTitle: 'blocked sites',
        description: 'Access any website safely and anonymously!',
    },
];

interface BenefitsProps {}

export const Benefits: FC<BenefitsProps> = ({}) => {
    return (
        <div className={styles.root}>
            <ul className={styles.items}>
                {items.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <div className={styles.icon}>
                            <Image src={item.icon} alt={item.title} />
                        </div>
                        <div>
                            <Typography
                                variant="xl"
                                className="uppercase text-primary">
                                {item.title}
                            </Typography>
                            <Typography
                                variant="xl"
                                className="uppercase text-secondary">
                                {item.subTitle}
                            </Typography>
                        </div>
                        <Typography variant="base" className="text-gray">
                            {item.description}
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};
