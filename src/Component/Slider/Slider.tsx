import React, { useState } from 'react';
import "./Slider.css"

interface SliderPrompt {
    images: string[];
}

const Slider: React.FC<SliderPrompt> = ({ images }) => {
  const [mainImage, setMainImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false); 

  const validImages = images.filter(Boolean);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen); 
  };

  const handleClick = (index:number) => {
    setMainImage(index);
  };

  return (
    <div className='slider'>
      {validImages.length > 0 && (
        <div className="thumbnail-images-list">
          {validImages.map((image, index) => (
            <img className='thumbnail-images'
              key={index}
              onClick={() => handleClick(index)}
              src={image}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
      )}
      {validImages.length > 0 && (
        <div className="main-image">
          <img 
              className={`image ${isFullscreen ? 'fullscreen' : ''}`} 
              src={validImages[mainImage]}
              alt="Main product image" 
              onClick={handleFullscreen} />
        </div>
      )}
    </div>
  );
};

export default Slider;