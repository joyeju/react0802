import React from 'react'
import Tabs from '../components/tabs02/Tabs'
import Accordion from '../components/accordion/Accordion'

const Board = ({theme, tabDatas}) => {
  console.log( tabDatas.length )
  return (
    <>
      <section className={theme ? 'section-container darkTheme': null}
              style={{ height : "100vh"}}
      >
          <h2>Board</h2>
          <Tabs tabDatas={tabDatas} />
      </section>
      <section className={theme ? 'section-container darkTheme': null}
              style={{ height : "100vh"}}
      >
          <h2>Board</h2>
          <Accordion datas={tabDatas} />
      </section>
    </>
  )
}

export default Board