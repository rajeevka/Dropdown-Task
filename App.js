import React from 'react';
import unsplash from './unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './List.css';


class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async(term)=>{
    const response = await unsplash.get('/search/photos', {
        params: { query: term, per_page: 50},
    });

    this.setState({images: response.data.results});
}

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 

                <SearchBar/>
                    <button onSubmit={this.onSearchSubmit}>Search</button>
                <ImageList images ={this.state.images}/>

                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;