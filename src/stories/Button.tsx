import React from 'react';
import './button.scss';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default class Button extends React.Component<ButtonProps,{}>{
  public constructor(props:ButtonProps){
    super(props);
  }
  static defaultProps = {
    primary:true,
    size: 'medium',
    

  }

  public render() {
    const {primary, size, backgroundColor, label, ...props} = this.props;
    const mode = primary ? 'storybook-button' : 'storybook-button--secondary';
    return (
      <button type="button" className={['storybook-button',`storybook-button--${size}`, mode].join(' ')} style={{backgroundColor}} {...props}>
          <img src={"./icons/"+label+".ico"  } 
            className="imageHover"/>
          <b>{label}</b>
      
      </button>
    );
  }

}
