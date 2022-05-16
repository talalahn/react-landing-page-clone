/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as LogoPic } from './images/logoPic.svg';

const pageBackgroundStyles = css`
  // need to change to that beautiful transition
  display: flex;
  background-color: #b762ff;
  background-image: linear-gradient(
    188deg,
    #b762ff,
    #0079ff,
    #ff0,
    #ff576f,
    #b762ff,
    #459dff,
    #4ee4c4,
    #ffd117,
    #ff576f
  );
  margin: 0;
  justify-content: center;
`;

const mainSectionStyles = css`
  /* display: flex; */
  color: #fff;
  background-color: #0042ff;
  border: 10px solid black;
  /* max-width: 100vw; */
  padding: 4rem 20px;
  margin: 20px;
  justify-content: center;

  /* margin: 0 auto; */
`;

const mainSectionContainerStyles = css`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
`;

const brandLogosContainerStyles = css`
  display: block;
  width: 4.6rem;
  height: 100vh;
  margin: 0 auto;
  /* align-content: center; */
`;

const logoPicStyles = css`
  fill: #ffff00;
  margin: auto;
  padding: 20px;
`;

const draggableHeadingStyles = css`
  color: #ffff00;
  font-size: 80px;
  font-weight: 300;
`;

const headingMainSectionStyles = css`
  font-weight: 400;
  font-size: 22px;
  display: flex;
  justify-content: center;
`;

const buttonContainerMainSectionStyles = css`
  display: flex;
  justify-content: center;
  align-content: center;

  /* gap: 24px; */
  margin: 0px 16px;
`;
const buttonMainSectionStyles = css`
  padding: 8px 24px;
  color: #ffff00;
  background-color: #0032c2;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  padding: 8px 24px;
  border: 0.3rem solid #ffff00;
  margin: 16px 0 0 16px;
`;
const linkContainerMainSectionStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
`;

function App() {
  return (
    <div css={pageBackgroundStyles}>
      <section css={mainSectionStyles}>
        <div css={mainSectionContainerStyles}>
          <div css={brandLogosContainerStyles}>
            <a css={logoPicStyles}>
              <LogoPic />
            </a>
            <h1 css={draggableHeadingStyles}>
              <em>draggable</em>
            </h1>
          </div>
          <h2 css={headingMainSectionStyles}>
            a lightweight, responsive, modern drag &amp; drop library
          </h2>
          <div css={buttonContainerMainSectionStyles}>
            <a href="/" css={buttonMainSectionStyles}>
              download
            </a>
            <a href="/" css={buttonMainSectionStyles}>
              examples
            </a>
          </div>
          <div css={linkContainerMainSectionStyles}>
            <a href="/">Contribute on Github</a>
            <a href="/">View documentation</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
