import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { PieChart } from 'react-minimal-pie-chart';
const pdata = [
    {
      name: 'Entertainment',
      money: 13,
      fees: 10
    },
    {
      name: 'Medication',
      money: 15,
      fees: 12
    },
    {
      name: 'Investment',
      money: 5,
      fees: 10
    },
    {
      name: 'Essentials',
      money: 10,
      fees: 5
    },
    {
      name: 'Fashion',
      money: 9,
      fees: 4
    },
    {
      name: 'E-commerce',
      money: 10,
      fees: 8
    },
  ];

function Analytics() {
  return (
    <React.Fragment>
      <h1 style={{textAlign:'center',color:"orange",marginTop:"10px"}}>Your Analytics</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area dataKey="money" stroke="#FFA500" fill="#FFA500" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <h1 style={{textAlign:'center',color:"orange",marginTop:"10px"}}>Distribution of Expenditure</h1>
      <PieChart
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
          radius={25}
/>;
    </React.Fragment>
  )
}

export default Analytics