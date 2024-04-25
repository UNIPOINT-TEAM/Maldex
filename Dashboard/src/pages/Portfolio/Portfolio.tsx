import { Link } from 'react-router-dom';
import image1 from '../../assets/portfolio/image1.jpg';
import image2 from '../../assets/portfolio/image2.png';
import image3 from '../../assets/portfolio/image3.png';
import image4 from '../../assets/portfolio/image4.png';
import image5 from '../../assets/portfolio/image5.png';
import image6 from '../../assets/portfolio/image6.png';
import {
  // Badge,
  // News,
  ProductNav,
  ProjectsSlider,
  // QuestForm,
  SliderProduct,
} from '../../components';
import DefaultLayout from '../../layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { GetProjectDetails } from '../../services/maincatalog';

function Portfolio() {


  return (
    <>
      <DefaultLayout>
        <div className="py-5">
          <ProjectsSlider />
        </div>
      </DefaultLayout>
    </>
  );
}

export default Portfolio;
