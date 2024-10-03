import Navbar from "../../components/navbar/navbar";
import styles from "./trips.module.scss";
import Footer from "../../components/footer/footer";
import Notrips from "./components/no-trips/no-trips";
import Title from "../../components/title/title";
import Images from "./components/images/images";
import Card from "../../components/card/card";
import Newtrips from "./components/new-trips/newtrips";

function Trips() {
  return (
    <div className={styles.page}>
      <Card
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/96/24/f4/caption.jpg?w=200&h=200&s=1&cx=2799&cy=1636&chk=v1_c20895c02e9e3fa05e5a"
        name="pictrue"
        title="ده تا از بهترین شهر های دیدنی ایران"
        text="بهترین شهر های ایران از نظر مجله ی ما در سال 2024"
        textbtn="مطالعه کنید"
      />
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <Notrips />
      <div className={styles.newtrips}>
        <img className={styles.img} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/5b/9c/caption.jpg?w=600&h=-1&s=1" alt="pictrue" />
          <Newtrips />
      </div>
      <Title title="بهترین مکان ها مخصوص شما" text=" " />
      <Images />
      <Footer />
    </div>
  );
}

export default Trips;
