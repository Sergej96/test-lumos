import styles from './RadioGroup.module.css';
import { FC } from 'react';

interface LoaderProps {
    count?: number;
}

export const Loader: FC<LoaderProps> = ({ count = 5 }) => {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className={styles.radio}>
                    <div className="h-4 w-full animate-pulse rounded-md bg-gray opacity-70"></div>
                </div>
            ))}
        </div>
    );
};
