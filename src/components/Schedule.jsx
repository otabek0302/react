import React from 'react'
import styled from 'styled-components';

export default function Schedule() {
    return (
        <div>
            <Container>
                <div className='content'>

                    <div class="schedule" aria-labelledby="schedule-heading">
                        {/* start */}
                        <span className="track-slot" aria-hidden="true" style={{ gridColumn: ' track-1', gridRow: 'tracks' }}>Room 1</span>
                        <h2 className="time-slot" style={{ gridRow: ' time-0800' }}>8:00</h2>
                        <div className="session session-1 track-1" style={{ gridColumn: 'track-1', gridRow: 'time-0800 / time-0900' }}>
                            <h3 className="session-title"><a href="#">Talk Title</a></h3>
                            <span className="session-time">8:00 - 9:00</span>
                            <span className="session-track">Track: 1</span>
                            <span className="session-presenter">Presenter</span>
                        </div>
                        {/* end */}
                        {/* start */}
                        <span className="track-slot" aria-hidden="true" style={{ gridColumn: ' track-2', gridRow: 'tracks' }}>Room 2</span>
                        <h2 className="time-slot" style={{ gridRow: ' time-0900' }}>9:00</h2>
                        <div className="session session-1 track-1" style={{ gridColumn: 'track-2', gridRow: 'time-0900 / time-1000' }}>
                            <h3 className="session-title"><a href="#">Talk Title</a></h3>
                            <span className="session-time">9:00 - 10:00</span>
                            <span className="session-track">English</span>
                            <span className="session-presenter">Presenter</span>
                        </div>
                        {/* end */}
                        <span className="track-slot" aria-hidden="true" style={{ gridColumn: ' track-3', gridRow: 'tracks' }}>Room 3</span>
                        <h2 className="time-slot" style={{ gridRow: ' time-0900' }}>9:00</h2>
                        <div className="session session-1 track-1" style={{ gridColumn: 'track-3', gridRow: 'time-0900 / time-1000' }}>
                            <h3 className="session-title"><a href="#">Talk Title</a></h3>
                            <span className="session-time">9:00 - 10:00</span>
                            <span className="session-track">English</span>
                            <span className="session-presenter">Presenter</span>
                        </div>
                        {/* end */}
                        <span className="track-slot" aria-hidden="true" style={{ gridColumn: ' track-1', gridRow: 'tracks' }}>Room 3</span>
                        <h2 className="time-slot" style={{ gridRow: ' time-1000' }}>10:00</h2>
                        <div className="session session-1 track-1" style={{ gridColumn: 'track-1', gridRow: 'time-1000 / time-1200' }}>
                            <h3 className="session-title"><a href="#">IELTS</a></h3>
                            <span className="session-time">10:00 - 12:00</span>
                            <span className="session-track">English</span>
                            <span className="session-presenter">Presenter</span>
                        </div>
                        <h2 className="time-slot" style={{ gridRow: ' time-1200' }}>12:00</h2>
                        {/* end */}
                        {/* end */}
                        <span className="track-slot" aria-hidden="true" style={{ gridColumn: ' track-4', gridRow: 'tracks' }}>Room 4</span>
                        <h2 className="time-slot" style={{ gridRow: ' time-0800' }}>8:00</h2>
                        <div className="session session-1 track-1" style={{ gridColumn: 'track-4', gridRow: 'time-0800 / time-1200' }}>
                            <h3 className="session-title"><a href="#">IELTS</a></h3>
                            <span className="session-time">08:00 - 12:00</span>
                            <span className="session-track">math</span>
                            <span className="session-presenter">Presenter</span>
                        </div>
                        {/* end */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Container = styled.div`
color: #888;
margin-top: 50px;
margin-left: 255px;
    @media screen and (min-width:700px) {
  .schedule {
	width: 100%;
    display: grid;
    grid-template-rows:
      [tracks] auto
      [time-0800] 100px
      [time-0830] 50px
      [time-0900] 100px
      [time-0930] 50px
      [time-1000] 100px
      [time-1030] 50px
      [time-1100] 100px
      [time-1130] 50px
      [time-1200] 100px
      [time-1230] 50px
      [time-1300] 100px
      [time-1330] 50px
      [time-1400] 100px
      [time-1430] 50px
      [time-1500] 100px
      [time-1530] 50px
      [time-1600] 100px
      [time-1630] 50px
      [time-1700] 100px
      [time-1730] 50px
      [time-1800] 100px
      [time-1830] 50px
      [time-1900] 100px
      [time-1930] 50px
      [time-2000] 100px
      [time-2030] 50px
      [time-2100] 100px
      [time-2130] 50px
      [time-2200] 100px;
      /* Note 1:
      Use 24hr time for gridline names for simplicity

      Note 2: Use "auto" instead of "1fr" for a more compact schedule where height of a slot is not proportional to the session length. Implementing a "compact" shortcode attribute might make sense for this!
      Try 0.5fr for more compact equal rows. I don't quite understand how that works :)
      */
    
    grid-template-columns:
      [times] 4em
      [track-1-start] 1fr
      [track-1-end track-2-start] 1fr
      [track-2-end track-3-start] 1fr
      [track-3-end track-4-start] 1fr
      [track-4-end]
  }
}

.time-slot {
  grid-column: times;
}

.track-slot {
  display: none; /* hidden on small screens and browsers without grid support */
}

@supports( display:grid ) {
  @media screen and (min-width:700px) {
    .track-slot {
      display: block;
      padding: 10px 5px 5px;
      position: sticky;
      top: 0;
      z-index: 1000;
      background-color: rgba(255,255,255,.9);
    }
  }
}

/* Small-screen & fallback styles */
.session {
  margin-bottom:  1em;
  display: flex;
  flex-direction: column;
  
}

@supports( display:grid ) {
  @media screen and (min-width: 700px) {
    .session {
      margin: 0;
    } 
  }
}


body {
  padding: 50px;
  max-width: 1100px;
  margin: 0 auto;
  line-height: 1.5;
}

.session {
  padding: .5em;
  border-radius: 2px;
  font-size: 14px;

}

.session-title,
.session-time,
.session-track,
.session-presenter {
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
}

.session-title,
.time-slot {
  /* margin: 0; */
  font-size: 1em;
}

.session-title a {
  color: #fff;
  text-decoration-style: dotted;
  
  &:hover {
    font-style: italic;
  }
  
  &:focus {
    outline: 2px dotted rgba(255,255,255,.8);
  }
}

.track-slot,
.time-slot {
  font-weight: bold;
  font-size:.75em;
}

.track-1 {
  background-color: #363B64;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: #fff;
  padding: 20px;
  margin: 2px;
}
.text {
  max-width: 750px;
  font-size: 18px;
  margin: 0 auto 50px;
}



hr {
  margin: 40px 0;
}
`