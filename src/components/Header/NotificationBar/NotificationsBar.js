import React, { Component } from 'react';
import { Spring, config } from 'react-spring';
import Media from './Media';

class NotificationsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [
        {
          imgURL: 'https://randomuser.me/api/portraits/men/74.jpg',
          name: 'Gerlald Thompson',
          action: 'approved your request to',
          content: 'become friends',
          new: true,
        },
        {
          imgURL: 'https://randomuser.me/api/portraits/men/74.jpg',
          name: 'Gerlald Thompson',
          action: 'approved your request to',
          content: 'become friends',
          new: true,
        },
        {
          imgURL: 'https://randomuser.me/api/portraits/men/74.jpg',
          name: 'Gerlald Thompson',
          action: 'approved your request to',
          content: 'become friends',
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
              className="nav__notification_bar"
            >
              <h3>Notifications</h3>
              {media.map((item, i) => (
                <Spring
                  key={i}
                  from={{ h: this.props.open ? 100 : 0 }}
                  to={{ h: this.props.open ? 0 : (item.h || 0) }} 
                  config={config.wobbly}
                >
                  {style => (
                    <Media
                      key={i}
                      style={{ height: style.h }}
                      imageURL={item.imgURL}
                      name={item.name}
                      action={item.action}
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

export default NotificationsBar;
