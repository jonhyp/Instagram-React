import React from 'react';
import './New.css';

class New extends React.Component{
    state = {
        img: null,
        author:'',
        place:'',
        description:'',
        hashtags:'',
    };
  

    render(){
        return(
            <form id="new-post" onSubmit = {this.handleSubmit}>
                <input type="file"/>
                <input
                    type="text"
                    name="author"
                    placeholder = "Autor do post"

                />
                <input
                    type="text"
                    name="place"
                    placeholder = "Local do post"

                />
                <input
                    type="text"
                    name="description"
                    placeholder = "Descrição do post"

                />
                <input
                    type="text"
                    name="hashtags"
                    placeholder = "Hashtags do post"

                />
                <button type="submit" >Enviar</button>
            </form>
        );
    }
}
export default New;