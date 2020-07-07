import React from "react";
import ExpCard from "./ExpCard";
import { Container } from "react-bootstrap";
import Axios from "axios";
import Slider from "react-slick";
import { StoreContext } from "../../ThemeContext";

function ExpList(props) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // let [expList, setExpList] = React.useState(null);
  let { expList, dataLength, currentPage, expListURL } = React.useContext(
    StoreContext
  );
  React.useEffect(() => {
    getExpList();
  }, []);

  async function getExpList() {
    try {
      let res = await Axios.get(expListURL);
      expList[1](res.data.data);
      dataLength[1](res.data.dataLength);
    } catch (err) {}
  }
  return (
    <>
      {expList[0] ? (
        <Container>
          <ul className="slider-card-list col-md-12 d-flex flex-wrap justify-content-space-around">
            {expList[0].map((exp) => {
              return <ExpCard exp={exp}></ExpCard>;
            })}
          </ul>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}

export default ExpList;
