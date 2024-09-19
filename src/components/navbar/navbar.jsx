import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.one}>
        <img
          className={styles.img}
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
          alt="logo"
        />
        <div className={styles.search}>
          <CiSearch className={styles.icon} />
          <input type="text" className={styles.input} placeholder="جستوجو" />
        </div>
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
                <MenuItem className={styles.item}>
                  <Link to="/trips">سفر های من</Link>
                </MenuItem>
                <MenuItem className={styles.item}>
                  <Link to="/trips">سفر جدید</Link>
                </MenuItem>
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
                <MenuItem className={styles.item}>
                  اضافه کردن مکان جدید
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      <div className={styles.two}></div>
    </div>
  );
}

export default Navbar;
