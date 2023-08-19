import React, { Component } from 'react';
import { Spring, config } from 'react-spring';

class Media extends Component {
  render() {
    const cls = "nav__notifications__list__item" + (this.props.new ? " nav__notifications__list__item--new" : "");
    return (
<ul>
<li style={this.props.style} className={cls}>
        <div className="nav__notifications__list__item__display">
          <Spring
            from={{ x: 0.6 }}
            to={{ x: this.props.open ? 1 : 0.6 }}
            config={config.wobbly}
          >
            {interp => (
              <img
                src={this.props.imageURL}
                className="nav__notifications__list__item__photo"
                alt='pic'
                style={{ transform: `scale(${interp.x})` }}
              />
            )}
          </Spring>
        </div>
        <div className="nav__notifications__list__item__desc">
          <Spring
            from={{ x: 0 }}
            to={{ x: this.props.open ? 0 : 1 }}
            config={config.wobbly}
          >
            {interp => (
              <div
                style={{
                  transform: `translateZ(0) translateY(${-15 * interp.x}px)`,
                  // opacity: 1 - interp.x,
                }}
              >
                <em>{this.props.name}</em> {this.props.action} <em> {this.props.content}</em>.
              </div>
            )}
          </Spring>
        </div>
      </li>
</ul>
    );
  }
}

export default Media;
