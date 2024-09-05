import React, { useEffect, useState } from 'react'
import Table from '../../assets/table.png'
import TotDo from '../../assets/tot.png'
import TotXanh from '../../assets/tot-xanh.png'
import PhaoDo from '../../assets/phao-do.png'
import Phaoxanh from '../../assets/phao-xanh.png'
import XeDo from '../../assets/xe-do.png'
import XeXanh from '../../assets/xe-xanh.png'
import MaDo from '../../assets/ma-do.png'
import MaXanh from '../../assets/ma-xanh.png'
import TuongDo from '../../assets/tuong-do.png'
import TuongXanh from '../../assets/tuong-xanh.png'
import SiDo from '../../assets/si-do.png'
import SiXanh from '../../assets/si-xanh.png'
import VuaDo from '../../assets/vua-do.png'
import VuaXanh from '../../assets/vua-xanh.png'
import PickChess from '../../assets/pick.png'

const Home = () => {

  const [pickChess, setPickChess] = useState(null)

  return (
    <div className='bg-white flex items-center justify-center w-[70%] min-h-screen'>
      <div className='relative'>
        <img src={Table} alt='image1' className='h-[700px]'/>
        <img 
        src={TotXanh} 
        id='1' 
        alt='Tot' 
        className={`${pickChess === '1' ? 'absolute transform top-[29%] left-[46.6%] w-[49px] border-[2px] border-black' : 'absolute transform top-[29%] left-[46.6%] w-[49px]'}`} 
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={TotXanh} 
        id='2' 
        alt='Tot' 
        className={`${pickChess === '2' ? 'absolute transform top-[29%] left-[65.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[29%] left-[65.5%] w-[49px]'}`} 
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img src={TotXanh} 
        id='3' 
        alt='Tot' 
        className={`${pickChess === '3' ? 'absolute transform top-[29%] left-[83.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[29%] left-[83.5%] w-[49px]'}`} 
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={TotXanh} 
        id='4' 
        alt='Tot' 
        className={`${pickChess === '4' ? 'absolute transform top-[29%] left-[28.3%] w-[49px] border-[2px] border-black' : 'absolute transform top-[29%] left-[28.3%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={TotXanh} 
        id='5' 
        alt='Tot'
        className={`${pickChess === '5' ? 'absolute transform top-[29%] left-[9.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[29%] left-[9.5%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={Phaoxanh} 
        id='6' 
        alt='Tot' 
        className={`${pickChess === '6' ? 'absolute transform top-[20%] left-[74.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[20%] left-[74.5%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={Phaoxanh} 
        id='7'
        alt='Tot' 
        className={`${pickChess === '7' ? 'absolute transform top-[20%] left-[18.7%] w-[49px] border-[2px] border-black' : 'absolute transform top-[20%] left-[18.7%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={XeXanh} 
        id='8'
        alt='Tot' 
        className={`${pickChess === '8' ? 'absolute transform top-[1.5%] left-[83.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[83.5%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={XeXanh} 
        id='9'
        alt='Tot' 
        className={`${pickChess === '9' ? 'absolute transform top-[1.5%] left-[9.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[9.5%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={MaXanh} 
        id='10'
        alt='Tot' 
        className={`${pickChess === '10' ? 'absolute transform top-[1.5%] left-[74.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[74.5%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={MaXanh} 
        id='11'
        alt='Tot' 
        className={`${pickChess === '11' ? 'absolute transform top-[1.5%] left-[18.5%] w-[49px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[18.5%] w-[49px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={TuongXanh} 
        id='12'
        alt='Tot' 
        className={`${pickChess === '12' ? 'absolute transform top-[1.5%] left-[65.5%] w-[51px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[65.5%] w-[51px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={TuongXanh} 
        id='13'
        alt='Tot' 
        className={`${pickChess === '13' ? 'absolute transform top-[1.5%] left-[28%] w-[51px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[28%] w-[51px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={SiXanh} 
        id='14'
        alt='Tot' 
        className={`${pickChess === '14' ? 'absolute transform top-[1.5%] left-[56%] w-[50px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[56%] w-[50px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={SiXanh} 
        id='15'
        alt='Tot' 
        className={`${pickChess === '15' ? 'absolute transform top-[1.5%] left-[37%] w-[50px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[37%] w-[50px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img 
        src={VuaXanh} 
        id='16'
        alt='Tot' 
        className={`${pickChess === '16' ? 'absolute transform top-[1.5%] left-[46%] w-[53px] border-[2px] border-black' : 'absolute transform top-[1.5%] left-[46%] w-[53px]'}`}
        onClick={(e) => setPickChess(e.target.id)}
        />
        <img src={TotDo} alt='Tot' className='absolute transform top-[57.5%] left-[46.6%] w-[50px]'/>
        <img src={TotDo} alt='Tot' className='absolute transform top-[57.5%] left-[65.5%] w-[50px]'/>
        <img src={TotDo} alt='Tot' className='absolute transform top-[57.5%] left-[83.5%] w-[50px]'/>
        <img src={TotDo} alt='Tot' className='absolute transform top-[57.5%] left-[28.3%] w-[50px]'/>
        <img src={TotDo} alt='Tot' className='absolute transform top-[57.5%] left-[9.5%] w-[50px]'/>
        <img src={PhaoDo} alt='Tot' className='absolute transform top-[67%] left-[74.5%] w-[49px]'/>
        <img src={PhaoDo} alt='Tot' className='absolute transform top-[67%] left-[18.7%] w-[49px]'/>
        <img src={XeDo} alt='Tot' className='absolute transform top-[85%] left-[83.5%] w-[49px]'/>
        <img src={XeDo} alt='Tot' className='absolute transform top-[85%] left-[9.5%] w-[49px]'/>
        <img src={MaDo} alt='Tot' className='absolute transform top-[85%] left-[74.5%] w-[49px]'/>
        <img src={MaDo} alt='Tot' className='absolute transform top-[85%] left-[18.5%] w-[49px]'/>
        <img src={TuongDo} alt='Tot' className='absolute transform top-[85%] left-[65.5%] w-[49px]'/>
        <img src={TuongDo} alt='Tot' className='absolute transform top-[85%] left-[28%] w-[49px]'/>
        <img src={SiDo} alt='Tot' className='absolute transform top-[85%] left-[56%] w-[50px]'/>
        <img src={SiDo} alt='Tot' className='absolute transform top-[85%] left-[37%] w-[50px]'/>
        <img src={VuaDo} alt='Tot' className='absolute transform top-[85%] left-[46%] w-[53px]'/>
        <img src={PickChess} alt='Tot' className='absolute transform top-[85%] left-[9.5%] w-[80px]'/>
      </div>
    </div>
  )
}

export default Home