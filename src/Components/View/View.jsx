import React, { useEffect, useState } from 'react'
import { Container, Form,Nav, NavDropdown } from 'react-bootstrap'
import { data } from '../Service/Service'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faArrowDown, faArrowUp,faPlus,faEye } from '@fortawesome/free-solid-svg-icons'




function View() {


    let key = 0;
    const [viewData, setViewData] = useState(data("mydata") || [])
    const [search, setSearch] = useState('');
    const [originalData, setOriginalData] = useState([]);
    



    const handleDelete = (id) => {
        let record = viewData;
        let updateRecord = record.filter((data) => {
            return (
                data.id != id
            )
        })
        setViewData(updateRecord);

    };

    // useEffect(() => {
    //     let a = JSON.stringify(viewData)
    //     localStorage.setItem("mydata", (a))

    // }, [viewData])

    const navigate = useNavigate()

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        
        const filterSearch = viewData.filter((item) => {
            return item.ename.toLowerCase().includes(search.toLowerCase())
        })
        setViewData(filterSearch);
        // console.log("search", );
    }




    const handlesort = (type, key) => {
        let sortedData;
        switch (type) {

            case "esc":
                sortedData = [...viewData].sort((f, s) => {
                    return f[key].localeCompare(s[key])
                })
                break;

            case "des":
                sortedData = [...viewData].sort((f, s) => {
                    return s[key].localeCompare(f[key])
                })
                break;
        }
        setViewData(sortedData);
    }


    return (
        
        <div className='bg-dark-subtle'>
          


                <div>
                    <div className='d-flex justify-content-between mt-4 border rounded bg-dark'>
                        <div >
                            <h2 className='manage p-2 mt-2 ms-2 text-white d-flex flex-wrap justify-content-between '>
                                EMPLOYEE LIST
                            </h2>
                        </div>
                        <div className='my-auto me-3'>
                            <h2>

                            <Link to={'/'} ><FontAwesomeIcon icon={faPlus} className='text-white'/></Link>
                            </h2>
                        </div>
                    </div>

                    <Form className="d-flex width mt-5">


                        <Form.Control
                            type="search"
                            placeholder="Search For Products, Brands and More . . . . . "
                            className="me-2 bg-warning-subtle mb-2"
                            aria-label="Search"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />

                        <Button variant="outline-success" onClick={handleSearch} className='mb-2'>Search</Button>

                    </Form>
                   

                </div>
                <table border='1' width='1300' align='center' className='  table table-dark table-striped' >
                    <thead className='table-dark border border-dark '>
                        <tr>
                            <th className='border rounded'>
                                Sr.
                            </th>
                            <th className='border rounded'>
                                Emp ID

                            </th>
                            <th className='border rounded'>
                                Emp Name
                                <Button variant='none' className='text-white ms-3' onClick={() => handlesort("esc", "ename")}><FontAwesomeIcon icon={faArrowUp} /></Button>
                                <Button variant='none' className='text-white me-2' onClick={() => handlesort("des", "ename")}><FontAwesomeIcon icon={faArrowDown} /></Button>
                            </th>
                            <th className='border rounded'>
                                Emp Age
                                <Button variant='none' className='text-white ms-3' onClick={() => handlesort("esc", "eage")}><FontAwesomeIcon icon={faArrowUp} /></Button>
                                <Button variant='none' className='text-white me-2' onClick={() => handlesort("des", "eage")}><FontAwesomeIcon icon={faArrowDown} /></Button>
                            </th>
                            <th className='border rounded'>
                                Department
                                <Button variant='none' className='text-white ms-3' onClick={() => handlesort("esc", "ecat")}><FontAwesomeIcon icon={faArrowUp} /></Button>
                                <Button variant='none' className='text-white me-2' onClick={() => handlesort("des", "ecat")}><FontAwesomeIcon icon={faArrowDown} /></Button>
                            </th>
                            <th className='border rounded'>
                                Position
                                <Button variant='none' className='text-white ms-3' onClick={() => handlesort("esc", "epos")}><FontAwesomeIcon icon={faArrowUp} /></Button>
                                <Button variant='none' className='text-white me-2' onClick={() => handlesort("des", "epos")}><FontAwesomeIcon icon={faArrowDown} /></Button>
                            </th>
                            <th className='border rounded'>
                                Email
                                <Button variant='none' className='text-white ms-3' onClick={() => handlesort("esc", "email")}><FontAwesomeIcon icon={faArrowUp} /></Button>
                                <Button variant='none' className='text-white me-2' onClick={() => handlesort("des", "email")}><FontAwesomeIcon icon={faArrowDown} /></Button>
                            </th>

                            <th className='border rounded'>
                                Salary
                                <Button variant='none' className='text-white ms-3' onClick={() => handlesort("esc", "esal")}><FontAwesomeIcon icon={faArrowUp} /></Button>
                                <Button variant='none' className='text-white me-2' onClick={() => handlesort("des", "esal")}><FontAwesomeIcon icon={faArrowDown} /></Button>
                            </th>
                            <th className='border rounded'>
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewData.map((data, index) => {
                                return (
                                    <tr key={key++}>
                                        <td className='border rounded'>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td className='border rounded'>
                                            {
                                                data.id
                                            }
                                        </td>
                                        <td className='border rounded'>
                                            {
                                                data.ename
                                            }
                                        </td >
                                        <td className='border rounded'>
                                            {
                                                data.eage
                                            }
                                        </td>
                                        <td className='border rounded'>
                                            {
                                                data.ecat
                                            }
                                        </td >
                                        <td className='border rounded'>
                                            {
                                                data.epos
                                            }
                                        </td>
                                        <td className='border rounded'>
                                            {
                                                data.email
                                            }
                                        </td>
                                        <td className='border rounded'>
                                            {
                                                data.esal
                                            }
                                        </td>
                                        <td className='border rounded'>
                                            {
                                                <div className='text-center'>
                                                    <Button className='btn btn-primary rounded me-2' onClick={() => handleEdit(data.id)}><FontAwesomeIcon icon={faPenToSquare} /></Button>
                                                    <Button className='btn btn-danger rounded me-2' onClick={() => handleDelete(data.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            
        </div>
    )
}

export default View