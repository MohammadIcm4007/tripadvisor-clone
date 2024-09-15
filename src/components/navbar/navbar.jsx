import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./navbar.module.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
// import { MdOutlineMailOutline } from "react-icons/md";
import Email from "../../pages/home/components/email/email";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [islogin, setislogin] = useState(false); // لاگین بودن یا نبودن را مشخص میکند
  return (
    <div className={styles.navbar}>
      {!islogin ? (
        <div className={styles.div}>
          <Button className={styles.login} onClick={onOpen}>
            ورود
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <div className={styles.modal}>
                  <img
                    className={styles.miniicon}
                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg"
                    alt="icon"
                  />
                  <div className={styles.text}>
                    برای باز شدن بهترین قابلیت ها وارد شوید
                  </div>
                  <Email /> {/* کامپوننت ایمیل که یک مودال برای ورود با ایمیل است */}
                  <button className={styles.google}>
                    <FcGoogle className={styles.icon} />
                    <span>ورود با گوگل</span>
                  </button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      ): (<Link className={styles.div} >
        <CgProfile className={styles.profile} />
      </Link>)}
      <div className={styles.links}>
        <div className={styles.menu}>
          <Menu>
            <MenuButton className={styles.menubtn}>
              <span className={styles.title}>کاوش کردن</span>
            </MenuButton>
            <MenuList className={styles.list}>
              <MenuItem className={styles.item}>مسافران برتر</MenuItem>
              <MenuItem className={styles.item}>داستان های سفر</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className={styles.menu}>
          <Menu>
            <MenuButton className={styles.menubtn}>
              <span className={styles.title}>سفر ها</span>
            </MenuButton>
            <MenuList className={styles.list}>
              <MenuItem className={styles.item}><Link to="/trips" >سفر های من</Link></MenuItem>
              <MenuItem className={styles.item}><Link to="/trips" >سفر جدید</Link></MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className={styles.menu}>
          <Menu>
            <MenuButton className={styles.menubtn}>
              <span className={styles.title}>نظرات</span>
            </MenuButton>
            <MenuList className={styles.list}>
              <MenuItem className={styles.item}>افزودن نظر</MenuItem>
              <MenuItem className={styles.item}>پست کردن عکس</MenuItem>
              <MenuItem className={styles.item}>اضافه کردن مکان جدید</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className={styles.menu}>
          <Menu>
            <MenuButton className={styles.menubtn}>
              <span className={styles.title}>سایر</span>
            </MenuButton>
            <MenuList className={styles.list}>
              <MenuItem className={styles.item}>سفر دریایی</MenuItem>
              <MenuItem className={styles.item}>اجاره کردن خودرو</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <Link to="/">
        <img
          className={styles.icon}
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
          alt="icon"
        />
      </Link>
    </div>
  );
}

export default Navbar;
