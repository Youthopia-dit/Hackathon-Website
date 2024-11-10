import './OurTeam.css'
function OurTeam(){
    return(
        <div className='fullpage'>
            <h1 className='topheading'>Our Team</h1>
            <h2 className='heading'>Coordinators</h2>
            <div className='team'>
                <div className='frame'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWYHxXmMugoF3_Rcc3h40FjqS1wt59vf04A&s' className='photo'></img>
                    <h3 className='name'>John Snow</h3>
                </div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
            </div>
            <h2 className='heading'>Crew</h2>
            <div className='team'>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
                <div className='frame'></div>
            </div>
        </div>
    )
}
export default OurTeam;