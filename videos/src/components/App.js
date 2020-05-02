import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyD_sF_WtAk4pnlJDkoJrZ_u9J1CZHeMTUA';

class App extends React.Component{  

    state = { videos: [] };

    onTermSubmit = async term => {

        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet', 
                type: 'video',
                maxResults: 10,
                key: KEY
            }
        });
        console.log(response);
        this.setState({ videos: response.data.items })
    };

    render() {
        return(
            <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            I have {this.state.videos.length} videos.
            <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;