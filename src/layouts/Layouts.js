import React from 'react'
import MyNavBar from './MyNavBar'

const Layouts = ({children}) => {
  return (
    <div>
        <MyNavBar/>
        <main>
            {
                children
            }
            
        </main>
    </div>
  )
}

export default Layouts