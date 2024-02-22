import React from 'react'
import PortfolioBanner from '../../components/PortfolioBanner/PortfolioBanner'
import { News, ProjectsSlider, QuestForm } from '../../components'

function Portfolio() {
  return (
    <>
    <div>
      <PortfolioBanner/>
      <News/>
      <ProjectsSlider/>
      <QuestForm/>
    </div>
    </>
  )
}

export default Portfolio