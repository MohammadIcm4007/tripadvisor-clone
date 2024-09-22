import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.one}>
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
        <div className={styles.search}>
          <input type="text" className={styles.input} placeholder="جستوجو" />
          <CiSearch className={styles.icon} />
        </div>
        <img
          className={styles.img}
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
          alt="logo"
        />
      </div>
      <div className={styles.two}>
        <div className={styles.tab}>هتل</div>
        <div className={styles.tab}>کار</div>
        <div className={styles.tab}>رستوران</div>
        <div className={styles.tab}>پرواز</div>
        <div className={styles.tab}>خانه ی اجاره ای</div>
        <div className={styles.tab}>سفر دریایی</div>
        <div className={styles.tab}>اجاره ی خودرو</div>
      </div>
    </div>
  );
}

export default Navbar;
