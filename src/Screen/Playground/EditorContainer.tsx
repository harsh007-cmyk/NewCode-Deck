import React from 'react'
import styled from 'styled-components'
import CodeEditior from './CodeEditior'
const StyledEditorContainer=styled.div`
    display:flex;
    flex-direction;
`
const UpperToolbar=styled.div`
    background:white;
    height:4rem;

    display:flex;
    align-items:center;
    justify-content:space-between;
    <padding:0 className="2re"></padding:0>
`
const Title=styled.div`
    dipslay:flex;
    align-items:center;
    gap:1rem;
    h3{
        font-size:1.3rem;
    }
    button{
        background:transparent:
        font-size:1.3rem;
        
    }

`
const Lowertoolbar=styled.div`
    background:white;
    height:4rem;

    displayflex;
    align-itemsf:center;
    justify-content:space-between;
    padding:0 2rem;
    button{
        background:tranparent;
        outline:0;
        border:0;
        font:size:1.15rem;
         display:flex;
         align-items:center;
         gap:0.75rem;
         svg{
            font-size:1.4rem;
         }
    }
`
const ButtonGroup=styled.div`
    display:flex;
    align-items:center;
    gap:2.5rem;
`
const RunCode=styled.button`
    padding:0.8rem 2rem;
    background-color:#0097d7 !important;
    color:white;
    font-weight:700;
    border-radius:2rem;
`
function EditorContainer() {
  return (
    <StyledEditorContainer>
        <UpperToolbar>
            <div>
                <h3>
                    Stack 
                </h3>
            </div>
        </UpperToolbar>
        <CodeEditior/>
            <Lowertoolbar>
            </Lowertoolbar>

    </StyledEditorContainer>
  )
}

export default EditorContainer