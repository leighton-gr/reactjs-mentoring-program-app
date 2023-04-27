import React, { ReactNode } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';

type Props = {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    children?: ReactNode;
    isSubmitButtonVisible?: boolean;
    isResetButtonVisible?: boolean;
    isConfirmButtonVisible?: boolean;
}

export const ModalTemplate = ({
                                  isOpen,
                                  onClose,
                                  title,
                                  children,
                              }: Props) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {/*Add reset and confirm buttons*/}
                        <Button variant="ghost" onClick={onClose} type='submit'>
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};