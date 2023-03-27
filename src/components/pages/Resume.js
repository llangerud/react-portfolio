import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

function Resume() {
  const onButtonClick = () => {
    // using the guide from https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
    fetch('resume.pdf').then(response => {
        response.obj().then(obj => {
            const fileURL = window.URL.createObjectURL(obj);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })
}



  return (
    <Container >

      <br></br>
      <br></br>
      <Button onClick={onButtonClick}> download resume</Button>
       <br></br><br></br>
      <h1>Experience with:</h1>
     
      
      
      <br></br>
      <h4>JavaScript</h4>
      <h4>CSS</h4> 
      <h4>HTML</h4>
      <h4>MySQL</h4>   
      <h4>Sequelize</h4>   
      <h4>GitHub</h4>
      <h4>Git Bash</h4>
      <h4>MongoDB</h4>
      <h4>Mongoose</h4>
      <h4>Express</h4>
      <h4>React</h4> 
      <h4>Node</h4> 
      <h4>Handlebars</h4>
      <h4>jQuery</h4>
      <h4>Bootstrap</h4>
      <h4>Bulma</h4>
</Container>
  );
}
export default Resume;