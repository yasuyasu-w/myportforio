import React from 'react'
import  HomepageIcon from './HomePageIcon'
import  ProfileIcon from './ProfileIcon'
import  ProductIcon from './ProductIcon'
import  SkillsIcon from './SkillsIcon'
import  ContactIcon from './ContactIcon'
import {useHistory} from 'react-router-dom'



type Props={
    handleDrawerClose:()=>void
}

const AllIcon:React.FC<Props>=(props)=>{
    const history=useHistory()

    const PushAndClose=(path:string)=>{
        if(props.handleDrawerClose){
            props.handleDrawerClose()
        }
        history.push(path)
      }

       return( 
       <>
         <HomepageIcon PushAndClose={PushAndClose}  />
          <ProfileIcon PushAndClose={PushAndClose} />
          <SkillsIcon PushAndClose={PushAndClose} />
          <ProductIcon PushAndClose={PushAndClose} />
          <ContactIcon PushAndClose={PushAndClose} />
      </> 
       ) 
}

export default AllIcon

