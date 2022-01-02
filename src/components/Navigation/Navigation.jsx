import React from 'react'
import { ShoppingCart , Home ,} from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
const Navigation = () => {
    return (
        <div>
            <div className="buttton">
                         <button className="IconButton" aria-label='Show cart items' >
                             <Badge className='Badge' badgeContent={2} color='secondary' >
                                 <ShoppingCart  />
                             </Badge>

                         </button>
                         <button className='HomeButton' aria-label='Home page'>
                             <div className='Home'>
                                 <Home />
                             </div>
                         </button>
                        <button className='LoginButton'>
                            <div className='Login'>
                               <LoginIcon />
                            </div>
                        </button>
                    </div>
        </div>
    )
}

export default Navigation
