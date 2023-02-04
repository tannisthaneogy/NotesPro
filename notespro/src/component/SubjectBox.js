import React,{useState} from 'react'
import "./SubjectBox.css"
import Notes from "./Notes"
import Modal from 'react-bootstrap/Modal';
import './subject.css'
import './navbar.css'
import Form from 'react-bootstrap/Form';
import Purplebtn from '../images/Purple btn.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function NoteBox() {
    const[arr,setArr]=useState([]);
    const [show, setShow] = useState(false);
    const [subj,setSubj]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
        <div className="main-box">
            <div className="subject-container">
                <button className='purple-btn'onClick={handleShow}>Add Subject Name</button>
                <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title><div className='navhead'><div class='icn'>
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="11.687" y="-1" width="17.9423" height="17.9423" rx="3" transform="rotate(45 11.687 -1)" fill="#AEE86D"/>
        </svg>
        </div>
        <span>Notespro</span></div></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label className=''>Enter here</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-submit' type="submit" onClick={handleClose}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>
            </div>
            <div className="second-container">
                <div className="notes-container">
                    {
                        arr.map( e =>
                            <div>{ e }</div>
                    )}
                </div>
                <div className="addbtn-container">
                    
                    <img onClick={()=>setArr([...arr,<Notes/>])} src={Purplebtn} className="plus-btn"></img>
                </div>
            </div>
        </div>
  )
}

export default NoteBox