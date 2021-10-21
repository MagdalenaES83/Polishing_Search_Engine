import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  listLength: state.list.fav.length
});

const mapDispatchToProps = dispatch => ({
  
})

const Listindicator = ({ history, listLength }) =>
 (
  <div className="ml-auto m-3 ">
    <Button variant="warning" onClick={() => history.push("/list")}>
      <FaShoppingCart />
      <span  className="p-3 ">{listLength}</span>
    </Button>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Listindicator));
