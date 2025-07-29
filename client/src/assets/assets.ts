// Các câu lệnh import cho các tài sản
import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import addIcon from "./addIcon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import star_icon from "./star_icon.svg";
import check_icon from "./check_icon.svg";
import tick_icon from "./tick_icon.svg";
import delete_icon from "./delete_icon.svg";
import eye_icon from "./eye_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import filter_icon from "./filter_icon.svg";
import edit_icon from "./edit_icon.svg";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import location_icon_colored from "./location_icon_colored.svg";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";
import main_car from "./main_car.png";
import banner_car_image from "./banner_car_image.png";
import user_profile from "./user_profile.png";
import upload_icon from "./upload_icon.svg";
import car_image1 from "./car_image1.png";
import car_image2 from "./car_image2.png";
import car_image3 from "./car_image3.png";
import car_image4 from "./car_image4.png";

// Các định nghĩa kiểu dữ liệu
export interface MenuLink { // Giao diện cho một liên kết trong menu
    name: string; // Tên hiển thị của liên kết
    path: string; // Đường dẫn của liên kết
}

export interface OwnerMenuLink { // Giao diện cho một liên kết trong menu của chủ sở hữu
    name: string; // Tên hiển thị của liên kết
    path: string; // Đường dẫn của liên kết
    icon: string; // Icon mặc định
    coloredIcon: string; // Icon khi được chọn (có màu)
}

export type UserRole = "owner" | "user"; // Kiểu vai trò của người dùng

export interface User { // Giao diện cho đối tượng người dùng
    _id: string; // ID duy nhất của người dùng
    name: string; // Tên người dùng
    email: string; // Email người dùng
    role: UserRole; // Vai trò của người dùng (chủ sở hữu hoặc người dùng)
    image: string; // URL ảnh đại diện
}

export type CarCategory = "SUV" | "Sedan" | "Hatchback" | "Coupe" | "Convertible"; // Kiểu loại xe
export type FuelType = "Hybrid" | "Dầu Diesel" | "Xăng" | "Điện"; // Kiểu loại nhiên liệu
export type Transmission = "Số sàn" | "Tự động" | "Bán tự động"; // Kiểu hộp số

export interface Car { // Giao diện cho đối tượng xe
    _id: string; // ID duy nhất của xe
    owner: string; // ID của chủ sở hữu
    brand: string; // Hãng xe
    model: string; // Mẫu xe
    image: string; // URL hình ảnh xe
    year: number; // Năm sản xuất
    category: CarCategory; // Loại xe
    seating_capacity: number; // Số chỗ ngồi
    fuel_type: FuelType; // Loại nhiên liệu
    transmission: Transmission; // Loại hộp số
    pricePerDay: number; // Giá thuê mỗi ngày
    location: string; // Vị trí của xe
    description: string; // Mô tả chi tiết
    isAvaliable: boolean; // Trạng thái sẵn có
    createdAt: string; // Thời gian tạo
}

export type BookingStatus = "đã xác nhận" | "đang chờ xử lý" | "đã hủy" | "đã hoàn thành"; // Kiểu trạng thái đặt xe

export interface Booking { // Giao diện cho đối tượng đặt xe
    _id: string; // ID duy nhất của việc đặt xe
    car: Car; // Đối tượng xe được đặt
    user: string; // ID của người dùng đặt xe
    owner: string; // ID của chủ sở hữu xe
    pickupDate: string; // Ngày nhận xe
    returnDate: string; // Ngày trả xe
    status: BookingStatus; // Trạng thái của việc đặt xe
    price: number; // Tổng giá
    createdAt: string; // Thời gian tạo
}

export interface DashboardData { // Giao diện cho dữ liệu trên bảng điều khiển của chủ sở hữu
    totalCars: number; // Tổng số xe
    totalBookings: number; // Tổng số lượt đặt xe
    pendingBookings: number; // Số lượt đặt xe đang chờ xử lý
    completedBookings: number; // Số lượt đặt xe đã hoàn thành
    recentBookings: Booking[]; // Các lượt đặt xe gần đây
    monthlyRevenue: number; // Doanh thu hàng tháng
}

export interface Assets { // Giao diện tập hợp tất cả các tài sản (hình ảnh, icon)
    logo: string;
    gmail_logo: string;
    facebook_logo: string;
    instagram_logo: string;
    twitter_logo: string;
    menu_icon: string;
    search_icon: string;
    close_icon: string;
    users_icon: string;
    edit_icon: string;
    car_icon: string;
    location_icon: string;
    fuel_icon: string;
    addIcon: string;
    carIcon: string;
    carIconColored: string;
    dashboardIcon: string;
    dashboardIconColored: string;
    addIconColored: string;
    listIcon: string;
    listIconColored: string;
    cautionIconColored: string;
    calendar_icon_colored: string;
    location_icon_colored: string;
    arrow_icon: string;
    star_icon: string;
    check_icon: string;
    tick_icon: string;
    delete_icon: string;
    eye_icon: string;
    eye_close_icon: string;
    filter_icon: string;
    testimonial_image_1: string;
    testimonial_image_2: string;
    main_car: string;
    banner_car_image: string;
    car_image1: string;
    upload_icon: string;
    user_profile: string;
    car_image2: string;
    car_image3: string;
    car_image4: string;
}

// Các hằng số
export const cityList: string[] = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng']; // Danh sách các thành phố

// Đối tượng chứa tất cả các tài sản đã được import để dễ dàng truy cập
export const assets: Assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4
};

// Danh sách các liên kết trong menu cho người dùng thông thường
export const menuLinks: MenuLink[] = [
    { name: "Trang chủ", path: "/" },
    { name: "Các loại xe", path: "/cars" },
    { name: "Lịch đặt của tôi", path: "/my-bookings" },
];

// Danh sách các liên kết trong menu dành cho chủ sở hữu xe
export const ownerMenuLinks: OwnerMenuLink[] = [
    { name: "Bảng điều khiển", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Thêm xe", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Quản lý xe", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Quản lý lịch đặt", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
];

// Dữ liệu người dùng mẫu cho mục đích thử nghiệm và phát triển
export const dummyUserData: User = {
    "_id": "6847f7cab3d8daecdb517095",
    "name": "Kilo Code",
    "email": "admin@example.com",
    "role": "owner",
    "image": user_profile,
};

// Dữ liệu xe mẫu cho mục đích thử nghiệm và phát triển
export const dummyCarData: Car[] = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "X5",
        "image": car_image1,
        "year": 2006,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Bán tự động",
        "pricePerDay": 300,
        "location": "Hà Nội",
        "description": "BMW X5 là một chiếc SUV hạng sang cỡ trung do BMW sản xuất. X5 ra mắt lần đầu tiên vào năm 1999 và là chiếc SUV đầu tiên do BMW sản xuất.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Toyota",
        "model": "Corolla",
        "image": car_image2,
        "year": 2021,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Dầu Diesel",
        "transmission": "Số sàn",
        "pricePerDay": 130,
        "location": "Đà Nẵng",
        "description": "Toyota Corolla là một chiếc sedan hạng sang cỡ trung do Toyota sản xuất. Corolla ra mắt lần đầu vào năm 2008 và là chiếc sedan đầu tiên do Toyota sản xuất.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Jeep ",
        "model": "Wrangler",
        "image": car_image3,
        "year": 2023,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Tự động",
        "pricePerDay": 200,
        "location": "TP. Hồ Chí Minh",
        "description": "Jeep Wrangler là một chiếc SUV hạng sang cỡ trung do Jeep sản xuất. Wrangler ra mắt lần đầu vào năm 2003 và là chiếc SUV đầu tiên do Jeep sản xuất.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ford",
        "model": "Neo 6",
        "image": car_image4,
        "year": 2022,
        "category": "Sedan",
        "seating_capacity": 2,
        "fuel_type": "Dầu Diesel",
        "transmission": "Bán tự động",
        "pricePerDay": 209,
        "location": "Hải Phòng",
        "description": "Đây là một chiếc sedan hạng sang cỡ trung do Toyota sản xuất. Corolla ra mắt lần đầu vào năm 2008 và là chiếc sedan đầu tiên do Toyota sản xuất.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    }
];

// Dữ liệu đặt xe mẫu cho mục đích thử nghiệm và phát triển
export const dummyMyBookingsData: Booking[] = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "đã xác nhận",
        "price": 440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "đang chờ xử lý",
        "price": 130,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "đang chờ xử lý",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "đã xác nhận",
        "price": 440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
];

// Dữ liệu bảng điều khiển mẫu cho mục đích thử nghiệm và phát triển
export const dummyDashboardData: DashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
};