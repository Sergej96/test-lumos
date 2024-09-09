import styles from './CountUsers.module.css';
import { Achievement } from '@/shared/ui/Achievement';
import { FC } from 'react';

interface CountUsersProps {}

export const CountUsers: FC<CountUsersProps> = ({}) => {
    return (
        <Achievement className={styles.count}>
            Trusted by
            <br /> <b>50M+ Users</b>
        </Achievement>
    );
};
