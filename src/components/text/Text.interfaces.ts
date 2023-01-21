import { CSSProperties } from 'react';

export interface TextProps {
  text: string;
  variant?: 'title' | 'sub-title' | 'label-value' | 'paragraph';
  style?: CSSProperties;
}
