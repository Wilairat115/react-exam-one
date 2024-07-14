import { AiOutlineShopping } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import {
  MdOutlineCalendarToday,
  MdRestaurant
} from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Allmyaccounts.css";
import CardvisaPage from "./Cardvisa";

function AllmyaccountsPage() {
  const navigate = useNavigate();

  const changePage = () => {
    navigate("/Detail");
  };

  return (
    <div className="container-app">
      <div className="container-app-body">
        <div className="header">
          <p className="title">All my accounts</p>
          <RiBarChartFill onClick={changePage} size={20} className="RiBarChartFill"/>
        </div>
        <p className="title-small">Jane 10, 2018</p>
        <div className="container-card-visa">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={true}
          >
            <SwiperSlide><CardvisaPage/></SwiperSlide>
            <SwiperSlide><CardvisaPage/></SwiperSlide>
            <SwiperSlide><CardvisaPage/></SwiperSlide>
          </Swiper>
        </div>
        <div className="income-expense">
          <div className="income-expense-column">
            <div className="income-text">Income</div>
            <div className="income-money">
              <div>
                <HiArrowNarrowDown size={18} className="HiArrowNarrowUp-icon" />
              </div>
              <div>$9,302.00</div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="income-expense-column">
            <div className="expense-text">Expense</div>
            <div className="expense-money">
              <div>
                <HiArrowNarrowUp size={18} className="HiArrowNarrowUp-icon" />
              </div>
              <div>$2,790.00</div>
            </div>
          </div>
        </div>
        <div className="Detail-title">
          <div>Detail of movements</div>
          <MdOutlineCalendarToday size={20} />
        </div>
        <div className="Detail-menu">
          <div className="Detail-menu-text">
            <div className="Detail-menu-icon">
              <MdRestaurant size={30} style={{ marginRight: "10px" }} />
            </div>
            <div>
              <div className="Menu-text-title">Restaurant Manhattan</div>
              <p className="title-small">June 10, 2018</p>
            </div>
          </div>
          <div className="Menu-expense-money">
            <div>$170</div>
            <div className="Detail-menu-arrow">
              <IoArrowUpOutline size={17} />
            </div>
          </div>
        </div>
        <div className="Detail-menu">
          <div className="Detail-menu-text">
            <div className="Detail-menu-icon">
              <GiReceiveMoney size={30} style={{ marginRight: "10px" }} />
            </div>
            <div>
              <div className="Menu-text-title">Salary Deposit</div>
              <p className="title-small">June 1, 2018</p>
            </div>
          </div>
          <div className="Menu-income-money">
            <div>$1,200</div>
            <div className="Detail-menu-arrow">
              <IoArrowDownOutline size={17} />
            </div>
          </div>
        </div>
        <div className="Detail-menu">
          <div className="Detail-menu-text">
            <div className="Detail-menu-icon">
              <AiOutlineShopping size={30} style={{ marginRight: "10px" }} />
            </div>
            <div>
              <div className="Menu-text-title">Central Market</div>
              <p className="title-small">May 28, 2018</p>
            </div>
          </div>
          <div className="Menu-expense-money">
            <div>$50</div>
            <div className="Detail-menu-arrow">
              <IoArrowUpOutline size={17} />
            </div>
          </div>
        </div>
        <div className="Detail-menu">
          <div className="Detail-menu-text">
            <div className="Detail-menu-icon">
              <GrMoney size={30} style={{ marginRight: "10px" }} />
            </div>
            <div>
              <div className="Menu-text-title">Salary Deposit</div>
              <p className="title-small">May 1, 2018</p>
            </div>
          </div>
          <div className="Menu-income-money">
            <div>$1,200</div>
            <div className="Detail-menu-arrow">
              <IoArrowDownOutline size={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllmyaccountsPage;
