import React, { useState } from 'react';
import './mainpage.css' ;
import Objviewer from '../objectviewer/objviewer';


function Mainpage() {

  const [selectedModel , setModelValue] = useState("bmw.glb");
  const handleModelChange=(event)=>{
    setModelValue(event.target.value);
  }

  const[speedvalue, setspeedvalue ] = useState("1");
  const handlespeedchange=(event)=>{
    setspeedvalue(event.target.value);
  }


  const[bgcolor, setbgcolor ] = useState("grey");
  const handlebgcolorchange =(event)=>{
    setbgcolor(event.target.value);
  }

  const [myscene , setscene ]= useState("city");
  const handlescenechange=(event)=>{
    setscene(event.target.value);
  }


  return (
    <div className='main'>
        
      <div className='upper'>
       
      <Objviewer  
      show_glb={selectedModel}
      setspeed={speedvalue}
      bgcolor={bgcolor}
      showscene={myscene}
  
      
      />
      <div className='optionmenu'>
              <label  for="speedvalue">set speed:</label>
              <select className='width100'  name='speedvalue' onChange={handlespeedchange} >
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
              </select>
              
              <label  for="bgcolor">Background color:</label>
              <select className='width100'  name='bgcolor' onChange={handlebgcolorchange}>
                  <option value="758694">Grey</option>
                  <option value="50B498">Green</option>
                  <option value="E6B9A6">Cream</option>
                  <option value="304463">Mid night blue</option>
                  <option value="016A70">Teal</option>
                  <option value="AF8F6F">Brown</option>
              </select>

              <label  for="scene">Scene:</label>
              <select className='width100'  name='scene' onChange={handlescenechange}>
                  <option value="apartment">apartment</option>
                  <option value="city">city</option>
                  <option value="dawn">dawn</option>
                  <option value="forest">forest</option>
                  <option value="lobby">lobby</option>
                  <option value="park">park</option>
                  <option value="sunset">sunset</option>
                  <option value="warehouse">warehouse</option>
                  
              </select>
          </div>
      </div>

      <div className='lower'>
        <h4 className='lower-heading white'>
        Select your model here
        </h4>
      
        <div className='select-model white'>
            <label for="cars">Choose a car:</label>
              <select name="cars" id="cars" onChange={handleModelChange}>
                  <option value="bmw.glb">BMW</option>
                  <option value="porsche.glb">Porsche</option>
                  <option value="mclaren.glb">MClaren</option>
                  <option value="maybach.glb">Mercedes</option>
                  <option value="gwagon.glb">Gwagon</option>
                  <option value="lambo.glb">lambo</option>
                  <option value="bugatti.glb">bugatti</option>
                  <option value="nato.glb">Nato shelter</option>
               
                 
              </select>
        </div>
      </div>
    </div>
  )
}

export default Mainpage;