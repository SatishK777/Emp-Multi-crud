import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import { Alert } from 'bootstrap';
import generateUniqueId from 'generate-unique-id';
import { data } from '../Service/Service';
import { Link, useNavigate } from 'react-router-dom';
import { category } from '../Service/category';


function Create({ onSubmit }) {
    let key = 0;

    const [inputState, setInputState] = useState({
        ename: '',
        eage: '',
        ecat: '',
        epos: '',
        email: '',
        esal: '',
        // id:'',
    });
    const [viewData, setViewData] = useState(data("mydata"))

    const navigate = useNavigate();

    const [isSubmit, setIsSubmit] = useState(false);
    

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

    useEffect(() => {
        if (isSubmit) {
            navigate('/view')
        }
    }, [isSubmit, navigate]);



    return (
        <div className='bg-dark-subtle'>
            <Container className='p-5'>
                <h1 className='p-5 text-center'>
                    Employee Data
                </h1>

                <Form className='border p-5 border-5 rounded bg-dark' onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className='text-light'>Emp Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your product" name='ename' value={inputState.ename} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label className='text-light'>Emp Age</Form.Label>
                            <Form.Control type="number" placeholder="Enter Age" name='eage' value={inputState.eage} onChange={handleInput} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className='text-light'>Department</Form.Label>
                            <FloatingLabel name='ecat' onChange={handleInput}>
                                <Form.Select aria-label="Floating label select example" name='ecat' onChange={handleInput} value={inputState.ecat}>
                                    <option>Choose Department catagory</option>
                                    <option>Specialist</option>
                                    <option>Project Manager</option>
                                    <option>Software Designer</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label className='text-light'>Position</Form.Label>
                            <Form.Control type="name" placeholder="Enter Position" name='epos' value={inputState.epos} onChange={handleInput} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">

                        <Form.Group  as={Col}>
                            <Form.Label className='text-light'>Email</Form.Label>
                            <Form.Control type='Email' placeholder="Enter Your Email" name='email' value={inputState.email} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group  as={Col}>
                            <Form.Label className='text-light'>Salary</Form.Label>
                            <Form.Control type='number' placeholder="Enter Salary" name='esal' value={inputState.esal} onChange={handleInput} />
                        </Form.Group>
                    </Row>


                    <Form.Control type="name" name='id' value={inputState.id} hidden />


                    <Button variant="primary" type="submit" className='text-center mt-4 btn btn-success'>
                        Submit
                    </Button>
                </Form>

            </Container>
        </div>
    )
}

export default Create