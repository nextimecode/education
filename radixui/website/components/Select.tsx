import React from 'react';
import { Box, Flex, styled } from '@modulz/design-system';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const StyledSelect = styled('select', {
  appearance: 'none',
  '-webkit-appearance': 'none',
  border: 'none',
  fontSize: '$2',
  userSelect: 'none',
  backgroundColor: 'transparent',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontFamily: '$untitled',
  color: '$hiContrast',
  height: '$5',
  pl: '$1',
  pr: '$5',
  width: 'auto',
  fontVariantNumeric: 'tabular-nums',

  '&:focus': { outline: 'none' },
});

export function Select({ children, ...props }) {
  return (
    <Flex
      css={{
        position: 'relative',
        alignItems: 'center',
        borderRadius: '$1',
        '&:hover': { backgroundColor: '$slateA3' },
        '&:focus-within': { boxShadow: '0 0 0 2px $colors$slateA8' },
      }}
    >
      <StyledSelect {...props}>{children}</StyledSelect>

      <Box
        css={{
          position: 'absolute',
          right: '$1',
          pointerEvents: 'none',
        }}
      >
        <ChevronDownIcon />
      </Box>
    </Flex>
  );
}
