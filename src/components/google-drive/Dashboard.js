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
<<<<<<< HEAD
import ClipLoader from "react-spinners/ClipLoader";
=======
import LoadingBar from "react-top-loading-bar";

>>>>>>> 70043265acde002d8f3f8c66fc7fedc785e8ab73

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

<<<<<<< HEAD
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
    
  return (
    <>  
     <div style={{ backgroundImage: `url(${background})` }}>   
      <PageContainer>        
        <Card  style={{ margin:"2rem",maxHeight:"100vh" ,overflow:"scroll"}}>
=======
  const ref = useRef(null);

  const handleLoadSomething = () => {
    ref.current.continuousStart();
    setTimeout(() => {
      console.log("...loading something");
      ref.current.complete();
    }, 4000);
  };
  

  return (
    <>  
     <div style={{ backgroundImage: `url(${background})` }}>
  
      <Navbar />
      <LoadingBar color="#f11946" ref={ref} />
         <PageContainer>
        <Card  style={{ margin:"2rem",maxHeight:"100vh" ,overflow:"scroll"
                        }}  >
         
>>>>>>> 70043265acde002d8f3f8c66fc7fedc785e8ab73
           <Card.Header >
            <div  className="d-flex align-items-center">
              <FolderBreadcrumbs currentFolder={folder} />
              <AddFileButton currentFolder={folder} />
              <a style={{ marginLeft: '.5rem' }} />
              <AddFolderButton currentFolder={folder} />
            </div>
<<<<<<< HEAD
           </Card.Header>
           <Card.Body >
         
           
          {childFolders.length > 0 && <h>Folder Code: <b>{folder.id}</b> <br/> </h>}
          <h><b><hr/>Folders/Files<hr/></b></h>      
            {childFolders.length > 0 && (       
              <div className="d-flex flex-wrap">              
                {childFolders.map(childFolder => (
                  <div
                    key={childFolder.id}
                    style={{ maxWidth: "250px" }}
                    className="p-2">
                    <Folder folder={childFolder} />
                  </div>
                ))}
=======
          
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
               
>>>>>>> 70043265acde002d8f3f8c66fc7fedc785e8ab73
              </div>
          )
          }
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
