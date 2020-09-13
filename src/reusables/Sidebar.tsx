import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  width: 30vh;
  height: 100vh;
  border: 2px solid green;
  resize: both;
  overflow: auto; 

`

export default function Sidebar() {
  return (
    <Container>Hello, Yurim!</Container>
  )
}