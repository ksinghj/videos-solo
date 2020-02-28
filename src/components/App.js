import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

import '../styles/videogrid.css';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

      onTermSubmit = async term => {
          const res = await youtube.get("/search", {
              params: {
                  q: term
              }
          });

          this.setState({ videos: res.data.items });
      }

      onVideoSelect = video => {
          this.setState({ selectedVideo: video });
      }

    render() {
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoPlayer video={this.state.selectedVideo} />
                <div  className="card-grid">
                    <VideoList 
                        videos={this.state.videos} 
                        selectedVideo={this.state.selectedVideo} 
                        onVideoSelect={this.onVideoSelect}
                    />
                </div>
                <div className="columns is-centered">
                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                </div>
            </div>
        )
    }
}

export default App;
