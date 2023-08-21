import React, { Component } from 'react';
import { Spring, config } from 'react-spring';
import MediaMessages from './MediaMessages';

class MessagesBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [
        {
          content: 'New file added',
          new: true,
        },
        {
          content: 'Folder deleted',
          new: true,
        },
        {
          content: 'New file added',
          new: true,
        },
      ],
    };
  }
    render() {
      const { media } = this.state;
  
      return (
        <Spring
          from={{ opacity: 0, translateY: this.props.open ? 0 : -50 }}
          to={{ opacity: this.props.open ? 1 : 0, translateY: this.props.open ? 0 : -50 }}
          config={config.stiff}
        >
          {interpOuter => (
            <div
              style={{
                opacity: interpOuter.opacity,
                transform: `translateY(${interpOuter.translateY}px)`,
                transition: 'opacity 0.5s, transform 0.5s',
              }}
              className="nav__message_bar"
            >
              <h3>Messages</h3>
              {media.map((item, i) => (
                <Spring
                  key={i}
                  from={{ h: this.props.open ? 100 : 0 }}
                  to={{ h: this.props.open ? 0 : (item.h || 0) }} 
                  config={config.wobbly}
                >
                  {style => (
                    <MediaMessages
                      key={i}
                      style={{ height: style.h }}
                      content={item.content}
                      open={this.props.open}
                      new={item.new}
                    />
                  )}
                </Spring>
              ))}
            </div>
          )}
        </Spring>
      );
    }
  }

export default MessagesBar;