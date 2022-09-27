import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';


interface IProps {
  children: React.ReactNode;
  prefix: string;
  zIndex: number;
}

export class Portal extends PureComponent<IProps> {
  containerEl: HTMLElement;

  constructor(props: any) {
    super(props);

    this.containerEl = document.createElement('div');
    this.containerEl.id = `${props.prefix}`;
    document.getElementById('modal').appendChild(this.containerEl);
  }

  componentWillUnmount() {
    this.containerEl.remove();
  }

  render() {
    return createPortal(this.props.children, this.containerEl);
  }
}
