import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import React, { FC } from 'react';
import { Line, LineContent, LineNo, Pre } from './styles';

export interface CodeBlockProps {
  children?: React.ReactNode;
}

const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
  if (!children || children.type !== 'code') return null;

  const {
    props: { className, children: code = '' },
  } = children;

  const language = className ? className.replace(/language-/, '') as Language : 'markup';
  return (
    <Highlight {...defaultProps} theme={theme} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export { CodeBlock };
