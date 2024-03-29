import React from "react"
import { Container } from "react-bootstrap"

export default function PageContainer({ children }) {
  return (
    <Container
      className="d-flex  justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" >
        {children}
      </div>
    </Container>
  )
}
