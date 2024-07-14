import { FaCaretRight } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Allmyaccounts.css";

function CardvisaPage() {
  const navigate = useNavigate();

  const changePage = () => {
    navigate("/Detail");
  };

  return (
    <>
      <div className="card-visa" onClick={changePage}>
        <RiVisaLine size={45} color="white" />
        <span className="balance-text">Availabble Balance</span>
        <div className="row-chip">
          <div className="chip-card"></div>
          <div className="colunm-text-money">
          <div className="money-icon">$</div>
            <div className="text-money">7,392.00</div>
          </div>
        </div>
        <div className="row-id-card">
          <div>42012</div>
          <div>3049</div>
          <div>2800</div>
          <div>9815</div>
        </div>
        <div className="row-expire">
          <div className="expire-cvc">
            <div className="expire-text">EXPIRE</div>
            <div>
              <FaCaretRight size={6} className="FaCaretRight" />
            </div>
            <div className="expire-text-day">02/22</div>
          </div>
          <div className="expire-cvc">
            <div className="cvc-text">CVC CODE</div>
            <div>
              <FaCaretRight size={6} className="FaCaretRight" />
            </div>
            <div className="cvc-text-code">230</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardvisaPage;
