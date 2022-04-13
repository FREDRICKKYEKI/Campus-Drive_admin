import {React, useState} from "react"
import { Card, Nav, Modal, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faTrashCan} from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"
import { storage } from "../../firebase"

export default function File({ file}) {
 ;
  const [modalShow, setModalShow] = useState(false);
 

    function handleDelete(){
      setModalShow(false)
      var desertRef = storage.refFromURL(file.url)
      desertRef.delete().then(()=>{
        console.log("Document deleted successfully")
      }).catch((err)=>{
        console.log("An error occured while deleting document")
        console.log("Error:" + err.message)
      })
      database.files.doc(file.id).delete().then(()=>{
        console.log("Document deleted successfully")
      }).catch((err)=>{
        console.log("An error occured while deleting document")
        console.log("Error:" + err.message)
      })
  }
  
  function MyVerticallyCenteredModal(props) {
    return (
      
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete File
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="danger" onClick={()=> handleDelete()}>Delete</Button>
        </Modal.Footer>
      </Modal>
    ); 
  }
  
  return (
    <>
       <Card style={{ width: '15rem' }}>
      <Card.Header>
      <Nav className="container-fluid">
          <Nav.Item className="ms-auto">
            <FontAwesomeIcon icon={faTrashCan} onClick={() => setModalShow(true)} />
          </Nav.Item>
        </Nav>
      </Card.Header>
     
      <Card.Footer>
    <a
      href={file.url}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFile} className="mr-2" />
      <a style={{ marginLeft: '.5rem' }} />
      {file.name}
    </a>
   
      </Card.Footer>
    </Card>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
   
  )
}
