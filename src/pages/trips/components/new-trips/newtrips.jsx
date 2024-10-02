import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styles from "./newtrips.module.scss";

function Newtrips() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
        <Button
        style={{marginTop:"20px" ,marginBottom:"15px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}
          ref={btnRef}
          bg={"#06E895"}
          _hover={{ bg: "#06c47e" }}
          color={"#fff"}
          onClick={onOpen}
        >
          ایجاد اولین سفر
        </Button>
      <Drawer
        size={"md"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className={styles.header}>ایجاد سفر جدید</DrawerHeader>

          <DrawerBody>
            <div className={styles.name}>
              <div className={styles.title}>نام سفر</div>
              <Input placeholder="یک اسم برای سفرتون انتخاب کنید" />
            </div>
            <div className={styles.name}>
              <div className={styles.title}>انتخاب مقصد</div>
              <Input placeholder="نام شهر" borderRadius="20px" />
            </div>
          </DrawerBody>

          <DrawerFooter className={styles.footer}>
            <Button variant="outline" mr={3} onClick={onClose}>
              لغو
            </Button>
            <Button bg={"#06E895"} _hover={{ bg: "#06c47e" }} color={"#fff"}>
              ایجاد سفر
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Newtrips;
