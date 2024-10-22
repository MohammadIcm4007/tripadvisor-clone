import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { faIR } from "react-day-picker/locale";
import { format, getMonth, getYear, startOfMonth } from "date-fns-jalali";
import styles from "./datepicker.module.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  background,
} from "@chakra-ui/react";

export default function PUDatepicker(props) {
  const jalaliMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const jalaliFormatters = {
    formatCaption: (date) => {
      const month = getMonth(date);
      const year = getYear(date);
      return `${jalaliMonths[month]} ${year}`;
    },
    formatDay: (date) => format(date, "d", { locale: faIR }),
    formatWeekdayName: (date) => format(date, "EEEEEE", { locale: faIR }),
  };

  const today = new Date();
  const firstOfMonth = startOfMonth(today);

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button background="#fff" boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)" width={"230px"} borderRadius={"20px"} _hover={{ bg: "white"}} >{props.title}</Button>
        </PopoverTrigger>
        <PopoverContent width={"720px"} borderRadius={"20px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
          <PopoverBody>
            <DayPicker
              mode="range"
              disabled={{ before: today }}
              numberOfMonths={2}
              locale={faIR}
              dir="rtl"
              formatters={jalaliFormatters}
              fromDate={firstOfMonth}
              className={styles.datepicker}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
