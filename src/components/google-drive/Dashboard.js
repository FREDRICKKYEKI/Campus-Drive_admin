import React, { useRef }  from "react"
import { Container } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import Navbar from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"
import { Card } from "react-bootstrap"
import background from "../../media/library1.jpg"
import PageContainer from "./PageContainer"
import { useState } from "react"


export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)


  return (
    <>  
     <div style={{ backgroundImage: `url(${background})` }}>
  
      <Navbar />
      
         <PageContainer>
        <Card  style={{ marginRight: '2rem',
                        marginLeft: '2rem', 
                        marginTop: '2rem',
                        marginBottom: '2rem'
                        }}  >
         
           <Card.Header>
              <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <a style={{ marginLeft: '.5rem' }} />
          <AddFolderButton currentFolder={folder} />
        </div>
       
           </Card.Header>
           <Card.Body onChange={handleLoadSomething}>
         
           
           {childFolders.length > 0 && <h>Folder Code: <b>{folder.id}</b> <br/> </h>}
           <h><b><hr/>Folders/Files<hr/></b></h>
        {childFolders.length > 0 && (
          
          <div className="d-flex flex-wrap"> 
                
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
               
              </div>
            ))}
          </div>
        ) }
        {childFolders.length > 0 && childFiles.length > 0 && <h><hr/><b>Files</b></h>}
        
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div key={childFile.id} style={{ maxWidth: "250px" }} className="p-2">
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
           </Card.Body>
          
    
      </Card>
      </PageContainer>
      </div>
      
    </>
  )
}
