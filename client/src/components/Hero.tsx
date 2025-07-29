// Import hook useState từ React để quản lý trạng thái
import { useState } from "react";
// Import các tài nguyên (assets) và danh sách thành phố từ file cục bộ
import { assets, cityList } from "../assets/assets";
// Import motion từ framer-motion để tạo hiệu ứng động
import { motion } from "framer-motion";

// Định nghĩa component Hero
const Hero = () => {
    // State để lưu trữ địa điểm nhận xe
    const [pickupLocation, setPickupLocation] = useState("");
    // State để lưu trữ ngày nhận xe
    const [pickupDate, setPickupDate] = useState("");
    // State để lưu trữ ngày trả xe
    const [returnDate, setReturnDate] = useState("");

    // Lấy ngày hiện tại ở định dạng YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];

    // Xử lý tìm kiếm khi form được gửi
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form
        // Logic tìm kiếm sẽ được thêm vào đây
        console.log({
            pickupLocation,
            pickupDate,
            returnDate,
        });
    };

    // Render component Hero
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">
            {/* Tiêu đề chính với hiệu ứng động */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu: ẩn và dịch xuống 20px
                animate={{ opacity: 1, y: 0 }} // Trạng thái cuối: hiện và về vị trí ban đầu
                transition={{ duration: 0.8 }} // Thời gian chuyển động
                className="text-4xl md:text-5xl font-semibold"
            >
                Thuê xe hơi sang trọng
            </motion.h1>

            {/* Form tìm kiếm với hiệu ứng động */}
            <motion.form
                initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu: ẩn và dịch xuống 20px
                animate={{ opacity: 1, y: 0 }} // Trạng thái cuối: hiện và về vị trí ban đầu
                transition={{ duration: 0.8, delay: 0.2 }} // Thời gian chuyển động và độ trễ
                onSubmit={handleSearch} // Xử lý khi submit form
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
                    {/* Phần chọn địa điểm nhận xe */}
                    <div className="flex flex-col items-start gap-2">
                        <select
                            required // Bắt buộc chọn
                            value={pickupLocation} // Giá trị được chọn
                            onChange={(e) => setPickupLocation(e.target.value)} // Cập nhật state khi thay đổi
                            className="bg-transparent outline-none"
                        >
                            <option value="">Địa điểm nhận xe</option>
                            {/* Duyệt qua danh sách thành phố để tạo các option */}
                            {cityList.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <p className="px-1 text-sm text-gray-500">
                            {/* Hiển thị địa điểm đã chọn hoặc thông báo */}
                            {pickupLocation ? pickupLocation : "Vui lòng chọn địa điểm"}
                        </p>
                    </div>

                    {/* Phần chọn ngày nhận xe */}
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="pickup-date">
                            Ngày nhận xe
                        </label>
                        <input
                            type="date"
                            id="pickup-date"
                            required // Bắt buộc chọn
                            value={pickupDate} // Giá trị ngày nhận
                            min={today} // Ngày tối thiểu là ngày hiện tại
                            onChange={(e) => setPickupDate(e.target.value)} // Cập nhật state khi thay đổi
                            className="text-sm text-gray-500 bg-transparent outline-none"
                        />
                    </div>

                    {/* Phần chọn ngày trả xe */}
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="return-date">
                            Ngày trả xe
                        </label>
                        <input
                            type="date"
                            id="return-date"
                            required // Bắt buộc chọn
                            value={returnDate} // Giá trị ngày trả
                            min={pickupDate || today} // Ngày tối thiểu là ngày nhận hoặc ngày hiện tại
                            onChange={(e) => setReturnDate(e.target.value)} // Cập nhật state khi thay đổi
                            className="text-sm text-gray-500 bg-transparent outline-none"
                        />
                    </div>
                </div>

                {/* Nút tìm kiếm với hiệu ứng động */}
                <motion.button
                    whileTap={{ scale: 0.95 }} // Hiệu ứng khi nhấn
                    type="submit" // Loại nút submit form
                    className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer"
                >
                    <img
                        src={assets.search_icon}
                        alt="search"
                        className="brightness-300"
                    />
                    Tìm kiếm
                </motion.button>
            </motion.form>

            {/* Hình ảnh xe chính với hiệu ứng động */}
            <motion.img
                initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu: ẩn và dịch xuống 20px
                animate={{ opacity: 1, y: 0 }} // Trạng thái cuối: hiện và về vị trí ban đầu
                transition={{ duration: 0.8, delay: 0.4 }} // Thời gian chuyển động và độ trễ
                src={assets.main_car}
                alt="car"
                className="max-h-74"
            />
        </div>
    );
};

// Export component Hero để sử dụng ở nơi khác
export default Hero;