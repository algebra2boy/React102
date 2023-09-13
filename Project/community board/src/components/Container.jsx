import React from "react";
import Card from "./Card";

const Container = () => {
    return (
        <div className="Container">
            <Card img="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds" title="Machine Learning" subtitle="Python" link="https://umass.acm.org/sigs/Machine-Learning" />
            <Card img="https://buildumass.com/img/illustrations/services.svg" title="BuildUMass" subtitle="work with local companies" link="https://buildumass.com/" />
            <Card img="https://umass-cicsoft.github.io/assets/img/syllabus/2.png" title="CICSOFT" subtitle ="develope technical skills" link="https://umass-cicsoft.github.io/"/>

            <Card img="https://lh3.googleusercontent.com/n6AOnQGNOS6zaM4kGKS61E5kPtUWluZIgyKVfACVPrXISnn556YiWy_P-REfMaCBwSWa1GtvjNxLaFltnu7WdPsbj7Iw4wDVG4xbGolwYoMpoo0scVJCGa6JEl-DCwiTmX-Z1qTD=w2400" title="COST" subtitle="Building a community of CICS Students" link="https://cics-cost.github.io/"/> 
            <Card img="https://www.hackher413.com/assets/images/2023/23pic2.jpg" title="Hackher413" subtitle="Hackathon" link="https://www.hackher413.com/"/>
            <Card img="https://hackumass.com/assets/img/useful/hardware.jpg" title="HackUmass" subtitle="Hackathon" link="https://hackumass.com/" />

            <Card img="https://encouraging-oriole-427.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56505fa6-aadd-4dc4-b086-eb33b1eeb677%2F1500x500.jpeg?table=block&id=7afbb7fe-ea55-47b4-88e5-863af8aa727f&spaceId=df08f7e2-8563-4e9d-b496-65e53d3b933f&width=2000&userId=&cache=v2" title="Product Management" subtitle="Make products and design" link="https://encouraging-oriole-427.notion.site/Welcome-to-UMass-Product-7afbb7feea5547b488e5863af8aa727f" />
            <Card img="https://www.cics.umass.edu/sites/default/files/umass_data_science_club_logo_1_0.png" title="Data Science Club" subtitle="Learn how to code in Python and R" link="https://www.umassdatascienceclub.com/" />
            <Card img="https://umass-amherst-robotics.github.io/umr-react-website/team-working-3.jpeg" title="Robotics" subtitle="Develope robots" link="https://umass-amherst-robotics.github.io/umr-react-website/#/" />

            <Card img="http://cswomenumass.github.io/assets/images/blog/whole_group.jpg" title="Women's Group" subtitle="community building for women" link="http://cswomenumass.github.io/index.html" />
        </div>
    )
}

export default Container;