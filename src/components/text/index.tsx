import { COLOR, FONT } from '@constants/themes';
import { CSSProperties } from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.interfaces';

const titleStyle: CSSProperties = {
  fontFamily: FONT.secondary,
  color: COLOR.primary,
  fontWeight: 700,
  fontSize: '36px',
  position: 'relative',
  zIndex: 2,
};

const subTitleStyle: CSSProperties = {
  fontFamily: FONT.secondary,
  color: COLOR.primary,
  fontWeight: 700,
  fontSize: '24px',
};

const StyledTitleWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 8px;
    z-index: 1;
    width: 300px;
    max-width: 100%;
    height: 8px;
    background-color: ${COLOR.backgroundSecondary};
  }
`;

const Text = ({ text, variant = 'title', style }: TextProps) => {
  if (variant === 'title') {
    return (
      <StyledTitleWrapper>
        <h1 style={{ ...titleStyle, ...style }}>{text}</h1>
      </StyledTitleWrapper>
    );
  }

  if (variant === 'sub-title') {
    return <h2 style={{ ...subTitleStyle, ...style }}>{text}</h2>;
  }

  return <p style={{ ...style }}>{text}</p>;
};

export default Text;
