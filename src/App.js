/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
// import { ReactComponent as Basics } from './images/basics.png';
import { ReactComponent as LogoPic } from './images/logoPic.svg';
import { ReactComponent as LogoText } from './images/logoText.svg';

const pageBackgroundStyles = css`
  // need to change to that beautiful transition
  /* display: flex; */
  /* flex-direction: column; */
  background-color: #b762ff;
  overflow: auto;
  background-image: linear-gradient(
    180deg,
    #b762ff 0%,
    #0079ff 12.5%,
    #ff0 25%,
    #ff576f 37.5%,
    #b762ff 50%,
    #459dff 62.5%,
    #4ee4c4 75%,
    #ffd117 88.5%,
    #ff576f 100%
  );
  min-height: 100%;
  cursor: url(/cursors/cursor-auto.png), auto;
`;

const mainSectionStyles = css`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #0042ff;
  border: 10px solid black;
  padding: 4rem 20px;
  margin: 16px;
  justify-content: center;
  align-items: center;
`;

const mainSectionContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
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
  margin-top: 8px;
`;

const logoPicStyles = css`
  fill: #ffff00;

  .Wave--colorPurple {
    fill: #8042b7;
  }
  .Wave--colorRed {
    fill: #dd4540;
  }
  .Wave--colorOrange {
    fill: #ff9e2c;
  }
  .Wave--colorMask {
    fill: transparent;
  }
`;

const logoTextContainerStyles = css`
  width: 320px;
  height: 70px;
  margin-bottom: 16px;
`;

const logoTextStyles = css`
  fill: #ffff00;
`;

const headingMainSectionStyles = css`
  font-weight: 400;
  font-size: 22px;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const buttonContainerMainSectionStyles = css`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 24px;
  margin-top: 7px;
`;
const buttonMainSectionStyles = css`
  color: #ffff00;
  background-color: #0032c2;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  padding: 8px 24px;
  border: 3px solid #ffff00;
  margin: 16px 0 0 0px;

  box-shadow: 8px 8px 0 #0032c2;
  line-height: 1;

  :hover {
    box-shadow: none;
    transition: 240ms;
    border: 3px solid #ffffff;
    cursor: url('/cursors/cursor-link.png'), auto;
  }
`;
const linkContainerMainSectionStyles = css`
  display: block;
  text-decoration: none;
  color: white;
  margin: auto;
  margin-top: 28px;
  gap: 20px;
`;

const linkMainSectionStyles = css`
  /* text-decoration-color: none; */
  color: white;
  /* margin: auto; */
  font-size: 14px;
  font-weight: 600;
  padding: 7px;
  cursor: url('/cursors/cursor-link.png'), auto;
`;

const yellowSectionStyles = css`
  display: flex;
  color: #fff;
  background-color: #ffd117;
  border: 10px solid black;
  /* padding: 4rem 20px; */
  /* padding: 224px 32px 0 32px; */
  margin: -26px 16px 16px 16px;
  justify-content: center;
  z-index: 1;
`;

const basicsTopImageStyles = css`
  width: 1100px;
  margin-right: 27px;
  margin-bottom: -268px;
`;
const basicsMiddleImageStyles = css`
  width: 520px;
  margin-bottom: 19px;
  margin-left: 135px;
`;
const basicsLeftImageStyles = css`
  width: 390px;
  margin-bottom: 1px;
  /* margin-left: -55px; */
`;
const basicsRightImageStyles = css`
  width: 560px;
  margin-bottom: 56px;
  margin-right: -55px;
`;

const turquoiseSectionStyles = css`
  display: block;
  /* flex-direction: column; */
  color: #fff;
  background-color: #4ee4c4;
  border: 10px solid black;
  margin: -26px 16px 16px 16px;
  justify-content: center;
  align-content: center;
  /* z-index: 2; */
`;

const turquoiseTextSectionStyles = css`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;
const swappableImageStyles = css`
  width: 990px;
  margin-top: 0px;
  margin-left: 190px;
  margin-bottom: -193px;
`;

const redSectionStyles = css`
  /* display: flex; */
  color: #fff;
  background-color: #ff576f;
  border: 10px solid black;
  padding: 4rem 20px;
  margin: -26px 16px 16px 16px;
  justify-content: center;
`;

const redTextSectionStyles = css`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const sortableStyles = css`
  width: 760px;
  margin-left: 244px;
  margin-top: 27px;
  margin-bottom: -298px;
`;

const greenSectionStyles = css`
  /* display: flex; */
  color: #fff;
  background-color: #44ed93;
  border: 10px solid black;
  padding: 4rem 20px;
  margin: -26px 16px 16px 16px;
  justify-content: center;
`;

const collidableLeftStyles = css`
  width: 725px;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: -277px;
`;

const collidableRightStyles = css`
  width: 450px;
  margin-left: 775px;
  margin-top: -216px;
  margin-bottom: -308px;
`;

const greenTextSectionStyles = css`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const purpleSectionStyles = css`
  display: flex;
  background-color: #b762ff;
  border: 10px solid black;
  padding: 4rem 20px;
  margin: -26px 16px 16px 16px;
  justify-content: center;
  padding-bottom: 380px;
`;

const accessibleStyles = css`
  width: 850px;
  margin-left: -50px;
  margin-top: 20px;
  margin-bottom: -298px;
  padding-bottom: 210px;
`;

const extensibleStyles = css`
  width: 700px;
  margin-left: 35px;
  margin-top: 20px;
  margin-bottom: -298px;
  padding-bottom: 253px;
`;

const interactionStyles = css`
  width: 1220px;
  margin-left: -270px;
  margin-top: 0px;
  margin-bottom: -298px;
  padding-bottom: 215px;
`;

const animationStyles = css`
  width: 1320px;
  margin-left: -240px;
  margin-top: 10px;
  margin-bottom: -298px;
  padding-bottom: 215px;
`;

const shopifyStyles = css`
  width: 400px;
  /* margin-top: -20px; */
  margin-left: 190px;
  margin-bottom: -338px;
`;

const yellowSectionContainerStyles = css`
  color: #000000;
  display: block;
  /* margin: 251px; */
  padding-top: 24px;
  justify-items: center;
  align-content: center;
  max-width: 800px;
`;

const basicsBottomImagesContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 178px;
  margin-bottom: -193px;
  margin-top: -20px;
  margin-right: -5px;
`;

const turquoiseSectionContainerStyles = css`
  color: #000000;
  display: block;
  /* margin: 251px; */
  /* padding-top: 24px; */
  justify-items: center;
  align-content: center;
  max-width: 800px;
`;

const redSectionContainerStyles = css`
  color: #000000;
  display: block;
  margin-top: -85px;
  padding-top: 24px;
  justify-items: center;
  align-content: center;
  max-width: 800px;
`;
const greenSectionContainerStyles = css`
  color: #000000;
  display: block;
  /* margin: 251px; */
  padding-top: 10px;
  justify-items: center;
  align-content: center;
  max-width: 800px;
`;
const purpleSectionContainerStyles = css`
  color: #000000;
  display: block;
  /* margin: 251px; */
  padding-top: 24px;
  justify-items: center;
  align-content: center;
  max-width: 800px;
`;

const h1Elements = css`
  color: #000000;
  font-weight: 700;
  font-size: 64px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 48px;
  line-height: 1.3;
  padding-top: 200px;
  cursor: url('/cursors/cursor-text.png'), auto;
`;
const pElements = css`
  color: #000000;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 1.6;
  cursor: url('/cursors/cursor-text.png'), auto;
`;

const spanUnderlineStyles = css`
  text-decoration: underline;
`;

const comingSoonStyles = css`
  display: block;
  line-height: 1;
  /* cursor: url(../img/cursor-auto.png), auto; */
  width: 129px;
  margin: 0 auto;
  text-align: center;
  font-size: 10px;
  padding: 8px 10px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #212529;
  border: 2px solid;
  border-radius: 3px;
  margin-top: -40px;
  margin-bottom: 45px;
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
            <div css={logoTextContainerStyles}>
              <div css={logoTextStyles}>
                <LogoText />
              </div>
            </div>
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
            <a href="/" css={linkMainSectionStyles}>
              Contribute on Github
            </a>
            <span>•</span>
            <a href="/" css={linkMainSectionStyles}>
              View documentation
            </a>
          </div>
        </div>
        <div>
          <img src="/images/basics_top.png" alt="" css={basicsTopImageStyles} />
        </div>
      </section>
      <section css={yellowSectionStyles}>
        <div css={yellowSectionContainerStyles}>
          <h1 css={h1Elements}>Basics</h1>
          <p css={pElements}>
            Draggable is a modular drag &amp; drop library, allowing you to
            start small and build up with the features you need. At its most
            basic, Draggable gives you drag &amp; drop functionality, fast DOM
            reordering, accessible markup, and a bundle of events to grab on to.
          </p>

          <div>
            <img
              src="/images/basics_middle.png"
              alt=""
              css={basicsMiddleImageStyles}
            />
          </div>
          <div css={basicsBottomImagesContainerStyles}>
            <div>
              <img
                src="/images/basics_left.png"
                alt=""
                css={basicsLeftImageStyles}
              />
            </div>
            <div>
              <img
                src="/images/basics_right.png"
                alt=""
                css={basicsRightImageStyles}
              />
            </div>
          </div>
        </div>
      </section>
      <section css={turquoiseSectionStyles}>
        <div css={turquoiseTextSectionStyles}>
          <div css={turquoiseSectionContainerStyles}>
            <h1 css={h1Elements}>Swappable</h1>
            <p css={pElements}>
              The classic switcheroo. Drag one element over another and watch
              them trade places in the DOM. The ideal functionality for when
              layout dimensions need to be retained.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/swappable.png" alt="" css={swappableImageStyles} />
        </div>
      </section>
      <section css={redSectionStyles}>
        <div css={redTextSectionStyles}>
          <div css={redSectionContainerStyles}>
            <h1 css={h1Elements}>Sortable</h1>
            <p css={pElements}>
              Sort DOM nodes with style. Drag items in a collection from one
              spot to another and watch everything snap into place. Fast and
              responsive sorting that won't leave your performance wallet
              strapped for frames.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/sortable.png" alt="" css={sortableStyles} />
        </div>
      </section>
      <section css={greenSectionStyles}>
        <div css={greenTextSectionStyles}>
          <div css={greenSectionContainerStyles}>
            <h1 css={h1Elements}>Collidable</h1>
            <p css={pElements}>
              Start your game dev career and inject some collision detection.
              Collidable will prevent draggable elements from overlapping each
              other, firing collision events when the dragged source element
              enters and exits a restricted zone.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/images/collidable_left.png"
            alt=""
            css={collidableLeftStyles}
          />
          <div>
            <img
              src="/images/collidable_right.png"
              alt=""
              css={collidableRightStyles}
            />
          </div>
        </div>
      </section>
      <section css={purpleSectionStyles}>
        <div css={purpleSectionContainerStyles}>
          <h1 css={h1Elements}>Accessible</h1>
          <span css={comingSoonStyles}>Coming soon</span>
          <p css={pElements}>
            Drag &amp; drop accessibility is a delicate flower. While browsers
            continue to work on a reliable native solution, Draggable lends a
            helping hand. All draggable elements are focusable and provide
            customizable screen reader announcements.
          </p>
          <div>
            <img src="/images/accessible.png" alt="" css={accessibleStyles} />
          </div>
          <h1 css={h1Elements}>Extensible</h1>
          <p css={pElements}>
            Draggable is easy to extend. Write a custom module that provides the
            functionality you need, then{' '}
            <span css={spanUnderlineStyles}>submit it to our Github repo </span>
            for review. If you needed a feature that wasn't already available,
            chances are the community needs it too. Sharing is caring.
          </p>
          <div>
            <img src="/images/extensible.png" alt="" css={extensibleStyles} />
          </div>
          <h1 css={h1Elements}>Interaction</h1>
          <p css={pElements}>
            Draggable supports most of the interaction events we could think of:
            mouse, touch, and force touch are all available out of the box, with
            accessible keyboard support coming soon!
          </p>
          <div>
            <img src="/images/interaction.png" alt="" css={interactionStyles} />
          </div>
          <h1 css={h1Elements}>Animation</h1>
          <p css={pElements}>
            Let's face it, it's annoying when plugins get in the way of your
            personal design touch. Draggable isn't going to try and steal the
            show by forcing any unruly animation styles on you. Simply take your
            pick from our healthy serving of CSS selectors and style to your
            heart's desire.
          </p>
          <div>
            <img src="/images/animation.png" alt="" css={animationStyles} />
          </div>
          <div>
            <img src="/images/shopify.png" alt="" css={shopifyStyles} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
