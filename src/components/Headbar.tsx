import { AppBar, Box, Button, ButtonGroup, Toolbar } from '@mui/material';
import React from 'react';


export class Headbar extends React.Component {
  render() {
    return (
        <Box sx={{overflow: "hidden"}}>
            <AppBar position="static">
                <Toolbar>
                    {/*replace with image button*/}
                    <ButtonGroup variant="contained" color="secondary" aria-label="text primary button group">
                        <Button onClick={ ()=>window.location.href="/"		    }	> Home		</Button>
                        <Button onClick={ ()=>window.location.href="/contact"   }	> Contact	</Button>
                        <Button onClick={ ()=>window.location.href="/about"     } 	> About		</Button>
                        <Button onClick={ ()=>window.location.href="/projects"  } 	> Projects	</Button>
                        <Button onClick={ ()=>window.location.href="/projects"  } 	> configure	</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
    }
}