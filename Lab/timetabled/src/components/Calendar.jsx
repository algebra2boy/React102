import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Star bucks' color="green"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Homework' color="green"/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">9 am</td>
                        <Event event='Work' color="pink"/>
                        <Event event='Listen to music' color="blue"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Rock Climbing' color="blue"/>
                        <td></td>
                        <td></td>
                        <Event event='Office Hour' color="pink"/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='UCA 426' color="pink"/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Rock Climbing' color="blue"/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='426 Lecture' color="pink"/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Read' color="blue"/>
                        <Event event='Gym' color="blue"/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Read' color="blue"/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='220 Lecture' color="pink"/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Homework' color="blue"/>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Calendar;