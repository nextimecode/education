import * as React from 'react';
import copy from 'copy-to-clipboard';
import { IconButton } from '@modulz/design-system';
import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons';

export const CopyCodeButton = ({ code, ...props }) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  return (
    <IconButton
      aria-label="Copy code to clipboard"
      onClick={() => {
        copy(code);
        setHasCopied(true);
      }}
      {...props}
      css={{
        position: 'absolute',
        top: '$2',
        right: '$2',
        display: 'inline-flex',
        opacity: 0,
        '*:hover > &, &:focus': { opacity: 1, transition: '150ms linear' },
        ...props.css,
      }}
    >
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </IconButton>
  );
};
