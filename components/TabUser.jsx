import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from '../components/Profile';
import Content from '../components/Content';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className='px-10 my-10 py-10 bg-white mx-10 '>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
      <Profile />
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='pt-10 capitalize '>
          <Tab label="General Details" {...a11yProps(0)}  className='font-semibold text-xs capitalize'  />
          <Tab label="Documents" {...a11yProps(1)} className='font-semibold text-xs mx-24 capitalize '  />
          <Tab label="Bank Details" {...a11yProps(2)} className='font-semibold text-xs capitalize'  />
          <Tab label="Loans" {...a11yProps(0)}  className='font-semibold text-xs mx-24 capitalize'  />
          <Tab label="Savings" {...a11yProps(1)} className='font-semibold text-xs capitalize'  />
          <Tab label="App and System" {...a11yProps(2)} className='font-semibold text-xs mx-24 capitalize'  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <span><Content /></span>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <span><Content /></span>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <span><Content /></span>
      </TabPanel>
      
    </Box>
  );
}