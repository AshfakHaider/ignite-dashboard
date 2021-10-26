import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/images/ignite_youth_foundation_logo.png';
import { SubjectOutlined, BackupTableOutlined, PeopleOutlined } from '@mui/icons-material';


const drawerWidth = 240;




const Layout = ({ children }) => {
   
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'Home',
            key: '1',
            icon: <SubjectOutlined color="secondary" />,
            path: '/dashboard'
        },
        {
            text: 'Home Contents',
            key: '2',
            icon: <PeopleOutlined color="secondary" />,
            path: '/dashboard/home'
        },
        {
            text: 'Add Home Contents',
            key: '3',
            icon: <BackupTableOutlined color="secondary" />,
            path: '/dashboard/homeEdit'
        },

    ];


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                className='dashboard-container'
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{
                            flexGrow: 1,
                            fontWeight: '700',
                            fontSize: '1.5rem',
                        }}
                    >
                        Ignite Youth Foundation Website
                    </Typography>
                    <Avatar src='https://raw.githubusercontent.com/iamshaunjp/material-ui-tut/lesson-17/public/mario-av.png' />

                </Toolbar>
            </AppBar>
            <div className="drawer-main">
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            background: 'none'
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                    className="drawer"
                >

                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: '125px',
                            position: 'relative',
                            top: '25px',
                            left: '47px',
                        }}
                    />

                    <Toolbar />
                    <Divider />
                    <List>
                        {menuItems.map((menu) => (
                            <ListItem
                                button
                                onClick={() => history.push(menu.path)}
                                className={location.pathname === menu.path ? 'active' : ''}
                                key={menu.key}
                            >
                                <ListItemIcon>
                                    {menu.icon?menu.icon:null}
                                </ListItemIcon>
                                <ListItemText 
                                primary={menu.text?menu.text:'No Text Provided'} 
                                />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
            <div
                style={{
                    padding: '15px',
                    marginTop: '70px',
                    maxWidth: '100%',
                    width: '100%',
                }}
            >

                {children}
            </div>
        </Box>

    );
};

export default Layout;