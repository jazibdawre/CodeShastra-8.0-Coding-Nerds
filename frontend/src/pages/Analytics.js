import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
    {
      name: 'Entertainment',
      student: 13,
      fees: 10
    },
    {
      name: 'Medication',
      student: 15,
      fees: 12
    },
    {
      name: 'Investment',
      student: 5,
      fees: 10
    },
    {
      name: 'Essentials',
      student: 10,
      fees: 5
    },
    {
      name: 'Fashion',
      student: 9,
      fees: 4
    },
    {
      name: 'E-commerce',
      student: 10,
      fees: 8
    },
  ];

function Analytics() {
  return (
    <React.Fragment>
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
          <Area dataKey="temperature" stroke="#FFA500" fill="#FFA500" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

export default Analytics