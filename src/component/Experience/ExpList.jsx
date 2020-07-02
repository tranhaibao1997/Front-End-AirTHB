import React from "react";
import ExpCard from "./ExpCard";
import { Container } from "react-bootstrap";
import Axios from "axios";
import Slider from "react-slick";

function ExpList(props) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let [expList, setExpList] = React.useState(null);
  React.useEffect(() => {
    getExpList();
  }, []);

  async function getExpList() {
    try {
      let res = await Axios.get(
        "https://airthb-group6.herokuapp.com/experiences"
      );
      setExpList(res.data.data);
    } catch (err) {}
  }
  return (
    <>
      {expList ? (
        <Container>
          <div className="slider-card-list">
            <Slider {...settings}>
            
                {expList.map((exp) => {
                  return <ExpCard exp={exp}></ExpCard>;
                })}
             
            </Slider>
          </div>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}

export default ExpList;
