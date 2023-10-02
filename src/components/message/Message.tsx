// type Props = {
//   text: string;
//   variant: 'success' | 'error' | 'info' | 'primary' | 'warning' | 'secondary';
//   show?: boolean;
// };

// const bgColors = {
//   success: '#00C851',
//   error: '#ff4444',
//   info: '#33b5e5',
//   primary: '#4285F4',
//   warning: '#ffbb33',
//   secondary: '#37474F',
// };

// const Message = ({ text, variant, show = true }: Props) => {
//   return (
//     <div
//       style={{
//         width: '80%',
//         backgroundColor: bgColors[variant],
//         borderRadius: '5px',
//         margin: '10px auto',
//         display: show ? 'flex' : 'none',
//         justifyContent: 'center',
//       }}
//     >
//       <div
//         style={{
//           color: '#fff',
//           padding: `${text ? '10px' : '0'}`,
//           fontSize: '1rem',
//         }}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// export default Message;

import React from 'react';

const color = {
  primary: '#4285F4',
  info: '#0099CC',
  success: 'rgb(32, 177, 32)',
  warning: '#FF8800',
  danger: '#CC0000',
  dark: '#343a40',
};

type Props = {
  type: 'primary' | 'info' | 'success' | 'danger';
  children: React.ReactNode;

  // id: string;
  width?: string;
};

const Message = ({
  children,

  width,

  type,
}: Props) => {
  const backgroundColor = color.primary;
  const backgroundColor2 = color.success;
  const backgroundColor3 = color.info;
  const backgroundColor4 = color.warning;
  const backgroundColor5 = color.danger;

  return (
    <div
      style={{
        backgroundColor:
          type === 'success'
            ? `${backgroundColor2}`
            : type === 'danger'
            ? `${backgroundColor5}`
            : type === 'info'
            ? `${backgroundColor3}`
            : `${backgroundColor}`,
        width: width ? width : '80%',
        color: '#fff',
        margin: 'auto',
        marginTop: '1rem',
        borderRadius: '.2rem',
        textAlign: 'center',
        padding: '..5rem ..2rem',
        fontSize: '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default Message;
