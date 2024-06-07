import React, { useState } from 'react';
import "./Slider.css"

interface SliderPrompt {
    Img: string;
    Photo1: string;
    Photo2?: string;
    Photo3?: string;
    Photo4?: string;
}

const Slider: React.FC<SliderPrompt> = ({ Img, Photo1, Photo2, Photo3, Photo4 }) => {

  const [mainImage, setMainImage] = useState(0);

  const [isFullscreen, setIsFullscreen] = useState(false); 

  const images = [
    {Img: Img},
    {Photo1:Photo1},
    {Photo2:Photo2},
    {Photo3:Photo3},
    {Photo4:Photo4},
  ];

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen); 
  };

  const handleClick = (index:number) => {
    setMainImage(index);
  };

  return (
    <div className='slider'>
      <div className="thumbnail-images-list">
        {images.map((image, index) => (
          <img className='thumbnail-images'
            key={index}
            onClick={() => handleClick(index)}
            src={image.Photo1 || image.Photo2 || image.Photo3 || image.Photo4 || image.Img}
          />
        ))}
      </div>
      <div className="main-image">
        <img 
            className={`image ${isFullscreen ? 'fullscreen' : ''}`} src={images[mainImage].Img || images[mainImage].Photo1 || images[mainImage].Photo2
            || images[mainImage].Photo3 || images[mainImage].Photo4 } 
            alt="Main" 
            onClick={handleFullscreen} />
      </div>

      {/* {isFullscreen && (
          <div className="fullscreen-container"> 
            <img 
              className="fullscreen-image" 
              src={images[mainImage].Img || images[mainImage].Photo1 || images[mainImage].Photo2 || images[mainImage].Photo3 || images[mainImage].Photo4} 
              alt="Main"
            />
            <button onClick={handleFullscreen} className="close-button">Закрыть</button>
          </div>
        )} */}
      {/* {isFullscreen && ( // Отобразите кнопку "Закрыть"
          <button onClick={handleFullscreen}>Закрыть</button>
        )} */}
    </div>
  );
};

export default Slider;