import { Icon } from 'semantic-ui-react'
import Navbar from './Navbar'
import person from "./person.png"

/*svg button*/

import ButtonUnstyled, { ButtonUnstyledProps, buttonUnstyledClasses, } from '@mui/core/ButtonUnstyled';
import { styled, Theme } from '@mui/system';
import React from 'react'

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>,
) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? 'rgb(25,118,210)' : 'rgb(144,202,249)'
    };
  --hover-color: ${theme.palette.mode === 'light'
      ? '#ffffff'
      : '#ffffff'
    };
  --active-color: ${theme.palette.mode === 'light'
      ? '#ffffff'
      : '#ffffff'
    };

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef(function SvgButton(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<any>,
) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

/**/

export default function Header() {
  return (
    <div>
      <div className='background-img' id="Home">
        <Navbar />
        <div className="home-intro" >
          <div className="home-intro-text typewriter">
            <h1> Who is Hilal?</h1>
            <p>Hello, I'm a Junior Frontend developer who is just at the beginning of the road. Welcome to my personal blog, which I created to introduce myself and give a little information about my projects. If you want to reach me, I leave my e-mail address.</p>
            <a href="mailto:hilal.buyukgullu@gmail.com" target={"_blank"}>
              <div className="intro-mailbox">
                <SvgButton className='mail-button'>
                  <Icon className='color-blue' name='mail' />
                  Contact Me</SvgButton>
              </div>
            </a>
          </div>
          <div>
            <img src={person} className="intro-img" alt="person"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
