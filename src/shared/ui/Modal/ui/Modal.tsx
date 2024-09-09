import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { FC, PropsWithChildren } from 'react';
import CloseIcon from '@/shared/assets/icons/close.svg';
import Image from 'next/image';
import { Typography } from '../../Typography';

interface ModalProps {
    isOpen: boolean;
    close: () => void;
    title?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
    children,
    isOpen,
    title,
    close,
}) => {
    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center bg-white p-0 md:bg-transparent md:p-8 md:pt-24">
                    <DialogPanel
                        transition
                        className="data-[closed]:transform-[scale(95%)] relative h-[90vh] w-full bg-white px-6 py-10 duration-300 ease-out data-[closed]:opacity-0 md:max-w-full">
                        <div>
                            <Typography
                                variant="xl"
                                className="border-b border-[#F8F8F8] pb-4 uppercase">
                                {title}
                            </Typography>
                            <button
                                onClick={close}
                                className="absolute md:-right-2 -top-2 right-3 size-10 p-2">
                                <Image src={CloseIcon} alt="close" />
                            </button>
                        </div>
                        <div className="py-4">{children}</div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};
