import './timeline.css';

import React from 'react'

export default function timeline() {
    return (
        <>
           {/* <h2 id="timeline-text">TIMELINE</h2> */}
            <div className="schedule">
                {/* Tuesday Schedule */}
                <div className="day">
                    <h2>Tuesday, November 12</h2>
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th className="time-header">Time</th>
                                <th className="timeline-header">TimeLine</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:00 am - 11:00 am</td>
                                <td>Registration</td>
                            </tr>
                            <tr>
                                <td>10:00 am</td>
                                <td>Inaugural</td>
                            </tr>
                            <tr>
                                <td>11:00 am - 1:00 pm</td>
                                <td>Hackathon Begins</td>
                            </tr>
                            <tr>
                                <td>1:00 pm - 2:00 pm</td>
                                <td>Lunch</td>
                            </tr>
                            <tr>
                                <td>5:30 pm - 6:15 pm</td>
                                <td>Evaluation Round</td>
                            </tr>
                            <tr>
                                <td>6:30 pm</td>
                                <td>Dinner</td>
                            </tr>
                            <tr>
                                <td>9:00 pm - 10:00 pm</td>
                                <td>Dinner</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Wednesday Schedule */}
                <div className="day">
                    <h2>Wednesday, November 13</h2>
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th className="time-header">Time</th>
                                <th className="timeline-header">TimeLine</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2:00 am - 2:45 am</td>
                                <td>Midnight Snacks</td>
                            </tr>
                            <tr>
                                <td>7:00 am - 8:00 am</td>
                                <td>Breakfast</td>
                            </tr>
                            <tr>
                                <td>12:00 am</td>
                                <td>Coding Ends, Presentation Begins</td>
                            </tr>
                            <tr>
                                <td>3:00 pm</td>
                                <td>Closing ceremony and Felicitation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>




        </>

    )
}
