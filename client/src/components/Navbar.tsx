// Import các hook cần thiết từ React
import { useState, useEffect } from "react";
// Import các tài nguyên (assets) và liên kết menu từ file cục bộ
import { assets, menuLinks } from "../assets/assets";
// Import các thành phần điều hướng từ react-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";

// Định nghĩa component Navbar
const Navbar = () => {
    // State để quản lý việc hiển thị/ẩn menu di động
    const [showMenu, setShowMenu] = useState(false);
    // Hook để điều hướng giữa các trang
    const navigate = useNavigate();
    // Hook để lấy thông tin vị trí hiện tại của URL
    const location = useLocation();

    // State để quản lý việc ẩn/hiện Navbar
    const [hideNavbar, setHideNavbar] = useState(false);

    // useEffect để ẩn Navbar khi đường dẫn bắt đầu bằng "/owner"
    useEffect(() => {
        if (location.pathname.startsWith("/owner")) {
            setHideNavbar(true);
        } else {
            setHideNavbar(false);
        }
    }, [location]); // Chạy lại khi đối tượng location thay đổi


    // Nếu hideNavbar là true, không render Navbar
    if (hideNavbar) {
        return null;
    }

    // Render Navbar
    return (
        <div
            // Các lớp CSS để định dạng Navbar
            className='flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all bg-light'
        >
            {/* Logo liên kết về trang chủ */}
            <Link to={"/"}>
                <img src={assets.logo} alt="logo" className="h-8" />
            </Link>

            {/* Menu điều hướng chính */}
            <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 bg-light ${showMenu ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
                {/* Duyệt qua các liên kết menu và tạo Link */}
                {menuLinks.map((item) => (
                    <Link to={item.path} key={item.name}>
                        {item.name}
                    </Link>
                ))}
                {/* Ô tìm kiếm xe (chỉ hiển thị trên màn hình lớn) */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
                    <input type="text" placeholder="Tìm kiếm xe" className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" />
                    <img src={assets.search_icon} alt="search" />
                </div>
                {/* Nút "Đăng xe" và "Đăng nhập" */}
                <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
                    <button onClick={() => navigate('/owner')} className="cursor-pointer">Đăng xe</button>
                    <button onClick={() => navigate('/login')} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg">Đăng nhập</button>
                </div>
            </div>

            {/* Nút menu cho thiết bị di động */}
            <button onClick={() => setShowMenu(prev => !prev)} className="sm:hidden cursor-pointer" aria-label="Thực đơn">
                <img src={showMenu ? assets.close_icon : assets.menu_icon} alt="menu" />
            </button>
        </div>
    );
};

// Export component Navbar để sử dụng ở nơi khác
export default Navbar;