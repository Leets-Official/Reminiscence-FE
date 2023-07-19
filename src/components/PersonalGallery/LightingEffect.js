import React from 'react';
import styled from 'styled-components';
/* Group 2172 */

const LightContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

/* Rectangle 1 */

const Rectangle1 = styled.div`
  position: absolute;
  width: 453px;
  height: 423px;
  left: 1122.54px;
  top: -221px;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #9ea20e -41.76deg,
    rgba(0, 0, 0, 0.4) 66.36deg,
    rgba(0, 0, 0, 0.480364) 187.07deg,
    rgba(0, 0, 0, 0) 268.7deg,
    #e1e53c 269.55deg,
    rgba(236, 240, 65, 0.83) 290.95deg,
    #9ea20e 318.24deg,
    rgba(0, 0, 0, 0.4) 426.36deg
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

/* Rectangle 2 */

const Rectangle2 = styled.div`
  position: absolute;
  width: 364px;
  height: 423px;
  left: 305.54px;
  top: -221px;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #9ea20e -41.76deg,
    rgba(0, 0, 0, 0.4) 66.36deg,
    rgba(0, 0, 0, 0.480364) 187.07deg,
    rgba(0, 0, 0, 0) 268.7deg,
    #e1e53c 269.55deg,
    rgba(236, 240, 65, 0.83) 290.95deg,
    #9ea20e 318.24deg,
    rgba(0, 0, 0, 0.4) 426.36deg
  );
`;

/* Ellipse 1 */

const Ellipse1 = styled.div`
  position: absolute;
  width: 329px;
  height: 290px;
  left: 520.54px;
  top: 394px;

  background: #e1e53c;
  filter: blur(90px);
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

/* Ellipse 2 */

const Ellipse2 = styled.div`
  position: absolute;
  width: 543.47px;
  height: 1065.57px;
  left: 1221.56px;
  top: 704.07px;

  background: rgba(225, 229, 60, 0.21);
  filter: blur(100px);
  transform: matrix(0, -1, -1, 0, 0, 0);
`;

/* Rectangle 3 */

const Rectangle3 = styled.div`
  position: absolute;
  width: 1081px;
  height: 434px;
  left: 158.54px;
  top: 104px;

  background: rgba(0, 0, 0, 0.25);
  filter: blur(50px);
  backdrop-filter: blur(55px);
  /* Note: backdrop-filter has minimal browser support */
`;

/* Rectangle 4 */

const Rectangle4 = styled.div`
  position: absolute;
  width: 702px;
  height: 462px;
  left: 346.54px;
  top: 276px;

  background: rgba(0, 0, 0, 0.25);
  filter: blur(50px);
  backdrop-filter: blur(55px);
  /* Note: backdrop-filter has minimal browser support */
`;

/* Ellipse 3 */

const Ellipse3 = styled.div`
  position: absolute;
  width: 134.74px;
  height: 33.24px;
  left: 722.54px;
  top: 394.29px;

  background: #e1e53c;
  filter: blur(40px);
  transform: matrix(0.67, 0.74, 0.74, -0.67, 0, 0);
`;

/* Ellipse 8 */

const Ellipse8 = styled.div`
  position: absolute;
  width: 134.74px;
  height: 33.24px;
  left: 664.28px;
  top: 98.32px;

  background: #e1e53c;
  filter: blur(40px);
  transform: matrix(0.03, 1, 1, -0.03, 0, 0);
`;

/* Ellipse 4 */

const Ellipse4 = styled.div`
  position: absolute;
  width: 99.2px;
  height: 35.27px;
  left: 678.54px;
  top: 212.32px;

  background: #e1e53c;
  filter: blur(40px);
  transform: matrix(0.26, 0.96, 0.96, -0.26, 0, 0);
`;

/* Ellipse 5 */

const Ellipse5 = styled.div`
  position: absolute;
  width: 99.2px;
  height: 35.27px;
  left: 683.54px;
  top: 285.32px;

  background: #e1e53c;
  filter: blur(40px);
  transform: matrix(0.26, 0.96, 0.96, -0.26, 0, 0);
`;

/* Ellipse 6 */

const Ellipse6 = styled.div`
  position: absolute;
  width: 99.2px;
  height: 35.27px;
  left: 698.54px;
  top: 192.01px;

  background: #e1e53c;
  filter: blur(40px);
  transform: matrix(0.51, 0.86, 0.86, -0.51, 0, 0);
`;

/* Ellipse 7 */

const Ellipse7 = styled.div`
  position: absolute;
  width: 33.77px;
  height: 77.8px;
  left: 690.11px;
  top: 121.72px;

  background: #e1e53c;
  filter: blur(40px);
`;

const LightingEffect = () => {
  return (
    <LightContainer>
      <Rectangle1 />
      <Rectangle2 />
      <Ellipse1 />
      <Ellipse2 />
      <Rectangle3 />
      <Rectangle4 />
      <Ellipse3 />
      <Ellipse4 />
      <Ellipse5 />
      <Ellipse6 />
      <Ellipse7 />
      <Ellipse8 />
    </LightContainer>
  );
};

export default LightingEffect;
