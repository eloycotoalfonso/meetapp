import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGerne = ( { events }) => {
    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    // ];
    const [data, setData] = useState([]);
    const colors = ['#E91E63', '#BB36D1', '#8258D1', '#57ACDC', '#57DCBE'];

    useEffect(() => {
        
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const getData = () => {
            const data = genres.map((genre) => {
                const value = events.filter(event => event.summary.includes(genre)).length
                return {name: genre, value };
            })
            return data;
        }
        setData(() => getData());
    }, [events]);
    

    return (
        <ResponsiveContainer className = 'pieChart' height = {400}>
            <PieChart width = {400} height = {400}>
                <Legend verticalAlign='top' height = {36} />
                <Pie
                data = {data}
                cx = '50%'
                cy = '50%'
                labelLine = {false}
                outerRadius = {80}
                fill = '#8884d8'
                dataKey = 'value'
                label = {({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) =>(
                        <Cell key={`cell-${index}`} fill = {colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGerne