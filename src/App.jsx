import { useState } from "react";
import './App.css';

export default function App() {
  const[Level,setLevel] = useState(0);
  const [imageSize, setImageSize] = useState(150); // ขนาดเริ่มต้นหมูเด้ง
  const [MoodengImage, setMoodengImage] = useState('https://s.isanook.com/ns/0/ui/1908/9543026/458380836_820746753569166_2667674431053253690_n.jpg'); // รูปภาพฮิปโปเริ่มต้น

  const feedMoodeng = (points) => {
    const newLevel = Level + points;
    setLevel(newLevel);
    setImageSize(imageSize + points); // เพิ่มขนาดของหมูเด้ง
    if (newLevel > 100) {
      setMoodengImage('https://www.sgethai.com/wp-content/uploads/2022/06/17042024-khamoo-002.webp'); // รูปขาหมู
    }
  };

  return (
    <div className="Game">
      <h1>Moodeng Game</h1>
      <h2>Level: {Level}</h2>
      <img
        src={MoodengImage}
        alt="หมูเด้ง"
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
      />
      
      
      <div className="Foods">
      <div className="food-item">
      <img src="https://dinosaofood.co/wp-content/uploads/2022/02/%E0%B9%81%E0%B8%95%E0%B8%87%E0%B9%82%E0%B8%A1.png" 
      alt="แตงโม" 
      className="food-image"/>
      <button onClick={() => feedMoodeng(5)}>ป้อนแตงโม</button>
      </div>

      <div className="food-item">
      <img src="https://orgboxthailand.com/wp-content/uploads/2018/02/pumpkin.png" 
      alt="ฟักทอง" 
      className="food-image"/>
      <button onClick={() => feedMoodeng(10)}>ป้อนฟักทอง</button>
      </div>

      <div className="food-item">
      <img src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-grass-field-png-png-image_10202598.png" 
      alt="หญ้า"
      className="food-image"/>
      <button onClick={() => feedMoodeng(15)}>ป้อนหญ้า</button>
      </div>

      
      </div>
      <div className="Instructions">
        <h3>How To Play</h3>
        <p>
          คลิกที่ปุ่มด้านล่างเพื่อป้อนอาหารให้กับหมูเด้ง! แต่ละประเภทอาหารจะเพิ่มระดับที่แตกต่างกัน และทำให้หมูเด้งใหญ่ขึ้น! เมื่อระดับถึง 100 หรือมากกว่านั้น รูปภาพของหมูเด้งจะเปลี่ยนไป<br />
          <strong>แตงโม</strong> : คลิกปุ่ม "ป้อนแตงโม" เพื่อเพิ่มระดับ 5 ระดับ<br/>
          <strong>ฟักทอง</strong> : คลิกปุ่ม "ป้อนฟักทอง" เพื่อเพิ่มระดับ 10 ระดับ<br/>
          <strong>หญ้า</strong> : คลิกปุ่ม "ป้อนหญ้า" เพื่อเพิ่มระดับ 15 ระดับ

        </p>
      </div>
    </div>
  );
}

 