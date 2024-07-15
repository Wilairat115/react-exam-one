import { AiOutlineShopping } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import { MdOutlineCalendarToday, MdOutlineKeyboardArrowDown, MdRestaurant } from "react-icons/md";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Allmyaccounts.css";
import "./Detailvisa.css";
function DetailvisaPage() {
  const navigate = useNavigate();

  const changePage = () => {
    navigate("/");
  };

  return (
    <div className="container-app-two">
      <div className="container-app-header">
        <div className="header">
          <RiBarChartHorizontalLine onClick={changePage} size={20} color="white" />
          <MdOutlineCalendarToday size={20} color="white" />
        </div>
        <div className="title-visa">
          <div>
            <span className="ava-balance-text">Availabble Balance</span>
          </div>
          <div className="colunm-text-money">
            <div className="icon-money">$</div>
            <div className="text-money-two">7,392.00</div>
          </div>
          <p className="text-small">Jane 9, 2018</p>
        </div>
        <div className="box-transparent">
          <div className="container-id-card">
            <div className="row-id-card-two">
              <div>42012</div>
              <div>3049</div>
              <div>2800</div>
              <div>9815</div>
            </div>
            <div className="row-expire-two">
              <div className="expire-cvc">
                <div className="expire-text-two">EXPIRE</div>
                <div>
                  <FaCaretRight size={6} className="FaCaretRight-two" />
                </div>
                <div className="expire-text-day-two">02/22</div>
              </div>
              <div className="expire-cvc">
                <div className="cvc-text-two">CVC CODE</div>
                <div>
                  <FaCaretRight size={6} className="FaCaretRight-two" />
                </div>
                <div className="cvc-text-code-two">230</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-white">
        <div style={{ marginTop: "-40px"}}>
          <div className="income-expense-two">
            <div className="income-expense-column">
              <div className="income-text">Income</div>
              <div className="income-money">
                <div>
                  <HiArrowNarrowDown
                    size={18}
                    className="HiArrowNarrowUp-icon"
                  />
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
        </div>
        <div className="position-Detail">
          <div className="Detail-title-two">
            <div>Detail of movements</div>
            <div className="weekly-row">
              <div className="weekly-text">Weekly</div>
            <MdOutlineKeyboardArrowDown size={21} style={{marginTop:"2px"}}/> 
            </div>
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
              <p className="title-small">June 7, 2018</p>
            </div>
          </div>
          <div className="Menu-income-money">
            <div>$800</div>
            <div className="Detail-menu-arrow">
              <IoArrowDownOutline size={17}/>
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
              <p className="title-small">June 6, 2018</p>
            </div>
          </div>
          <div className="Menu-expense-money">
            <div>$50</div>
            <div className="Detail-menu-arrow">
              <IoArrowUpOutline size={17}/>
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
              <p className="title-small">June 1, 2018</p>
            </div>
          </div>
          <div className="Menu-income-money">
            <div>$4,200</div>
            <div className="Detail-menu-arrow">
              <IoArrowDownOutline size={17}/>
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
              <p className="title-small">June 1, 2018</p>
            </div>
          </div>
          <div className="Menu-expense-money">
            <div>$37</div>
            <div className="Detail-menu-arrow">
              <IoArrowUpOutline size={17}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default DetailvisaPage;
