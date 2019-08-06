import React from 'react';
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends React.Component{
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <spam>João Pedro</spam>
                            <span className="place">Rio Grande do Norte</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Fotos-de-Paisagens-Montanhas-Antenas-em-BH-Charles-Torres-s.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <button>
                                <img src={like} alt=""/>
                            </button>
                                <img src={comment} alt=""/>
                                <img src={send} alt=""/>
                        </div>
                        <strong>900 curtidas</strong>
                        <p>Um lugar incrivel, que fui!
                            <span>#Irado #React #Node</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <spam>João Pedro</spam>
                            <span className="place">Rio Grande do Norte</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Fotos-de-Paisagens-Montanhas-Antenas-em-BH-Charles-Torres-s.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>
                        <strong>900 curtidas</strong>
                        <p>Um lugar incrivel, que fui!
                            <span>#Irado #React #Node</span>
                        </p>
                    </footer>
                </article>
            </section>
        
        );
    }
}
export default Feed;
