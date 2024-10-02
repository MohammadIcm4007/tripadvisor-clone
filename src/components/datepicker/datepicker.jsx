import { useState } from "react";
import { Box, FormControl } from "@chakra-ui/react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const MyPersianDatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box direction="rtl">
      <FormControl>
        <DatePicker
          placeholder={props.placeholder}
          calendar={persian}
          locale={persian_fa}
          onChange={handleDateChange}
          style={{
            direction: "rtl",
            width: "150px",
            height: "42px",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            border: "none",
            margin:"0px 5px"
          }}
          calendarPosition="bottom-right"
        />
      </FormControl>
    </Box>
  );
};

export default MyPersianDatePicker;
