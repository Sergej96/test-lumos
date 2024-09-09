import styles from './Achievement.module.css';
import { FC, PropsWithChildren } from 'react';

interface AchievementProps {
    className?: string;
}

export const Achievement: FC<PropsWithChildren<AchievementProps>> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`${styles.achievement} ${className}`}>
            <div className={styles.text}>{children}</div>
        </div>
    );
};
