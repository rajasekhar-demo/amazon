import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Catelog = () => {

    const [ message, setMessage ] = useState("Hi Guys! - State")
    const [ categories, setCategories ] = useState([]);

    useEffect(()=>{
        axios.get('https://633adc2ce02b9b64c61951aa.mockapi.io/api/v1/categories').then((response)=>{
            console.log(response)
            setCategories(response.data)
        })
    },[])


    // useEffect(()=>{
    //     console.log(categories)
    // },[categories])



    // let someMessage = "Hi Guys! - direct var"

    // const buttonHandler = () => {
    //     someMessage = "Hello Guys!!";
    //     setMessage("Hello Guys!!")
    //     console.log("buttonHandler is triggered")
    // }

    // const dataHandler = () => {
    //     axios.get('https://633adc2ce02b9b64c61951aa.mockapi.io/api/v1/categories').then((response)=>{
    //         //console.log(response)
    //         setCategories(response.data)
    //     })
    // }

    return (
      <div>
        {/* <p>{someMessage}</p>
        <p>{message}</p> */}
        <div className="row">
            {categories.map((category) => {
            return <div className="col-md-6 col-lg-4 col-xl-3" key={category.id}>
                    <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={category.categoryImage} />
            <Card.Body>
                <Card.Title>{category.categoryName}</Card.Title>
                <Card.Text>
                {category.categoryDescription}
                </Card.Text>
                <Button variant="primary">Action</Button>
            </Card.Body>
            </Card></div>
            })}
        </div>
      </div>
    );
}

export default Catelog;