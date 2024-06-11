import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import { Alert } from 'bootstrap';
import generateUniqueId from 'generate-unique-id';
import { data } from '../Service/Service';
import { useNavigate, useParams } from 'react-router-dom';


function Edit({ onSubmit }) {
    let key = 0;
    const { id } = useParams();
    
   
    const [inputState, setInputState] = useState({
        ename: '',
        eage: '',
        ecat: '',
        epos: '',
        email: '',
        id:id,
    });
    const [viewData, setViewData] = useState(data("mydata"))

    const navigate = useNavigate();

    const [isSubmit,setIsSubmit]=useState(false);

    const handleInput = (e) => {

        setInputState({
            ...inputState,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

      if(inputState.id){
                setViewData(viewData.map((record)=>{
                    if(record.id===inputState.id){
                        return {...record,...inputState}
                    }else{
                        return record
                    }
      }))
      }else{

          const obj = {
              ...inputState,
              id: generateUniqueId({
                  length: 4,
                  useLetters: false
              }),
              
  
          }
          setViewData([...viewData, obj])
      }
        setIsSubmit(true);
    }

        useEffect(() => {
            let a = JSON.stringify(viewData)
            localStorage.setItem("mydata", (a))
        }, [viewData])

        useEffect(()=>{
            const setInputData=viewData.find((product)=>{
                return product.id==id
            })
            setInputState(setInputData);
        },[viewData,id])

        useEffect(()=>{
            if(isSubmit){
                navigate('/view')
            }
        },[isSubmit,navigate]);
    
  return (
    <>
         <Container >
            <h1 className='py-5 text-center'>
                PRODUCT DATA
            </h1>
            <Form className='border p-5 border-5 rounded bg-dark' onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Product Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your product" name='ename' value={inputState.ename} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" name='eage' value={inputState.eage} onChange={handleInput} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Catagory</Form.Label>
                        <FloatingLabel name='ecat' onChange={handleInput}>
                            <Form.Select aria-label="Floating label select example" name='ecat' onChange={handleInput} value={inputState.ecat}>
                                <option>Choose Product catagory</option>
                                <option>Fashion</option>
                                <option>Cosmetics</option>
                                <option>Gadjets</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Company</Form.Label>
                        <Form.Control type="name" placeholder="Manufacturer name" name='epos' value={inputState.epos} onChange={handleInput} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className='text-light'>Address</Form.Label>
                    <Form.Control type='text' placeholder="1234 Main St" name='email' value={inputState.email} onChange={handleInput} />
                </Form.Group>

                
                <Form.Control type="name" name='id' value={inputState.id} hidden/>


                <Button variant="primary" type="submit" className='text-center mt-4 btn btn-success'>
                    Submit
                </Button>
            </Form>
           
        </Container>
    </>
  )
}

export default Edit