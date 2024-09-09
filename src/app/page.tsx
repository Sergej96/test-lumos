import { Typography } from '@/shared/ui/Typography';
import { Benefits } from '@/widgets/Benefits';
import { MainBanner } from '@/widgets/MainBanner';
import { SelectPlans } from '@/widgets/SelectPlans';

export default async function Home() {
    return (
        <>
            <MainBanner />
            <Benefits />
            <Typography
                variant="lg"
                className="mt-10 text-center text-secondary md:mt-18">
                Millions of people trust us!
            </Typography>
            <SelectPlans />
        </>
    );
}
