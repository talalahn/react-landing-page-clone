/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as LogoPic } from './images/logoPic.svg';

// import { ReactComponent as LogoText } from './images/logoText.svg';

const pageBackgroundStyles = css`
  // need to change to that beautiful transition
  /* display: flex; */
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
  position: absolute;
  width: 100vw;
`;

const mainSectionStyles = css`
  display: flex;
  color: #fff;
  background-color: #0042ff;
  border: 10px solid black;
  /* max-width: 100vw; */
  padding: 4rem 20px;
  margin: 16px;
  justify-content: center;

  /* margin: 0 auto; */
`;

const mainSectionContainerStyles = css`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
`;

const brandLogosContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  /* height: 100vh; */
`;

const logoPicContainerStyles = css`
  width: 60px;
  height: 78px;
  margin: auto;
  /* padding: 20px; */
`;

const logoPicStyles = css`
  fill: #ffff00;
`;

// const logoTextStyles = css`
//   fill: #ffff00;
// `;

const draggableHeadingStyles = css`
  color: #ffff00;
  font-size: 70px;
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
`;
const buttonMainSectionStyles = css`
  color: #ffff00;
  background-color: #0032c2;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  padding: 8px 24px;
  border: 3px solid #ffff00;
  margin: 16px 0 0 16px;
  box-shadow: 8px 8px 0 #0032c2;
  line-height: 1;

  :hover {
    box-shadow: none;
    transition: 240ms;
    border: 3px solid #ffffff;
  }
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
            <div css={logoPicContainerStyles}>
              <a css={logoPicStyles}>
                <LogoPic />
              </a>
            </div>
            {/* <div css={logoPicContainerStyles}>
              <a css={logoTextStyles}>
                <LogoText />
              </a>
            </div> */}
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
