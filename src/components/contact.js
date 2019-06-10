import React, { useState } from 'react';
import styled from 'styled-components';

import { SectionContainer, SectionTitle } from '../styles/section';
import someTunes from '../audio/TakeAChanceOnMe-ABBA-Trimmed.mp3';
import envelope from '../images/envelope.svg';
import playButton from '../images/play-outline.svg';

const ContactContainer = styled(SectionContainer)`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
  padding-bottom: ${props => (props.showVid === 'Yes' ? '170px' : '20px')};
  transition: all 1s;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border-left: 5px solid #92aed0;
  border-right: 5px solid #92aed0;
  z-index: 2;
  background-color: #d1e5ff;
  background-color: hsla(214, 100%, 91%, 0.28);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%233476ca' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const ContactBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  width: 250px;
  ::before {
    content: '';
    position: absolute;
    background: white;
    top: 0;
    left: -18px;
    bottom: 0;
    width: 30px;
    transform: skew(5deg);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  ::after {
    content: '';
    position: absolute;
    background: white;
    top: 0;
    right: -18px;
    bottom: 0;
    width: 30px;
    transform: skew(-5deg);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ContactTitle = styled(SectionTitle)`
  font-size: 1.25rem;
  margin: 0.9rem auto 0;
`;

const ContactInfo = styled.div`
  p {
    text-align: center;
    line-height: 1.5;
    span {
      font-size: 0.9rem;
      font-style: italic;
    }
  }
  a {
    width: 100%;
    display: block;
    text-align: center;
    padding: 8px 8px 8px 30px;
    color: #002a61;
    background: #e4ecf7;
    text-decoration: none;
    border-radius: 10px;
    position: relative;
    ::before {
      content: url(${envelope});
      width: 15px;
      position: absolute;
      left: 8px;
      top: 11px;
    }
  }
`;

const ListenButton = styled.button`
  border: none;
  background: #f6f8fb;
  /* color: #102a42; */
  color: #002a61;
  border-radius: 10px;
  box-shadow: 0px 1px 2px hsla(0, 0%, 0%, 0.15);
  position: relative;
  padding: 5px 15px 5px 5px;
  width: 70px;
  ::after {
    content: url(${playButton});
    width: 15px;
    position: absolute;
    right: 5px;
  }
`;

const ChanceSource = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-self: center;
  font-size: 0.7rem;
`;

const ChanceVideoBlock = styled.div`
  position: absolute;
  bottom: ${props => (props.showVid === 'Yes' ? '-155px' : '0px')};
  display: flex;
  flex-direction: column;
  transition: all 1s;
  z-index: -1;
  color: #102a42;
  button.close {
    opacity: ${props => (props.showVid === 'Yes' ? 1 : 0)};
    background: #e8f1fa;
    color: #c10d0d;
    text-align: center;
    font-size: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 0;
    position: relative;
    align-self: flex-end;
    border-radius: 10px;
    right: 15px;
  }
`;

const TrimmedTakeAChance = () => (
  <>
    <audio autoPlay controls controlsList="nodownload">
      <source src={someTunes} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <ChanceSource>
      <p>
        Artist: ABBA <br />
        Song: Take A Chance on Me <br />
        Source:{' '}
        <a
          href="https://www.youtube.com/watch?v=-crgQGdpZR0"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube Link
        </a>
      </p>
    </ChanceSource>
  </>
);

// const IframeVid = () => (
//   <iframe
//     id="videoTACOM"
//     title="takeAChance"
//     width="275"
//     height="auto"
//     src="https://www.youtube.com/embed/-crgQGdpZR0?start=3&end=20"
//     frameBorder="0"
//     allow="accelerometer; autoplay; encrypted-media; gyroscope;"
//   />
// );

const Contact = () => {
  const [showVid, toggleVid] = useState(0);

  return (
    <ContactContainer showVid={showVid === 0 ? 'No' : 'Yes'} id="contact">
      <ContactBlock>
        <ContactTitle>CONTACT ME</ContactTitle>
        <ContactInfo>
          <p>
            Feel free to reach out! <br />
            <span>(I like jokes and fun facts)</span>
          </p>
          <a href="mailto:mr.mraguso@gmail.com">mr.mraguso@gmail.com</a>
          <p>
            Looking to hire? <br />
            <span>Take a Chance on Me...</span>
            <br />
            <ListenButton onClick={() => toggleVid(1)} type="button">
              Listen
            </ListenButton>
          </p>
        </ContactInfo>
        <ChanceVideoBlock showVid={showVid === 0 ? 'No' : 'Yes'}>
          <button type="button" onClick={() => toggleVid(0)} className="close">
            Close <span style={{ color: 'inherit' }}>&#10006;</span>
          </button>
          {showVid === 1 ? <TrimmedTakeAChance /> : ''}
        </ChanceVideoBlock>
      </ContactBlock>
    </ContactContainer>
  );
};

export default Contact;
