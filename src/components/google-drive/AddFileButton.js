import React, { useState } from "react"
import ReactDOM from "react-dom"
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAuth } from "../../contexts/AuthContext"
import { storage, database } from "../../firebase"
import { ROOT_FOLDER } from "../../hooks/useFolder"
import { v4 as uuidV4 } from "uuid"
import { ProgressBar, Toast } from "react-bootstrap"
import CloseButton from 'react-bootstrap/CloseButton';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";


export default function AddFileButton({ currentFolder }) {
  const [uploadingFiles, setUploadingFiles] = useState([])
  const [uploadtask, setUploadTask] = useState()
  const { currentUser } = useAuth()

 const handleStopUpload =(file)=>{
  
  uploadtask.cancel();

    setUploadingFiles(prevUploadingFiles => {
      return prevUploadingFiles.filter(uploadFile => {
        return uploadFile.id !== file.id
      })
    })

    
  }

  function handleUpload(e) {
    const file = e.target.files[0]
    if (currentFolder == null || file == null) return

    const id = uuidV4()
    setUploadingFiles(prevUploadingFiles => [
      ...prevUploadingFiles,
      { id: id, name: file.name, progress: 0, error: false },
    ])
    const filePath = currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.join("/")}/${file.name}`
        : `${currentFolder.path.join("/")}/${currentFolder.name}/${file.name}`

    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file)
setUploadTask(uploadTask)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes
        setUploadingFiles(prevUploadingFiles => {
          return prevUploadingFiles.map(uploadFile => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress }
            }

            return uploadFile
          })
        })
      },
      () => {
        setUploadingFiles(prevUploadingFiles => {
          return prevUploadingFiles.map(uploadFile => {
            if (uploadFile.id === id) {
              return { ...uploadFile, error: true }
            }
            return uploadFile
          })
        })
      },
      () => {
        setUploadingFiles(prevUploadingFiles => {
          return prevUploadingFiles.filter(uploadFile => {
            return uploadFile.id !== id
          })
        })

        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          database.files
            .where("name", "==", file.name)
            .where("userId", "==", currentUser.uid)
            .where("folderId", "==", currentFolder.id)
            .where("parentFolder", "==", currentFolder.name)
            .get()
            .then(existingFiles => {
              const existingFile = existingFiles.docs[0]
              if (existingFile) {
                existingFile.ref.update({ url: url })
              } else {
                database.files.add({
                  url: url,
                  name: file.name,
                  createdAt: database.getCurrentTimestamp(),
                  folderId: currentFolder.id,
                  userId: currentUser.uid,
                  parentFolder: currentFolder.name,      
                })
              }
            })
        })
      }
    )
  }

  return (
    <>
      <label className="btn btn-outline-success btn-lg m-0 mr-2">
        <FontAwesomeIcon icon={faFileUpload} />
        <input
          type="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
        />
      </label>
      {uploadingFiles.length > 0 &&
        ReactDOM.createPortal(
          <div
          className="card"
            style={{
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              maxWidth: "250px",
              height:"400px",
              overflow:"scroll",
              marginTop:"100px",
            }}
          >
            {uploadingFiles.map(file => (
              <Toast
                key={file.id}
                onClose={() => {
                  setUploadingFiles(prevUploadingFiles => {
                    return prevUploadingFiles.filter(uploadFile => {
                      return uploadFile.id !== file.id
                    })
                  })
                }}
              >
                <Toast.Header
                  closeButton={false}
                  className="text-truncate w-100 d-block"
                >
                  <div >
                    {file.name} 
                  </div>
                   <CloseButton show onClick={()=>{handleStopUpload(file)}}/>
                </Toast.Header>
                <Toast.Body>
                  <ProgressBar
                    animated={!file.error}
                    variant={file.error ? "danger" : "primary"}
                    now={file.error ? 100 : file.progress * 100}
                    label={
                      file.error
                        ? "Error"
                        : `${Math.round(file.progress * 100)}%`
                    }
                  />
                </Toast.Body>
              </Toast>
            ))}
          </div>,
          document.body
        )}
    </>
  )
}
