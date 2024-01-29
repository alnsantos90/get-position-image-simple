import React, { useState } from 'react';

import ImageReader from './assets/end.png'
import RectangleCanvas from './components/imgReader';
import CustomSelect from './components/CustomSelect';


interface PositionBoxProps {
  x: number
  y: number
}

interface DataInputProps {
  input: string,
  x: number,
  y: number,
  width: number,
  height: number
}

const App: React.FC = () => {

  const [positionBox, setPositionBox] = useState<PositionBoxProps | null>(null)
  const [positionWidth, setPositionWidth] = useState(0)
  const [positionHeight, setPositionHeight] = useState(0)
  const [selectedValue, setSelectedValue] = useState('');
  const [data, setData] = useState<DataInputProps[]>([]);


  function handleGetPositionXandY({ x, y }: { x: number, y: number }) {
    setPositionBox({ x, y })
  }

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  function handleFinishedSelection() {
    if(!positionBox) return null
    setData(state => [...state, {
      input: selectedValue,
      x: positionBox?.x,
      y: positionBox?.y,
      width: positionWidth,
      height: positionHeight
    }])
    setSelectedValue("")
  }

  console.log(positionBox)
  console.log('Select', selectedValue)
  console.log('Data =>', data)
  return (
    <>
      <img src={ImageReader} className='w-full h-full' draggable={false} />
      {selectedValue && (
        <RectangleCanvas onFinishedSelection={handleFinishedSelection} getPosition={handleGetPositionXandY} x={0} y={0} width={positionWidth} height={positionHeight} />
      )}
      <div className='flex gap-4 p-8 py-12 items-center min-w-[420px] h-20 fixed bottom-5 left-[50%] translate-x-[-50%] bg-zinc-300 backdrop-blur-md rounded-full'>
        <div className='flex items-center w-full gap-2'>
          <CustomSelect onSelectChange={handleSelectChange} />
          {
            selectedValue && (
              <>
                <div className='flex flex-col justify-center items-center'>
                  <label htmlFor="width">Width</label>
                  <input type="text" name='WIDTH' className='w-14' value={positionWidth} onChange={(e) => setPositionWidth(Number(e.target.value))} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <label htmlFor="width">Height</label>
                  <input type="text" name='HEIGHT' className='w-14' value={positionHeight} onChange={(e) => setPositionHeight(Number(e.target.value))} />
                </div>

              </>
            )
          }
        </div>
      </div>
    </>

  );
};

export default App;