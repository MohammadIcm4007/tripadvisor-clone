import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import styles from "./email.module.scss";3

function Email() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <button onClick={onOpen} className={styles.google} ><MdOutlineMailOutline className={styles.icon} />ورود با ایمیل</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className={styles.body}>
            <br />
            <MdOutlineMailOutline className={styles.icon} />
            <div className={styles.title} >ورود با ایمیل</div>
            <Input className={styles.input} placeholder="ایمیل" />
            <Input className={styles.input} placeholder="رمز عبور" />
            <div className={styles.div} ><button className={styles.login} >ورود</button></div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Email;
