import React from 'react'
import styled from 'styled-components'

const BlastOffContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const MyBadLogo = styled.h2`
  text-align: center;
  flex: 2;
  font-size: 3rem;
`

const BlastOff = () => (
  <BlastOffContainer>
    <MyBadLogo>Blast Off!</MyBadLogo>
    <div style={{ flex: 5 }}>
      <p className="dropcap">
        Hot off the launchpad: we have just finished shooting a teaser for
        MyBad! starring Richard Blackwood, Jake Canuso, Will Mellor and John
        Thomson as Tasty Flava, Stewie, Davey Dave and Gaz aka 90's boy band
        sensation MyBad! and Sally Lindsay as their manager Marie.
      </p>
      <p>Description of project in here.</p>
      <p>
        <strong>MyBad!</strong> was written and directed by Nick Wild and also
        features Paul Chuckle, John Culshaw, Nicole Barber-Lane, Rachel Knowles
        and Caprice amongst many others. more.
      </p>
      <p> Watch this space for commissioning updates!</p>
    </div>
  </BlastOffContainer>
)

export default BlastOff
