import Bigcard from "../../components/big-card/bigcard";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Title from "../../components/title/title";
import Baner from "./components/baner/baner";
import Searchbar from "./components/searchbar/searchbar";
import Slider from "./components/slider/slider";
import styles from "./home.module.scss";
import Navbar from "./components/home-navbar/navbar";

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Searchbar />
      <Baner src="https://img.freepik.com/premium-photo/backpacker-hiking-trip-he-wears-high-quality-backpack-which-is-focus-scene-create-stunning-image-cinematic-ambient_967785-44945.jpg" />
      <Card
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/96/24/f4/caption.jpg?w=200&h=200&s=1&cx=2799&cy=1636&chk=v1_c20895c02e9e3fa05e5a"
        name="pictrue"
        title="ده تا از بهترین شهر های دیدنی ایران"
        text="بهترین شهر های ایران از نظر مجله ی ما در سال 2024"
        textbtn="مطالعه کنید"
      />
      <Title
        title="محبوب ترین جاذبه های امسال"
        text="محبوب ترین جاذبه های توریستی ایران از نظر توریست ها در سال 2024"
      />
      <Slider
        src={[
          "https://safarmarket.com/blog/data/uploaded_files/79a11042be656a8674810d04.jpg",
          "https://www.alibaba.ir/mag/wp-content/uploads/2021/07/01-4.jpg",
          "https://safarmarket.com/blog/data/uploaded_files/3fb987be1fa2bcba7dd8bafe.jpg",
          "https://safarmarket.com/blog/data/uploaded_files/511d8335fca502a604d01df1.jpg",
          "https://safarmarket.com/blog/data/uploaded_files/59c29f1ec9df6c0432ff0b7f.jpg",
          "https://safarmarket.com/blog/data/uploaded_files/12ece90e49b968548c670f58.jpg",
          "https://safarmarket.com/blog/data/uploaded_files/1863e1dc48131abefbb415c3.jpg",
          "https://safarmarket.com/blog/data/uploaded_files/923cb6922bd8bb0c1ba53cc2.jpg",
        ]}
        title={[
          "تبریز",
          "کرمانشاه",
          "اردبیل",
          "اصفهان",
          "زنجان",
          "ایلام",
          "بوشهر",
          "تهران",
        ]}
      />
      <Bigcard
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/5b/9c/caption.jpg?w=600&h=-1&s=1"
        title="با هم رفتن راحت تر از همیشه است"
        text="سفر زمانی بهتر است که بتوانید آن را با بهترین دوست خود به اشتراک بگذارید. تمام نکات، راهنماها و ابزارهایی را که برای سفر رویایی با سگ خود نیاز دارید، بیابید."
        textbtn="مطالعه کنید"
      />
      <Footer />
    </div>
  );
}

export default Home;
