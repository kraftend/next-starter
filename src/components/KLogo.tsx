import { FC } from 'react';
import { Link, Box } from '@chakra-ui/react';

export const KLogoSvg: FC<React.SVGProps<SVGSVGElement>> = ({ fill = '#000', ...props }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 487 538"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M446.636 155.175l-147.501.12-117.378 146.504s-69.709 81.504-66.954 182.383h-4.192l1.318-166.716V0H0v538h114.863L222.3 399.807 332.492 538H487L311.232 322.848l135.404-167.673z"
        fill={fill}
      />
    </svg>
  );
};

export const KLogoLink: FC<{ fill?: string }> = ({ fill }) => {
  return (
    <Link href="https://kraftend.com" isExternal>
      <Box maxW="20">
        <KLogoSvg fill={fill} />
      </Box>
    </Link>
  );
};
