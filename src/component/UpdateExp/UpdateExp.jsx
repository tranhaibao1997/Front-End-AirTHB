import React, {useState, useEffect} from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

export default function UpdateExp() {

  let {expId} = useParams()
  let [form, setForm]= useState({
    title:"",
    tags: [],
    duration: "",
    country:"",
    price: "",
    description: "",
    items: [],
    age: "",
    groupS: ""
  })

  let {title,tags,duration,country,price,description,items, age,groupS, pictureURL} = form

  // let [title, setTitle] = useState("");
  // let [country, setCountry] = useState("");
  // let [description, setDescription] = useState("");
  // let [price, setPrice] = useState(0);
  // let [duration, setDuration] = useState(0);
  // let [groupS, setGroupS] = useState(0);
  // let [age, setAge] = useState(0);
  // let [pictureURL, setPictureURL] = useState([]);
  // let [tags, setTags] = useState([]);
  // let [items, setItems] = useState([]);
  
  const getSingleEx = async() => {
    let url = `https://airthb-group6.herokuapp.com/experiences/${expId}`
    let data = await fetch(url)
    let result = await data.json()
    setForm({
      title: result.data.title,
      tags: result.data.tags.tag,
      duration: result.data.duration,
      country: result.data.country,
      price: result.data.price,
      description: result.data.description,
      items: result.data.items,
      age: result.data.age,
      groupS: result.data.groupS,
    })
    console.log(result.data)
  }

  let updateSingleExp = async() => {
    
    let body=JSON.stringify(form)
    Axios.patch(`https://airthb-group6.herokuapp.com/experiences/${expId}`,body).then((res) => console.log(res))
    .catch((err) => console.log(err));
  }
  
  console.log(tags.map(elm => elm.tag),"dfasuidgsiuadsauigduiasgduasgdfyu")

  useEffect(()=>{
    getSingleEx()
  },[])
  

  return (
    <>
      <Form className="FormCreate" onSubmit={updateSingleExp}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={title}
              onChange={(e) =>  setForm({...form, title: e.target.value})}
              type="text"
              placeholder="Enter Experience's title"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              value={country}
              onChange={(e) => setForm({...form, country: e.target.value})}
              type="text"
              placeholder="Enter your city and country"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price (per Hour)</Form.Label>
            <Form.Control
              name="price"
              value={price}
              onChange={(e) => setForm({...form, price: e.target.value})}
              type="number"
              placeholder="Enter the price"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDuration">
            <Form.Label>Duration (per hour)</Form.Label>
            <Form.Control
              name="duration"
              value={duration}
              onChange={(e) => setForm({...form, duration: e.target.value})}
              type="number"
              placeholder="Enter the time needed for your Experience"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            type="text"
            placeholder="Enter a description of your Experience"
          />
        </Form.Group>

        <Form.Group controlId="formGridItems">
          <Form.Label>
            Items to bring (maximum: 10, please separate different items by
            semi-colon or comma)
          </Form.Label>
          <Form.Control
            name="items"
            value={items}
            onChange={(e) => setForm({...form, items: e.target.value})}
            type="text"
            placeholder="Enter the necessary items for participants to bring"
          />
        </Form.Group>

        <Form.Group controlId="formGridPicture">
          <Form.Label>
            Pictures (maximum: 5, please input URL separated by semi-colon or
            comma)
          </Form.Label>
          <Form.Control
            name="pictureURL"
            value={pictureURL}
            onChange={(e) => setForm({...form, pictureURL: e.target.value})}
            type="text"
            placeholder="Enter the pictures for your Experience"
          />
        </Form.Group>
  
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTags">
            <Form.Label>
              Tags (please separate different tags by semi-colon or comma){" "}
            </Form.Label>
            <Form.Control
              name="tags"
              // value={tags ?tags.map(elm => elm.tag).split("") :""}
              onChange={(e) => setForm({...form, tags: e.target.value})}
              type="text"
              placeholder="Enter your tags"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridGroupS">
            <Form.Label>Group Size</Form.Label>
            <Form.Control
              name="groupS"
              value={groupS}
              onChange={(e) => setForm({...form, groupS: e.target.value})}
              type="number"
              placeholder="Enter the maximum number of participants"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              value={age}
              onChange={(e) => setForm({...form, age: e.target.value})}
              type="number"
              placeholder="Enter the minimum age of participants"
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
