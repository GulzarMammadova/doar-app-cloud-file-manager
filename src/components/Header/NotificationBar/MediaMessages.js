import React, { Component } from 'react';
import { Spring, config } from 'react-spring';

class MediaMessages extends Component {
  render() {
    const cls = "nav__notifications__list__item" + (this.props.new ? " nav__notifications__list__item--new" : "");
    return (
<ul>
<li style={this.props.style} className={cls}>
        <div className="nav__notifications__list__item__display">
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
                }}
              >
              <em> {this.props.content}</em>.
              </div>
            )}
          </Spring>
        </div>
      </li>
</ul>
    );
  }
}

export default MediaMessages;