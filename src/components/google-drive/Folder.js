import{ React, useState} from "react"
import { Link } from "react-router-dom"
import { Button, Card, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder, faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons"
import { Modal, Nav } from "react-bootstrap"
import { database } from "../../firebase"
import { storage } from "../../firebase"
 

export default function Folder({ folder }) {

const [modalShow, setModalShow] = useState(false);
const [editModalShow, setShow] = useState(false);
const [newName, setName] = useState(folder.name)


function handleDelete(){
    setModalShow(false)
    database.folders.doc(folder.id).delete()
    .then(()=>{
      console.log("Folder deleted successfully")
    }).catch((err)=>{
      console.log("An error occured while deleting document")
      console.log("Error:" + err.message)
    })
   database.files.where("folderId", "==", folder.id).delete()
   .then(()=>{
    console.log("Files deleted successfully")
  }).catch((err)=>{
    console.log("An error occured while deleting document")
    console.log("Error:" + err.message)
  })
  var folderRef = storage.ref(folder.name)
  folderRef.delete().then(()=>{
    console.log("Folder in Storage deleted successfully")
  }).catch((err)=>{
    console.log("An error occured while deleting Storage Folder")
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
          Delete Folder
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Make sure you <b><i>DELETE</i></b> all files in this folder.</h4>
        <h4>Proceed?</h4>
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
            <FontAwesomeIcon icon={faTrashCan} onClick={() => setModalShow(true)}/>
          </Nav.Item>
        </Nav>
        
      </Card.Header>
      <Card.Body>
        <Button
          style={{textAlign:"start"}}
          to={{
            pathname: `/folder/${folder.id}`,
            state: { folder: folder },
          }}
          variant="outline-dark"
          className="text-truncate w-100"
          as={Link}
          > 
          <FontAwesomeIcon icon={faFolder} className="mr-2" />
          <a style={{ marginLeft: '.5rem' }} />
          {folder.name}
        </Button>
      </Card.Body>
    </Card>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
</>
    
  )
}
