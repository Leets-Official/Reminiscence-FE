import styled from 'styled-components';

export const LightContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.8;
  filter: blur(20px);
`;

export const Rectangle1 = styled.div`
  position: absolute;
  width: 376px;
  height: 400px;
  left: calc(50%);
  top: -221px;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #9ea20e -50.76deg,
    rgba(0, 0, 0, 0.00000005) 25.36deg,
    rgba(0, 0, 0, 0.0080364) 250.07deg,
    rgba(0, 0, 0, 0) 168.7deg,
    #e1e53c 159.55deg,
    rgba(236, 240, 65, 0.63) 120.95deg,
    #9ea20e 298.24deg,
    rgba(0, 0, 0, 0.0000005) 390.36deg
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const Rectangle2 = styled.div`
  position: absolute;
  width: 376px;
  height: 400px;
  right: calc(50%);
  top: -221px;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #9ea20e -50.76deg,
    rgba(0, 0, 0, 0.00000005) 25.36deg,
    rgba(0, 0, 0, 0.0080364) 250.07deg,
    rgba(0, 0, 0, 0) 168.7deg,
    #e1e53c 159.55deg,
    rgba(236, 240, 65, 0.63) 120.95deg,
    #9ea20e 298.24deg,
    rgba(0, 0, 0, 0.0000005) 390.36deg
  );
`;

export const Ellipse1 = styled.div`
  position: absolute;
  width: 350px;
  height: 290px;
  left: calc(50% - 164.5px);
  top: 80px;

  background: #e1e53c;
  filter: blur(90px);
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const Ellipse2 = styled.div`
  position: absolute;
  width: 400px;
  height: 600px;
  border-radius: 700x;
  left: calc(50% - 200px);
  top: 50px;

  background: rgba(225, 229, 60, 0.8);
  filter: blur(100px);
  transform: matrix(0, -1, -1, 0, 0, 0);
  opacity: 1;
`;

export const Rectangle3 = styled.div`
  position: absolute;
  width: 700px;
  height: 400px;
  left: calc(50% - 350px);
  top: 150px;

  background: rgba(0, 0, 0, 0.8);
  filter: blur(20px);
  backdrop-filter: blur(35px);
  opacity: 0.45;
  mask-image: linear-gradient(to bottom, transparent, black, transparent);
`;

export const Rectangle4 = styled.div`
  position: absolute;
  width: 700px;
  height: 400px;
  left: calc(50% - 350px);
  top: 276px;

  background: rgba(0, 0, 0, 0.8);
  filter: blur(30px);
  backdrop-filter: blur(35px);
  opacity: 0.45;
  mask-image: linear-gradient(to bottom, transparent, black, transparent);
`;
