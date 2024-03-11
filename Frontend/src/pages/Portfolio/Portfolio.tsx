import React from 'react'
import PortfolioBanner from '../../components/PortfolioBanner/PortfolioBanner'
import { News, ProjectsSlider, QuestForm } from '../../components'

function Portfolio() {
  return (
    <>
    <div className="container_xxl">
      <PortfolioBanner/>
      <News/>
      <ProjectsSlider/>
      <QuestForm/>
    </div>
    </>
  )
}

export default Portfolio