import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useFirebase } from "@/providers/FirebaseProvider";

type AppProps = {
  setListOpen: Function;
  setDeletedPost: Function;
  postID: string | number;
};

export default function PostDeleteModal({
  setListOpen,
  setDeletedPost,
  postID,
}: AppProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { deletePost } = useFirebase();

  return (
    <li className="cursor-pointer hover:bg-darkGrey px-4 py-3" onClick={onOpen}>
      Usuń post
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-darkGrey text-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                You want to delete this post pernamently. Are you sure ?
              </ModalHeader>

              <ModalFooter>
                <Button onPress={onClose}>Close</Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={() => {
                    deletePost(postID);
                    setDeletedPost(true);
                    setListOpen(false);
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </li>
  );
}
