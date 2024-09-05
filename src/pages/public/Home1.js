import React, { useEffect } from 'react';
import TableTest from '../../assets/TableTest.jpg';
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

const Home1 = () => {

  useEffect(() => {
    const canvas = document.getElementById('chessboard');
    const ctx = canvas.getContext('2d');
    const cellSize = 54;
    let selectedPiece = null;
    // Vẽ bàn cờ và đặt hình ảnh
    const pieces = [
      { image: new Image(), x: 1 * cellSize - 25, y: 4 * cellSize - 25, width: 50, height: 50, name: 'TotDo', src: TotDo },
      { image: new Image(), x: 3 * cellSize - 25, y: 4 * cellSize - 25, width: 50, height: 50, name: 'TotDo', src: TotDo },
      { image: new Image(), x: 5 * cellSize - 25, y: 4 * cellSize - 25, width: 50, height: 50, name: 'TotDo', src: TotDo },
      { image: new Image(), x: 7 * cellSize - 25, y: 4 * cellSize - 25, width: 50, height: 50, name: 'TotDo', src: TotDo },
      { image: new Image(), x: 9 * cellSize - 25, y: 4 * cellSize - 25, width: 50, height: 50, name: 'TotDo', src: TotDo },
      { image: new Image(), x: 2 * cellSize - 25, y: 3 * cellSize - 25, width: 50, height: 50, name: 'PhaoDo', src: PhaoDo },
      { image: new Image(), x: 8 * cellSize - 25, y: 3 * cellSize - 25, width: 50, height: 50, name: 'PhaoDo', src: PhaoDo },
      { image: new Image(), x: 1 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'XeDo', src: XeDo },
      { image: new Image(), x: 9 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'XeDo', src: XeDo },
      { image: new Image(), x: 2 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'MaDo', src: MaDo },
      { image: new Image(), x: 8 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'MaDo', src: MaDo },
      { image: new Image(), x: 3 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'TuongDo', src: TuongDo },
      { image: new Image(), x: 7 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'TuongDo', src: TuongDo },
      { image: new Image(), x: 4 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'SiDo', src: SiDo },
      { image: new Image(), x: 6 * cellSize - 25, y: 1 * cellSize - 25, width: 50, height: 50, name: 'SiDo', src: SiDo },
      { image: new Image(), x: 5 * cellSize - 25, y: 1 * cellSize - 25, width: 53, height: 53, name: 'VuaDo', src: VuaDo },
      { image: new Image(), x: 1 * cellSize - 25, y: 7 * cellSize - 25, width: 50, height: 50, name: 'TotXanh', src: TotXanh },
      { image: new Image(), x: 3 * cellSize - 25, y: 7 * cellSize - 25, width: 50, height: 50, name: 'TotXanh', src: TotXanh },
      { image: new Image(), x: 5 * cellSize - 25, y: 7 * cellSize - 25, width: 50, height: 50, name: 'TotXanh', src: TotXanh },
      { image: new Image(), x: 7 * cellSize - 25, y: 7 * cellSize - 25, width: 50, height: 50, name: 'TotXanh', src: TotXanh },
      { image: new Image(), x: 9 * cellSize - 25, y: 7 * cellSize - 25, width: 50, height: 50, name: 'TotXanh', src: TotXanh },
      { image: new Image(), x: 2 * cellSize - 25, y: 8 * cellSize - 25, width: 50, height: 50, name: 'Phaoxanh', src: Phaoxanh },
      { image: new Image(), x: 8 * cellSize - 25, y: 8 * cellSize - 25, width: 50, height: 50, name: 'Phaoxanh', src: Phaoxanh },
      { image: new Image(), x: 1 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'XeXanh', src: XeXanh },
      { image: new Image(), x: 9 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'XeXanh', src: XeXanh },
      { image: new Image(), x: 2 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'MaXanh', src: MaXanh },
      { image: new Image(), x: 8 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'MaXanh', src: MaXanh },
      { image: new Image(), x: 3 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'TuongXanh', src: TuongXanh },
      { image: new Image(), x: 7 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'TuongXanh', src: TuongXanh },
      { image: new Image(), x: 4 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'SiXanh', src: SiXanh },
      { image: new Image(), x: 6 * cellSize - 25, y: 10 * cellSize - 25, width: 50, height: 50, name: 'SiXanh', src: SiXanh },
      { image: new Image(), x: 5 * cellSize - 25, y: 10 * cellSize - 25, width: 53, height: 53, name: 'VuaXanh', src: VuaXanh },
    ];
    
    pieces.forEach(piece => {
      piece.image.src = piece.src;
    });

    const drawChessboard = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#deb887';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;

      for (let i = 0; i < 9; i++) {
        ctx.beginPath();
        ctx.moveTo(cellSize + i * cellSize, cellSize);
        ctx.lineTo(cellSize + i * cellSize, height - cellSize - 5);
        ctx.stroke();
      }

      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(cellSize, cellSize + i * cellSize);
        ctx.lineTo(width - cellSize, cellSize + i * cellSize);
        ctx.stroke();
      }

      ctx.fillStyle = '#deb887';
      ctx.fillRect(cellSize, 5 * cellSize - 1, width - 2 * cellSize, cellSize + 2);

      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(cellSize, cellSize + i * cellSize);
        ctx.lineTo(width - cellSize, cellSize + i * cellSize);
        ctx.stroke();
      }

      drawPalace();
      drawCorners();
      drawChessPieces();
    };

    const drawPalace = () => {
      const cellSize = 54;

      ctx.beginPath();
      ctx.moveTo(4 * cellSize, cellSize);
      ctx.lineTo(6 * cellSize, 3 * cellSize);
      ctx.moveTo(6 * cellSize, cellSize);
      ctx.lineTo(4 * cellSize, 3 * cellSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(4 * cellSize, 8 * cellSize);
      ctx.lineTo(6 * cellSize, 10 * cellSize);
      ctx.moveTo(6 * cellSize, 8 * cellSize);
      ctx.lineTo(4 * cellSize, 10 * cellSize);
      ctx.stroke();
    };

    const drawCorners = () => {
      const markerSize = 12;

      for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
          const x = i * cellSize;
          const y = j * cellSize;
          drawMarker(x, y, markerSize, i, j);
        }
      }
    };

    const drawMarker = (x, y, length, i, j) => {
      ctx.beginPath();
  
      if ((j === 4 || j === 7) && i === 1) {
        ctx.moveTo(x + length, y - 5);
        ctx.lineTo(x + 5, y - 5);
        ctx.lineTo(x + 5, y - length);

        ctx.moveTo(x + length, y + 5);
        ctx.lineTo(x + 5, y + 5);
        ctx.lineTo(x + 5, y + length);

        // Đặt hình ảnh
      } else if ((j === 4 || j === 7) && i === 9) {
        ctx.moveTo(x - length, y - 5);
        ctx.lineTo(x - 5, y - 5);
        ctx.lineTo(x - 5, y - length);
        
        ctx.moveTo(x - length, y + 5);
        ctx.lineTo(x - 5, y + 5);
        ctx.lineTo(x - 5, y + length);

      } else if (((j === 4 || j === 7) && (i > 1 && i % 2 !== 0)) || ((j === 3 || j === 8) && (i === 2 || i === 8))) {
        ctx.moveTo(x - length, y - 5);
        ctx.lineTo(x - 5, y - 5);
        ctx.lineTo(x - 5, y - length);
        
        ctx.moveTo(x - length, y + 5);
        ctx.lineTo(x - 5, y + 5);
        ctx.lineTo(x - 5, y + length);

        ctx.moveTo(x + length, y + 5);
        ctx.lineTo(x + 5, y + 5);
        ctx.lineTo(x + 5, y + length);
          
        ctx.moveTo(x + length, y - 5);
        ctx.lineTo(x + 5, y - 5);
        ctx.lineTo(x + 5, y - length);
      }
      
      ctx.stroke();
    };

    const drawChessPieces = () => {
      pieces.forEach(piece => {
        ctx.drawImage(piece.image, piece.x, piece.y, piece.width, piece.height);
      });
    };

    const drawSquareAroundPiece = (piece) => {
      // Vẽ hình vuông rỗng xung quanh quân cờ
      ctx.strokeStyle = 'red'; // Màu viền hình vuông
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.rect(piece.x - 5, piece.y - 5, piece.width + 10, piece.height + 10);
      ctx.stroke();
    };

    const onImagesLoaded = () => {
      drawChessboard();
    };

    const imagePromises = pieces.map(piece => {
      return new Promise(resolve => {
        piece.image.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(onImagesLoaded);

    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      let clickedPiece = null;
      pieces.forEach(piece => {
        if (
          x >= piece.x && x <= piece.x + piece.width &&
          y >= piece.y && y <= piece.y + piece.height
        ) {
          clickedPiece = piece; 
        }
      });

      if (clickedPiece) {
        drawChessboard();
        drawChessPieces();
        if (selectedPiece !== clickedPiece) {
          drawSquareAroundPiece(clickedPiece);
          selectedPiece = clickedPiece;
        } else {
          selectedPiece = null;
        }
      }else{
        drawChessboard();
        drawChessPieces();
        selectedPiece = null;
      }
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      let isOverPiece = false;
      pieces.forEach(piece => {
        if (
          x >= piece.x && x <= piece.x + piece.width &&
          y >= piece.y && y <= piece.y + piece.height
        ) {
          isOverPiece = true; // Đặt cờ hiệu để thay đổi con trỏ chuột
        }
      });

      if (isOverPiece) {
        canvas.style.cursor = 'pointer'; // Thay đổi con trỏ thành biểu tượng click
      } else {
        canvas.style.cursor = 'default'; // Trở về con trỏ mặc định
      }
    };

    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <div className='bg-white flex items-center justify-center w-[70%] min-h-screen'>
      <div className='relative w-[540px] h-[600px]'>
        
        {/* Thêm canvas để vẽ bàn cờ */}
        <canvas id="chessboard" width="540" height="600" className='absolute top-0 left-0' style={{ border: '1px solid black' }}></canvas>
      </div>
    </div>
  );
};

export default Home1;