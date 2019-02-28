import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import Word3D from './Word3D';

const styles = {
  default: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    fontStyle: 'italic',
    padding: 4,
  },
  large: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 16,
  },
};

const words = {
  large: ['React.js', 'JavaScript', 'Vue.js', 'Java', 'Engineer'],
  normal: [
    'HTML5',
    'CSS3',
    'JPA',
    'RESTFull',
    'Redux',
    'Frameworks',
    'DevOps',
    'VueX',
    'Github',
    'Full stack',
    'Creative',
    'MaterialDesign',
    'Bootstrap',
    'Firebase',
    'ES6',
    'Git',
  ],
  small: ['Aircraft', 'Photoshop', 'After Effect', 'Premiere', 'CAD', 'Travel', 'Adaptability ', 'Innovation', 'French', 'IT'],
};

class WordCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 20000);
  }

  renderWords() {
    const result = [];
    for (const key in words) {
      const style = styles[key];
      words[key].forEach(word => {
        result.push(
          <Word3D
            key={word}
            style={style}
            showDelay={2000 + result.length * 100}
          >
            {word}
          </Word3D>
        );
      });
    }
    return result;
  }

  render() {
    return (
      <TagCloud className="cloud" style={styles.default}>
        {this.renderWords()}
      </TagCloud>
    );
  }
}

export default WordCloud;
